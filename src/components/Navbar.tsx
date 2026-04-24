import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type SectionId = "home" | "about" | "projects";

const navLinks: { label: string; sectionId: SectionId }[] = [
  { label: "Home", sectionId: "home" },
  { label: "About Me", sectionId: "about" },
  { label: "Games", sectionId: "projects" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observe = (el: Element, id: SectionId) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    };

    const heroEl = document.getElementById("home");
    if (heroEl) observe(heroEl, "home");

    const aboutEl = document.getElementById("about");
    if (aboutEl) observe(aboutEl, "about");

    const projectsEl = document.getElementById("projects");
    if (projectsEl) observe(projectsEl, "projects");

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    setMenuOpen(false);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClass = (id: SectionId) => {
    const base =
      "px-4 py-2 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-200 border";
    if (id === activeSection) {
      return `${base} text-cyan-400 border-cyan-400/40 bg-zinc-900 shadow-[0_0_12px_rgba(34,211,238,0.15)]`;
    }
    return `${base} text-zinc-400 border-zinc-700/50 bg-zinc-800/60 hover:text-white hover:border-zinc-500/50`;
  };

  return (
    <nav className="fixed top-0 left-0 w-screen z-50">
      <div className="bg-zinc-950/50 backdrop-blur-xl border-b border-zinc-800/40">
        <div className="max-w-[1920px] mx-auto px-6 py-3 grid grid-cols-[auto_1fr_auto] items-center">
          {/* Brand — left */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-bold uppercase tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            NOTORIOUS
          </button>

          {/* Desktop nav links — center */}
          <div className="hidden md:flex items-center justify-center gap-3">
            {navLinks.map(({ label, sectionId }) => (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={linkClass(sectionId)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger — right (desktop spacer) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors duration-200 p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          {/* Desktop right spacer to balance grid */}
          <div className="hidden md:block" aria-hidden="true" />
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-zinc-800/60 px-6 py-4 flex flex-col gap-3">
            {navLinks.map(({ label, sectionId }) => (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={linkClass(sectionId)}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;