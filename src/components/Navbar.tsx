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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={navRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center gap-8 px-8 py-3 rounded-full bg-zinc-800/30 backdrop-blur-sm border border-zinc-600/40"
      >
        {/* Hover glow effect */}
        {isHovered && (
          <div
            className="absolute pointer-events-none z-0 transition-opacity duration-300 rounded-full"
            style={{
              background:
                "radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.04), transparent 40%)",
              inset: 0,
              "--mouse-x": `${mousePosition.x}px`,
              "--mouse-y": `${mousePosition.y}px`,
            } as React.CSSProperties}
          />
        )}

        {/* Nav Links */}
        <button
          onClick={() => scrollToSection("home")}
          className="relative z-10 text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="relative z-10 text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          About Me
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="relative z-10 text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          Games
        </button>
      </div>
    </nav>
  );
};

export default Navbar;