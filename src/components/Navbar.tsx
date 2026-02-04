import { useState, useRef } from "react";

const Navbar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 sm:px-4">
      <div
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center gap-6 sm:gap-10 px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-zinc-900/40 backdrop-blur-md border border-zinc-500/50"
        style={{
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Hover glow effect */}
        {isHovered && (
          <div
            className="absolute pointer-events-none z-0 transition-opacity duration-300 rounded-full"
            style={{
              background:
                "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)",
              inset: 0,
              "--mouse-x": `${mousePosition.x}px`,
              "--mouse-y": `${mousePosition.y}px`,
            } as React.CSSProperties}
          />
        )}

        {/* Left Nav Links */}
        <button
          onClick={() => scrollToSection("home")}
          className="relative z-10 text-zinc-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="relative z-10 text-zinc-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium"
        >
          About Me
        </button>

        {/* Center Logo */}
        <div className="relative z-10 mx-4 sm:mx-8">
          <span
            className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Notorious
          </span>
        </div>

        {/* Right Nav Link */}
        <button
          onClick={() => scrollToSection("projects")}
          className="relative z-10 text-zinc-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-medium"
        >
          Games
        </button>
      </div>
    </nav>
  );
};

export default Navbar;