import ScrollingBackground from "@/components/ScrollingBackground";
import ProjectCard from "@/components/ProjectCard";
import StatsSection from "@/components/StatsSection";
import GlowButton from "@/components/GlowButton";
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

  return (
    <div className="relative min-h-screen bg-black overflow-hidden animate-fade-in"> 
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Video - plays once and stops on last frame */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl -mt-20">
          <h1 className="text-7xl md:text-9xl font-black text-foreground mb-4 tracking-tight">
            NOTORIOUS
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Scripting</span> Things Right.
          </p>
          
          {/* Stats Section */}
          <StatsSection />
          
          <div className="flex gap-4 justify-center mt-4">
            <GlowButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              About Me
            </GlowButton>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">About Me</h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Learn more about me and what separates me from other scripters.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Card - Bio */}
            <div className="bg-zinc-900/80 rounded-2xl p-8 border border-zinc-800">
              <p className="text-gray-300 leading-relaxed">
                My name is <span className="text-cyan-400 font-semibold">Jameson</span>, also known as <span className="text-cyan-400 font-semibold">Notorious</span>, Jarmy05, and NotoriousWhiteHat.
              </p>
              <br />
              <p className="text-gray-300 leading-relaxed">
                I started scripting at <span className="font-bold text-white">11 years old</span>—nearly six years ago. My journey began with Lua exploiting, creating scripts for games, and figuring out how things worked behind the scenes. About two years ago, I discovered my knack for identifying vulnerabilities in games and decided to put those skills to good use. Since then, I've been helping top Roblox games find and patch exploits before they become a problem.
              </p>
              <br />
              <p className="text-gray-300 leading-relaxed">
                After turning <span className="font-bold text-white">16</span>, I shifted focus to full-scale game development—building quality systems that players actually enjoy. From anti-cheat solutions to core gameplay mechanics, I bring experience, precision, and a deep understanding of both sides of the game.
              </p>
            </div>

            {/* Right Card - Contact Info */}
            <div className="bg-zinc-900/80 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              
              <div className="flex flex-col items-center">
                {/* Portrait */}
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500/50 mb-8">
                  <img 
                    src={portrait} 
                    alt="Jameson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Contact Buttons */}
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  <a 
                    href="https://discord.com/users/959238547133595648" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <img src={discordLogo} alt="Discord" className="w-6 h-6" />
                    Discord
                  </a>
                  
                  <a 
                    href="https://www.roblox.com/users/37294166/profile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#E2231A] hover:bg-[#C41E17] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <img src={robloxLogo} alt="Roblox" className="w-6 h-6" />
                    Roblox
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Scrolling Background */}
      <div className="relative bg-black">
        <ScrollingBackground />
        
        <section id="projects" className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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