import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import LogoLoop from './components/LogoLoop/LogoLoop';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  // useEffect(() => {
  //   const isReload =
  //     performance.getEntriesByType("navigation")[0]?.type === "reload";

  //   if (isReload) {
  //     // Ambil path tanpa hash
  //     const baseUrl = window.location.origin + "/portofolio/";
  //     window.location.replace(baseUrl);
  //   }
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            {/* Quote Box - Premium Edition */}
            <div className="relative group w-fit mb-6">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              {/* Floating glow behind */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 via-cyan-400/10 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Main container */}
              <div className="relative flex items-center gap-4 bg-gradient-to-br from-zinc-800/90 via-zinc-900 to-zinc-800/90 backdrop-blur-xl p-4 pr-6 rounded-2xl border border-zinc-700/50 shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)] transition-all duration-500 group-hover:-translate-y-1">

                {/* Avatar with animated ring */}
                <div className="relative">
                  {/* Rotating ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-400 rounded-xl opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 animate-spin-slow" />
                  {/* Pulsing ring */}
                  <div className="absolute -inset-1.5 bg-teal-400/30 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="./assets/profile1.png"
                    className="relative w-12 h-12 rounded-xl object-cover ring-2 ring-zinc-700 group-hover:ring-teal-500/50 transition-all duration-500"
                    alt="Profile"
                  />
                </div>

                {/* Quote content */}
                <div className="flex items-center gap-2">
                  {/* Opening quote mark */}
                  <span className="text-3xl font-serif text-teal-400/60 group-hover:text-teal-400 transition-colors duration-500 -mt-4">"</span>

                  {/* Quote text with gradient */}
                  <p className="text-base font-medium text-zinc-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-teal-200 group-hover:to-white group-hover:bg-clip-text transition-all duration-500">
                    Learning is part of the job
                  </p>

                  {/* Closing quote mark */}
                  <span className="text-3xl font-serif text-teal-400/60 group-hover:text-teal-400 transition-colors duration-500 -mt-4">"</span>
                </div>

                {/* Sparkle decorations */}
                <div className="absolute top-2 right-3 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                <div className="absolute bottom-3 right-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200 transition-opacity duration-300" />

                {/* Top highlight line */}
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Muhammad Rafi Catur Wijayanto" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="A passionate Web Developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV.pdf"
                download="Muhammad_Rafi_Catur_Wijayanto_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="M. Rafi Catur W."
              title="Web Developer"
              handle="mraficw"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/profile.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-teal-500/40 shadow-[0_0_30px_rgba(20,184,166,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-teal-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="Undergraduate student of Singaperbangsa University Karawang, with a focus as a Web Developer and DevOps Engineer, with a track record of less than 1 year in website development. I am particularly interested in implementing Artificial Intelligence to create engaging, scalable, and high-performance digital solutions to drive your business growth."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-teal-400">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      1<span className="text-teal-400">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.72<span className="text-teal-400">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>


                <ShinyText
                  text="Progress over Perfection."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-teal-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>

          {/* Logo Loop Animation */}
          <div
            className="mt-10 mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            {/* Outer glow container */}
            <div className="relative group">
              {/* Glow effect behind */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main container */}
              <div className="relative bg-gradient-to-br from-zinc-800/60 via-zinc-900/80 to-zinc-800/60 backdrop-blur-md rounded-2xl py-5 overflow-hidden border border-zinc-700/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(0,0,0,0.3)] group-hover:border-teal-500/30 transition-all duration-500">
                {/* Subtle top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent" />

                <LogoLoop
                  logos={listTools.map(tool => ({ src: tool.gambar, alt: tool.nama, title: tool.nama }))}
                  speed={50}
                  direction="left"
                  logoHeight={38}
                  gap={48}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#27272a"
                  ariaLabel="Technology skills"
                  className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Subtle bottom shadow */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-900/50 to-transparent" />
              </div>
            </div>
          </div>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-28" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            >
              <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">My Projects</h1>
              <p className="text-base/loose text-center opacity-50 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
            </ChromaGrid>
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/b02b8ddfc25a10b189d26da39da51442"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
