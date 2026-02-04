import { useState, useRef } from "react";
import ScrollingBackground from "@/components/ScrollingBackground";
import ProjectCard from "@/components/ProjectCard";
import StatsSection from "@/components/StatsSection";
import GlowButton from "@/components/GlowButton";
import Navbar from "@/components/Navbar";
import heroVideo from "@/assets/Backdrop.mp4";
import portrait from "@/assets/Portrait.png";
import discordLogo from "@/assets/discord-logo.png";
import robloxLogo from "@/assets/roblox-logo.png";

const Index = () => {
  const projects = [
    {
      title: "Shoot A Brainrot",
      image: "https://i.imgur.com/AUfyBxw.png",
      visits: "69.0M",
      ccu: "74.700",
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/78949013360566/Shoot-a-Brainrot",
      groupLink: "https://www.roblox.com/communities/503910868/Chefs-Special-Games#!/about"
    },
    {
      title: "Blind Shot",
      image: "https://i.imgur.com/ZdijnLu.png",
      visits: "115.0M",
      ccu: "52.800",
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/118614517739521/Blind-Shot",
      groupLink: "https://www.roblox.com/communities/699920026/Blind-Shot-Group#!/about"
    },
    {
      title: "Don't Get Crushed By 67",
      image: "https://i.imgur.com/hqx6BnZ.png",
      visits: "127.7M",
      ccu: "47.900",
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/124082555806669/Dont-Get-Crushed-By-67",
      groupLink: "https://www.roblox.com/communities/934390337/Dig-A-Tunnel-Studios#!/about"
    },
    {
      title: "The Lost Front",
      image: "https://i.imgur.com/ZeAKHA8.png",
      visits: "29.5M",
      ccu: "22.600",
      role: "Worked on anti-cheat helping patch multiple exploits.",
      gameLink: "https://www.roblox.com/games/102871156420149/The-Lost-Front",
      groupLink: "https://www.roblox.com/communities/9255939/Type-Productions#!/about"
    },
    {
      title: "Slap Duels",
      image: "https://i.imgur.com/wVOBLOh.png",
      visits: "11.9M",
      ccu: "13.600",
      role: "Anticheat - patching autofarms, fly hack, speedhack",
      gameLink: "https://www.roblox.com/communities/1053386149/Bye-Bye-Games#!/about",
      groupLink: "https://www.roblox.com/games/139766023909499/Slap-DUELS"
    },
    {
      title: "Arcane Conquest",
      image: "https://i.imgur.com/jUKGCfs.png",
      visits: "8.10M",
      ccu: "8.000",
      role: "Worked as a scripter doing mainly anti-cheat",
      gameLink: "https://www.roblox.com/games/125503319883299/ABYSS-COSMETICS-Arcane-Conquest",
      groupLink: "https://www.roblox.com/communities/14436378/Arcane-Conquest#!/about"
    },
    {
      title: "The Mexican Border | RP",
      image: "https://i.imgur.com/0xZkI8x.png",
      visits: "13.0M",
      ccu: "7.400",
      role: "Lead developer - scripting, building, UI",
      gameLink: "https://www.roblox.com/games/87615892291241/BANK-The-Mexican-Border-RP",
      groupLink: "https://www.roblox.com/communities/35952306/The-Mexican-Border-RP#!/about"
    },
    {
      title: "Emote RNG",
      image: "https://i.imgur.com/PIvsmzQ.png",
      visits: "9.9M",
      ccu: "7.400",
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/132768306953643/Emote-RNG",
      groupLink: "https://www.roblox.com/communities/6264771/Emote-Clan#!/about"
    },
    {
      title: "Build a Mini Golf",
      image: "https://i.imgur.com/7kurgnM.png",
      visits: "2.1M",
      ccu: "5.600",
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/113508814820816/Build-a-Mini-Golf",
      groupLink: "https://www.roblox.com/communities/5142143/A-S-c#!/about"
    },
    {
      title: "Climb And ZIP",
      image: "https://i.imgur.com/8dlxLXt.png",
      visits: "12.5M",
      ccu: "4.700",
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/79605710125811/Climb-And-Zip",
      groupLink: "https://www.roblox.com/communities/675364330/Muscle-Rabbit-Studio#!/about"
    },
    {
      title: "Super Soldiers",
      image: "https://i.imgur.com/kxGb3xT.jpeg",
      visits: "6.6M",
      ccu: "4.100",
      role: "Worked on anti-cheat helped patch multiple exploits.",
      gameLink: "https://www.roblox.com/games/119441025136387/Super-Soldiers",
      groupLink: "https://www.roblox.com/communities/32461765/Casix-Interactive#!/about"
    },
    {
      title: "Lone Survival",
      image: "https://i.imgur.com/dUOSZDm.png",
      visits: "28.4M",
      ccu: "3.000",
      role: "Worked on anti-cheat helped patch multiple exploits.",
      gameLink: "https://www.roblox.com/games/13559584718/Lone-Survival",
      groupLink: "https://www.roblox.com/communities/32062143/High-Table-Studio"
    },
    {
      title: "Virus Border Roleplay",
      image: "https://i.imgur.com/t3pyxcm.png",
      visits: "36.6M",
      ccu: "2.400",
      role: "Whitehat/exploit fixes - kill all, gunmods, silent aim etc",
      gameLink: "https://www.roblox.com/games/4888877755/Virus-Border-Roleplay",
      groupLink: "https://www.roblox.com/communities/5855434/CBRN#!/about"
    },
    {
      title: "The Robine",
      image: "https://i.imgur.com/zEbgoMY.png",
      visits: "18.4M",
      ccu: "800",
      role: "Lead dev for city systems, lead scripter, manager, whitehat/exploit fixes",
      gameLink: "https://www.roblox.com/games/509062192/JEWELRY-HEIST-Project-Realism",
      groupLink: "https://www.roblox.com/communities/2808906/The-Robine#!/about"
    },
    {
      title: "Half Life: City 8",
      image: "https://i.imgur.com/nO7Ubx1.jpeg",
      visits: "13.0M",
      ccu: "800",
      role: "Whitehat - kill all, auto complete job, gun mods",
      gameLink: "https://www.roblox.com/games/8906378074/BACK-Half-Life-City-8",
      groupLink: "https://www.roblox.com/communities/13426157/Half-Life-World"
    },
  ];

  // Glow Card component with mouse-following gradient effect
  const GlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative bg-zinc-900/60 border border-zinc-700/50 rounded-2xl overflow-hidden ${className}`}
      >
        {isHovered && (
          <div
            className="absolute pointer-events-none z-0 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.08), transparent 40%)',
              inset: 0,
              '--mouse-x': `${mousePosition.x}px`,
              '--mouse-y': `${mousePosition.y}px`,
            } as React.CSSProperties}
          />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    );
  };

  // Stats Card component
  const StatCard = ({ value, label }: { value: string; label: string }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-zinc-900/60 border border-zinc-700/50 rounded-2xl overflow-hidden p-6 md:p-8"
      >
        {isHovered && (
          <div
            className="absolute pointer-events-none z-0 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.08), transparent 40%)',
              inset: 0,
              '--mouse-x': `${mousePosition.x}px`,
              '--mouse-y': `${mousePosition.y}px`,
            } as React.CSSProperties}
          />
        )}
        <div className="relative z-10">
          <p className="text-4xl md:text-5xl font-black text-white mb-2">{value}</p>
          <p className="text-zinc-400 text-sm md:text-base">{label}</p>
        </div>
      </div>
    );
  };

  const ContactButton = ({ href, icon, label }: { href: string; icon: string; label: string }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <a
        ref={buttonRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-zinc-800/80 border border-zinc-600/50 rounded-full overflow-hidden px-8 py-4 flex items-center justify-center gap-3 transition-all duration-200 hover:border-zinc-500"
      >
        {isHovered && (
          <div
            className="absolute pointer-events-none z-0 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(150px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)',
              inset: 0,
              '--mouse-x': `${mousePosition.x}px`,
              '--mouse-y': `${mousePosition.y}px`,
            } as React.CSSProperties}
          />
        )}
        <img src={icon} alt={label} className="w-6 h-6 relative z-10" />
        <span className="text-white font-medium text-base relative z-10">{label}</span>
      </a>
    );
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden animate-fade-in">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 text-center max-w-4xl -mt-10 sm:-mt-20 px-2">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-foreground mb-4 tracking-tight">
            NOTORIOUS
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Scripting</span> Things Right.
          </p>
          
          <StatsSection />
          
          <div className="flex gap-4 justify-center mt-4">
            <GlowButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              About Me
            </GlowButton>
          </div>
        </div>
      </section>

      {/* About Me & Projects with Scrolling Background */}
      <div className="relative bg-zinc-950">
        <ScrollingBackground />
        
        {/* About Me Section - Full page layout like reference */}
        <section id="about" className="relative z-10 py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto w-full">
            {/* Header */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-center mb-4 italic">About Me</h2>
            <p className="text-zinc-400 text-center mb-16 text-base sm:text-lg max-w-xl mx-auto">
              Learn more about me and what makes my work stand out.
            </p>
            
            {/* Two column cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Left Card - Bio */}
              <GlowCard className="p-8 md:p-10">
                <p className="text-zinc-300 leading-relaxed mb-5 text-base md:text-lg">
                  I'm <span className="text-cyan-400 font-semibold">Jameson</span>, but most people know me as <span className="text-cyan-400 font-semibold">Notorious</span>, Jarmy05, or NotoriousWhiteHat.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-5 text-base md:text-lg">
                  Been scripting since I was 11 - almost <span className="text-white font-semibold">6 years</span> now. Started out making Lua scripts for executors as I was very interested in finding vulnerabilities. Around 2 years ago I figured out I could make money from this and started doing <span className="text-cyan-400 font-semibold">whitehat work</span>.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-5 text-base md:text-lg">
                  Now I work with some of the <span className="text-white font-semibold">biggest games on Roblox</span> doing a lot more than just vulnerability finding. I have scripted in games with <span className="text-cyan-400 font-semibold">hundreds of millions of visits</span>.
                </p>
                <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                  Since turning 16 I've been doing <span className="text-white font-semibold">full game dev work</span> - actual systems, gameplay, UI, the whole thing. If you need someone who knows the game from both sides, that's me.
                </p>
              </GlowCard>

              {/* Right Card - Contact Info */}
              <GlowCard className="p-8 md:p-10">
                <p className="text-zinc-300 leading-relaxed mb-5 text-base md:text-lg">
                  Whether you're looking for a <span className="text-white font-semibold">trusted developer</span> or need help with <span className="text-white font-semibold">anti-cheat solutions</span>, I'm here to help you protect and grow your project.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-5 text-base md:text-lg">
                  I specialize in <span className="text-cyan-400 font-semibold">security, scripting, and game development</span>, ensuring your game reaches its <span className="text-white font-semibold">full potential</span>.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-8 text-base md:text-lg">
                  If you want to work with a <span className="text-cyan-400 font-semibold">NOTORIOUS</span> developer, you're in the right place. Reach out and let's get started.
                </p>
                
                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <ContactButton 
                    href="https://discord.com/users/959238547133595648"
                    icon={discordLogo}
                    label="Discord"
                  />
                  <ContactButton 
                    href="https://www.roblox.com/users/37294166/profile"
                    icon={robloxLogo}
                    label="Roblox"
                  />
                </div>
              </GlowCard>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <StatCard value="74K+" label="Peak CCU" />
              <StatCard value="500M+" label="Total Visits" />
              <StatCard value="15+" label="Games Worked On" />
              <StatCard value="6+" label="Years Experience" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8 sm:mb-12">Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;