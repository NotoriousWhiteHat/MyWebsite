import { useState, useRef } from "react";
import ScrollingBackground from "@/components/ScrollingBackground";
import ProjectCard from "@/components/ProjectCard";
import StatsSection from "@/components/StatsSection";
import Navbar from "@/components/Navbar";
import { useRobloxStats, formatCompact } from "@/hooks/useRobloxStats";
import heroVideo from "@/assets/Backdrop.mp4";
import portrait from "@/assets/Portrait.png";
import discordLogo from "@/assets/discord-logo.png";
import robloxLogo from "@/assets/roblox-logo.png";

const Index = () => {
  const { stats } = useRobloxStats();
  const liveGames = stats?.games ?? {};
  const livePeaks = stats?.peaks ?? {};

  // Effective peak = the greater of the hardcoded baseline and the
  // self-updating record logged by the server.
  const effectivePeak = (universeId: string, baseline: number) =>
    Math.max(baseline, livePeaks[universeId] ?? 0);

  const projects = [
    {
      title: "TNT Sandbox",
      image: "https://i.imgur.com/hY6DXgY.png",
      universeId: "10278375047",
      visits: "2.3B",
      peakCcu: 7400,
      role: "Worked as main scripter",
      gameLink: "https://www.roblox.com/games/117430576240550/TNT-Sandbox",
      groupLink: "https://www.roblox.com/communities/275883088/Toes-on-Fire-Games"
    },
    {
      title: "Dungeon Quest",
      image: "https://i.imgur.com/CJPIgJZ.png",
      universeId: "848145103",
      visits: "2.3B",
      peakCcu: 60000,
      role: "Whitehat work - anti-exploit",
      gameLink: "https://www.roblox.com/games/2414851778/Dungeon-Quest-RPG-Adventure",
      groupLink: "https://www.roblox.com/communities/4788489/Dungeon-Quest-by-Voldex#!/about"
    },
    {
      title: "Shoot A Brainrot",
      image: "https://i.imgur.com/AUfyBxw.png",
      universeId: "8220738785",
      visits: "69.0M",
      peakCcu: 74700,
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/78949013360566/Shoot-a-Brainrot",
      groupLink: "https://www.roblox.com/communities/503910868/Chefs-Special-Games#!/about"
    },
    {
      title: "Blind Shot",
      image: "https://i.imgur.com/ZdijnLu.png",
      universeId: "9277195104",
      visits: "115.0M",
      peakCcu: 52800,
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/118614517739521/Blind-Shot",
      groupLink: "https://www.roblox.com/communities/699920026/Blind-Shot-Group#!/about"
    },
    {
      title: "Don't Get Crushed By 67",
      image: "https://i.imgur.com/hqx6BnZ.png",
      universeId: "8620685718",
      visits: "127.7M",
      peakCcu: 47900,
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/124082555806669/Dont-Get-Crushed-By-67",
      groupLink: "https://www.roblox.com/communities/934390337/Dig-A-Tunnel-Studios#!/about"
    },
    {
      title: "Escape Maze For Brainrots",
      image: "https://i.imgur.com/noqG3c1.png",
      universeId: "9684648839",
      visits: "10.9M",
      peakCcu: 31600,
      role: "Former Scripter - I coded the entire game",
      gameLink: "https://www.roblox.com/games/136255418982514/Escape-Maze-For-Brainrots",
      groupLink: "https://www.roblox.com/communities/1027641927/67-Cheese#!/about"
    },
    {
      title: "The Lost Front",
      image: "https://i.imgur.com/ZeAKHA8.png",
      universeId: "7935634976",
      visits: "29.5M",
      peakCcu: 22600,
      role: "Worked on anti-cheat helping patch multiple exploits.",
      gameLink: "https://www.roblox.com/games/102871156420149/The-Lost-Front",
      groupLink: "https://www.roblox.com/communities/9255939/Type-Productions#!/about"
    },
    {
      title: "Slap Duels",
      image: "https://i.imgur.com/wVOBLOh.png",
      universeId: "8080863905",
      visits: "11.9M",
      peakCcu: 13600,
      role: "Anticheat - patching autofarms, fly hack, speedhack",
      gameLink: "https://www.roblox.com/games/139766023909499/Slap-DUELS",
      groupLink: "https://www.roblox.com/communities/1053386149/Bye-Bye-Games#!/about"
    },
    {
      title: "Survive Lava For Anime Fruits",
      image: "https://i.imgur.com/BN2EXg4.png",
      universeId: "9722798126",
      visits: "9.9M",
      peakCcu: 11600,
      role: "Lead developer/Manager",
      gameLink: "https://www.roblox.com/games/102904142607789/Survive-LAVA-for-Anime-Fruits",
      groupLink: "https://www.roblox.com/communities/640554863/MaxLevel-Games#!/about"
    },
    {
      title: "Climb Staircase For Brainrots",
      image: "https://i.imgur.com/CmaM9hz.png",
      universeId: "9619579678",
      visits: "9.7M",
      peakCcu: 9400,
      role: "Lead developer/Manager",
      gameLink: "https://www.roblox.com/games/118175543018675/Climb-Staircase-For-Brainrots",
      groupLink: "https://www.roblox.com/communities/528995834/Pocket-Change#!/about"
    },
    {
      title: "Arcane Conquest",
      image: "https://i.imgur.com/jUKGCfs.png",
      universeId: "7093527744",
      visits: "8.10M",
      peakCcu: 8000,
      role: "Worked as a scripter doing mainly anti-cheat",
      gameLink: "https://www.roblox.com/games/125503319883299/ABYSS-COSMETICS-Arcane-Conquest",
      groupLink: "https://www.roblox.com/communities/14436378/Arcane-Conquest#!/about"
    },
    {
      title: "The Mexican Border | RP",
      image: "https://i.imgur.com/0xZkI8x.png",
      universeId: "7645013075",
      visits: "13.0M",
      peakCcu: 7400,
      role: "Lead developer - scripting, building, UI",
      gameLink: "https://www.roblox.com/games/87615892291241/BANK-The-Mexican-Border-RP",
      groupLink: "https://www.roblox.com/communities/35952306/The-Mexican-Border-RP#!/about"
    },
    {
      title: "Emote RNG",
      image: "https://i.imgur.com/PIvsmzQ.png",
      universeId: "8313824597",
      visits: "9.9M",
      peakCcu: 7400,
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/132768306953643/Emote-RNG",
      groupLink: "https://www.roblox.com/communities/6264771/Emote-Clan#!/about"
    },
    {
      title: "Build a Mini Golf",
      image: "https://i.imgur.com/7kurgnM.png",
      universeId: "9046316249",
      visits: "2.1M",
      peakCcu: 5600,
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/113508814820816/Build-a-Mini-Golf",
      groupLink: "https://www.roblox.com/communities/5142143/A-S-c#!/about"
    },
    {
      title: "Climb And ZIP",
      image: "https://i.imgur.com/8dlxLXt.png",
      universeId: "8606799872",
      visits: "12.5M",
      peakCcu: 4700,
      role: "Worked as a scripter doing regular updates",
      gameLink: "https://www.roblox.com/games/79605710125811/Climb-And-Zip",
      groupLink: "https://www.roblox.com/communities/675364330/Muscle-Rabbit-Studio#!/about"
    },
    {
      title: "Super Soldiers",
      image: "https://i.imgur.com/kxGb3xT.jpeg",
      universeId: "7920020824",
      visits: "6.6M",
      peakCcu: 4100,
      role: "Worked on anti-cheat helped patch multiple exploits.",
      gameLink: "https://www.roblox.com/games/119441025136387/Super-Soldiers",
      groupLink: "https://www.roblox.com/communities/32461765/Casix-Interactive#!/about"
    },
    {
      title: "Dungeon Quest Reborn",
      image: "https://i.imgur.com/ez5Gn89.png",
      universeId: "9931749389",
      visits: "12M",
      peakCcu: 27000,
      role: "Former Founder",
      gameLink: "https://www.roblox.com/games/77649408247578/Dungeon-Quest-Reborn",
      groupLink: "https://www.roblox.com/communities/496909722/Delta-Quarters-OG#!/about"
    },
    {
      title: "+1 Speed Dragon Escape",
      image: "https://i.imgur.com/3KIHrkt.png",
      universeId: "9762224678",
      visits: "3.3M",
      peakCcu: 3300,
      role: "WWorked as a scripter doing monetization updates",
      gameLink: "https://www.roblox.com/games/118333806535904/1-Speed-Dragon-Escape",
      groupLink: "https://www.roblox.com/communities/34374281/1-Every-Second-Games-Glorious-Games#!/aboutt"
    },
    {
      title: "Lone Survival",
      image: "https://i.imgur.com/dUOSZDm.png",
      universeId: "4712109542",
      visits: "28.4M",
      peakCcu: 3000,
      role: "Worked on anti-cheat helped patch multiple exploits.",
      gameLink: "https://www.roblox.com/games/13559584718/Lone-Survival",
      groupLink: "https://www.roblox.com/communities/32062143/High-Table-Studio"
    },
    {
      title: "Virus Border Roleplay",
      image: "https://i.imgur.com/t3pyxcm.png",
      universeId: "1668757602",
      visits: "36.6M",
      peakCcu: 2400,
      role: "Whitehat/exploit fixes - kill all, gunmods, silent aim etc",
      gameLink: "https://www.roblox.com/games/4888877755/Virus-Border-Roleplay",
      groupLink: "https://www.roblox.com/communities/5855434/CBRN#!/about"
    },
    {
      title: "The Robine",
      image: "https://i.imgur.com/zEbgoMY.png",
      universeId: "197306872",
      visits: "18.4M",
      peakCcu: 800,
      role: "Lead dev for city systems, lead scripter, manager, whitehat/exploit fixes",
      gameLink: "https://www.roblox.com/games/509062192/JEWELRY-HEIST-Project-Realism",
      groupLink: "https://www.roblox.com/communities/2808906/The-Robine#!/about"
    },
    {
      title: "Half Life: City 8",
      image: "https://i.imgur.com/nO7Ubx1.jpeg",
      universeId: "3365197759",
      visits: "13.0M",
      peakCcu: 800,
      role: "Whitehat - kill all, auto complete job, gun mods",
      gameLink: "https://www.roblox.com/games/8906378074/BACK-Half-Life-City-8",
      groupLink: "https://www.roblox.com/communities/13426157/Half-Life-World"
    },
  ];

  // Sort by live active players (falls back to peak CCU before live data loads)
  const sortedProjects = [...projects].sort((a, b) => {
    const aScore = liveGames[a.universeId]?.playing ?? effectivePeak(a.universeId, a.peakCcu);
    const bScore = liveGames[b.universeId]?.playing ?? effectivePeak(b.universeId, b.peakCcu);
    return bScore - aScore;
  });

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

  // Wide, short Roblox profile card (built, not a screenshot)
  const RobloxProfileCard = () => {
    const profile = stats?.profile;
    // Use `||` (not `??`) so a 0 from a rate-limited/failed refresh, or an
    // empty avatar URL, falls back to a known-good value instead of showing 0.
    const followers = profile?.followers || 12124;
    const friends = profile?.friends || 136;
    const following = profile?.following || 2;
    const avatarUrl =
      profile?.avatarUrl ||
      "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-21B65258ED72E97A85B9871F0D4643CE-Png/420/420/AvatarHeadshot/Png/noFilter";

    const Stat = ({ value, label }: { value: string; label: string }) => (
      <div className="text-center">
        <div className="text-lg md:text-xl font-black text-white tabular-nums leading-none">{value}</div>
        <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wider text-zinc-500">{label}</div>
      </div>
    );

    return (
      <a
        href="https://www.roblox.com/users/37294166/profile"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col sm:flex-row items-center gap-5 sm:gap-8 overflow-hidden rounded-2xl border border-zinc-700/50 bg-gradient-to-r from-zinc-900/80 to-zinc-900/40 p-5 md:px-8 md:py-6 transition-all duration-300 hover:border-[#4a9eff]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
      >
        {/* Blue glow accent */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#4a9eff] opacity-[0.07] blur-3xl" />

        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full border-2 border-[#4a9eff]/40 bg-zinc-800">
            <img
              src={avatarUrl}
              alt="Roblox avatar"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-900 bg-green-500">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
        </div>

        {/* Name + username + bio */}
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="text-xl md:text-2xl font-black text-white">notorious</span>
            {/* Verified badge */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6 shrink-0" aria-label="Verified">
              <path
                fill="#0d76ea"
                d="M12 1l2.4 1.8 3-.2 1 2.8 2.6 1.5-.7 2.9 1.5 2.6-2.1 2.1.3 3-2.8 1-1.3 2.7-3-.5-2.6 1.5-2-2.2-3 .5-1.3-2.7-2.8-1 .3-3-2.1-2.1L4 8.2 3.3 5.3l2.6-1.5 1-2.8 3 .2z"
              />
              <path fill="#fff" d="M10.6 15.2l-2.9-2.9 1.3-1.3 1.6 1.6 4-4 1.3 1.3z" />
            </svg>
          </div>
          <div className="mt-0.5 text-sm text-zinc-400">@FGIBxBaconBit</div>
          <div className="mt-1 text-sm text-zinc-300 italic">on the way to the top</div>
        </div>

        {/* Counts */}
        <div className="flex shrink-0 items-center gap-6 md:gap-8 border-t border-zinc-700/50 pt-4 sm:border-t-0 sm:pt-0 sm:pl-8 sm:border-l">
          <Stat value={formatCompact(friends)} label="Friends" />
          <Stat value={formatCompact(followers)} label="Followers" />
          <Stat value={formatCompact(following)} label="Following" />
        </div>

        {/* Hint chevron */}
        <div className="hidden md:flex shrink-0 items-center text-zinc-600 transition-colors group-hover:text-[#4a9eff]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
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
        </div>
      </section>

      {/* About Me & Projects with Scrolling Background */}
      <div className="relative bg-zinc-950">
        <ScrollingBackground />
        
        {/* About Me Section - Full page layout like reference */}
        <section id="about" className="relative z-10 min-h-screen flex items-center py-24 px-4 sm:px-6">
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
                  I'm <span className="text-cyan-400 font-semibold">Jameson</span>, but most people know me as <span className="text-cyan-400 font-semibold">Notorious</span> or Jarmy05.
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
                  Whether you're looking for a <span className="text-white font-semibold">trusted developer</span> or need help with <span className="text-white font-semibold">finding vulnerabilities</span>, I'm here to help you protect and grow your project.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-5 text-base md:text-lg">
                  I specialize in <span className="text-cyan-400 font-semibold">scripting and game development</span>, ensuring your game reaches its <span className="text-white font-semibold">full potential</span>.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-8 text-base md:text-lg">
                  If you want to work with <span className="text-cyan-400 font-semibold">me</span> reach out and let's get started.
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

            {/* Roblox Profile Card */}
            <div className="mb-8">
              <RobloxProfileCard />
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatCard value={`${projects.length}+`} label="Games Worked On" />
              <StatCard value="6+" label="Years Experience" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative z-10 min-h-screen py-24 sm:py-32 px-4 sm:px-6">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-center mb-4 italic">Projects</h2>
            <p className="text-zinc-400 text-center mb-4 text-base sm:text-lg max-w-xl mx-auto">
              Games I've worked on, sorted by how many people are playing right now.
            </p>
            <div className="flex items-center justify-center gap-2 mb-16 text-sm text-zinc-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Live player counts &amp; visits, updated every minute
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {sortedProjects.map((project) => (
                <div key={project.universeId} className="animate-fade-up">
                  <ProjectCard
                    {...project}
                    peakCcu={effectivePeak(project.universeId, project.peakCcu)}
                    live={liveGames[project.universeId]}
                  />
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
