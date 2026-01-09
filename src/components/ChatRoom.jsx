import { useState, useEffect, useRef } from "react";
import { auth, loginWithGoogle, logout, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

export default function ChatRoom() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cek login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Ambil pesan real-time
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  // Handle typing indicator
  const handleInputChange = (e) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  // Kirim pesan
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await addDoc(collection(db, "messages"), {
      text: message,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: serverTimestamp()
    });
    setMessage("");
    setIsTyping(false);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-700/50">
        <h2 className="text-xl font-bold text-white flex items-center gap-3">
          <span className="inline-flex w-9 h-9 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl items-center justify-center shadow-lg shadow-teal-500/30">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          Chat Room
        </h2>
        {user && (
          <div className="flex items-center gap-3">
            {/* User avatar with pulsing ring */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-40 animate-pulse-ring" />
              <img
                src={user.photoURL}
                alt="avatar"
                className="relative w-9 h-9 rounded-full ring-2 ring-teal-500/50 shadow-lg shadow-teal-500/20"
              />
              {/* Online indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900 animate-pulse" />
            </div>
            <span className="text-white font-medium text-sm hidden sm:block">{user.displayName?.split(' ')[0]}</span>
            <button
              onClick={logout}
              className="relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-500 px-4 py-1.5 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Logout</span>
            </button>
          </div>
        )}
      </div>

      {/* Area pesan */}
      <div className="h-80 overflow-y-auto border border-zinc-700/50 p-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm mb-2 space-y-3 chat-scrollbar scroll-smooth">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-zinc-500 text-sm">
            <div className="text-center">
              <div className="text-3xl mb-2">💭</div>
              <p>No messages yet. Start the conversation!</p>
            </div>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={msg.id}
              className={`flex gap-2 animate-message-pop ${msg.uid === user?.uid ? "justify-end" : "justify-start"}`}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {msg.uid !== user?.uid && (
                <div className="relative group/avatar flex-shrink-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-0 group-hover/avatar:opacity-60 blur transition-opacity duration-300" />
                  <img
                    src={msg.photoURL || "https://via.placeholder.com/40"}
                    alt="avatar"
                    className="relative w-8 h-8 rounded-full ring-1 ring-zinc-700"
                  />
                </div>
              )}
              <div
                className={`p-3 rounded-2xl max-w-[75%] shadow-lg transition-all duration-300 hover:scale-[1.02] ${msg.uid === user?.uid
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-teal-500/20 rounded-br-sm"
                  : "bg-zinc-700/80 text-white shadow-black/20 rounded-bl-sm"
                  }`}
              >
                <div className={`text-xs mb-1 ${msg.uid === user?.uid ? 'text-teal-100' : 'text-zinc-400'}`}>
                  {msg.displayName}
                </div>
                <div className="text-sm leading-relaxed">{msg.text}</div>
              </div>
              {msg.uid === user?.uid && (
                <div className="relative group/avatar flex-shrink-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-0 group-hover/avatar:opacity-60 blur transition-opacity duration-300" />
                  <img
                    src={msg.photoURL || "https://via.placeholder.com/40"}
                    alt="avatar"
                    className="relative w-8 h-8 rounded-full ring-1 ring-teal-500/50"
                  />
                </div>
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Form login / kirim pesan */}
      {user ? (
        <form onSubmit={sendMessage} className="relative">
          {/* Typing indicator */}
          {isTyping && (
            <div className="absolute -top-6 left-0 flex items-center gap-1 text-xs text-teal-400">
              <span>Typing</span>
              <span className="flex gap-0.5">
                <span className="w-1 h-1 bg-teal-400 rounded-full typing-dot" />
                <span className="w-1 h-1 bg-teal-400 rounded-full typing-dot" />
                <span className="w-1 h-1 bg-teal-400 rounded-full typing-dot" />
              </span>
            </div>
          )}

          <div className="flex gap-2 flex-wrap sm:flex-nowrap w-full">
            <div className="relative flex-1 min-w-0 group/input">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl blur opacity-0 group-focus-within/input:opacity-40 transition-opacity duration-500" />
              <input
                type="text"
                value={message}
                onChange={handleInputChange}
                placeholder="Ketik pesan..."
                className="relative w-full p-3 px-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-700 focus:outline-none focus:border-teal-500/50 transition-all duration-300 placeholder-zinc-500"
              />
            </div>
            <button
              type="submit"
              className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto group/send"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/send:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center justify-center gap-2">
                Send
                <svg className="w-4 h-4 group-hover/send:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 py-12">
          {/* Premium Google Login Button */}
          <button
            onClick={loginWithGoogle}
            className="relative group overflow-hidden flex items-center gap-3 bg-white text-gray-700 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:cursor-pointer"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Google Icon with glow */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-40 blur transition-opacity duration-500" />
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google logo"
                className="relative w-6 h-6"
              />
            </div>

            <span className="relative font-medium">Login with Google</span>
          </button>

          <p className="text-sm text-zinc-500 flex items-center gap-2">
            <span className="w-8 h-px bg-zinc-700" />
            Login untuk mengirim pesan
            <span className="w-8 h-px bg-zinc-700" />
          </p>
        </div>
      )}
    </div>
  );
}

