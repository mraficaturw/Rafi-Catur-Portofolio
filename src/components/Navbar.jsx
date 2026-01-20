import { useState, useEffect, useRef } from "react";

const Navbar = ({ hidden = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  // Update indicator position on hover
  useEffect(() => {
    if (hoveredIndex !== null && itemRefs.current[hoveredIndex]) {
      const item = itemRefs.current[hoveredIndex];
      const menu = menuRef.current;
      if (item && menu) {
        const itemRect = item.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();
        setIndicatorStyle({
          width: `${itemRect.width}px`,
          left: `${itemRect.left - menuRect.left}px`,
          opacity: 1,
        });
      }
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [hoveredIndex]);

  // ⛔ Early return AFTER hooks to comply with Rules of Hooks
  if (hidden) return null;

  return (
    <nav className="navbar relative z-50 py-6 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
      {/* Logo with glow effect */}
      <div className="logo group cursor-pointer">
        <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white relative">
          <span className="relative z-10 bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent bg-[length:200%_auto] group-hover:animate-shimmer transition-all duration-300">
            Portofolio
          </span>
          {/* Logo glow on hover */}
          <span className="absolute inset-0 blur-xl bg-gradient-to-r from-teal-500/0 via-teal-500/30 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </h1>
      </div>

      {/* Menu with premium effects */}
      <ul
        ref={menuRef}
        className={`hidden md:flex items-center sm:gap-2 gap-1 relative
          md:static
          md:opacity-100 
          md:bg-zinc-900/60 md:backdrop-blur-xl md:border md:border-zinc-700/40
          px-2 py-2 rounded-full
          shadow-[0_0_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
          transition-all duration-500`}
      >
        {/* Sliding indicator background */}
        <div
          className="absolute h-[calc(100%-8px)] bg-gradient-to-r from-teal-500/20 via-teal-400/30 to-teal-500/20 rounded-full transition-all duration-300 ease-out pointer-events-none"
          style={{
            ...indicatorStyle,
            top: "4px",
          }}
        />

        {/* Glowing indicator */}
        <div
          className="absolute h-[calc(100%-8px)] bg-teal-400/10 blur-xl rounded-full transition-all duration-300 ease-out pointer-events-none"
          style={{
            ...indicatorStyle,
            top: "4px",
          }}
        />

        {menuItems.map((item, index) => (
          <li key={item.href} className="relative z-10">
            <a
              ref={(el) => (itemRefs.current[index] = el)}
              href={item.href}
              className="relative px-2 md:px-5 py-2.5 sm:text-base text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 rounded-full block group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Text with gradient on hover */}
              <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-teal-200 group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                {item.label}
              </span>

              {/* Bottom glow line */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent group-hover:w-3/4 transition-all duration-300 rounded-full" />

              {/* Sparkle effect on hover */}
              <span className="absolute top-1 right-2 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
            </a>
          </li>
        ))}

        {/* Outer glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </ul>
    </nav>
  );
};

export default Navbar;
