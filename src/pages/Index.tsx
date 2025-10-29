import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import SnowBackground from '@/components/SnowBackground';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import GroupCard from '@/components/GroupCard';
import VideoGrid from '@/components/VideoGrid';
import ContactCard from '@/components/ContactCard';
import { useVisitLogger } from '@/hooks/useVisitLogger';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('PROJECTS');
  
  useVisitLogger();

const projects = [
  {
    title: 'The Mexican Border | RP',
    icon: 'https://i.imgur.com/0xZkI8x.png',
    gameLink: 'https://www.roblox.com/games/87615892291241/BANK-The-Mexican-Border-RP',
    groupLink: 'https://www.roblox.com/communities/35952306/The-Mexican-Border-RP#!/about',
    ccu: '7k',
    visits: '12.2m',      // updated
    role: 'Only developer – builder, scripter, UI, all systems'
  },
  {
    title: 'The Robine',
    icon: 'https://i.imgur.com/zEbgoMY.png',
    gameLink: 'https://www.roblox.com/games/509062192/JEWELRY-HEIST-Project-Realism',
    groupLink: 'https://www.roblox.com/communities/2808906/The-Robine#!/about',
    ccu: '~800',
    visits: '18.4m',
    role: 'Lead dev for city systems, lead scripter, manager, whitehat/exploit fixes'
  },
  {
    title: 'Arcane Conquest',
    icon: 'https://i.imgur.com/jUKGCfs.png',
    gameLink: 'https://www.roblox.com/games/125503319883299/Arcane-Conquest',
    groupLink: 'https://www.roblox.com/communities/14436378/Arcane-Conquest#!/about',
    ccu: '~8k',
    visits: '7.4m',      // updated
    role: 'Scripter – quest system, admin panel, patched exploits/godmodes'
  },
  {
    title: 'Crusaders RPG',
    icon: 'https://i.imgur.com/HSyaRx5.png',
    gameLink: 'https://www.roblox.com/games/13076677555/TOWER-Crusaders-RPG',
    groupLink: 'https://www.roblox.com/communities/13221283/Crusaders-AS#!/about',
    ccu: '500-1k',
    visits: '2m',
    role: 'Vulnerability testing, godmode patching'
  },
  {
    title: 'Virus Border Roleplay',
    icon: 'https://i.imgur.com/t3pyxcm.png',
    gameLink: 'https://www.roblox.com/games/4888877755/Virus-Border-Roleplay',
    groupLink: 'https://www.roblox.com/communities/5855434/CBRN#!/about',
    ccu: '~2k',
    visits: '34.0m',
    role: 'Whitehat/exploit fixes – kill all, gunmods, silent aim etc'
  },
  {
    title: 'Half Life: City 8',
    icon: 'https://i.imgur.com/nO7Ubx1.jpeg',
    gameLink: 'https://www.roblox.com/games/8906378074/BACK-Half-Life-City-8',
    groupLink: 'https://www.roblox.com/communities/13426157/Half-Life-World',
    ccu: '~800',
    visits: '12.8m',
    role: 'Whitehat, exploit – Kill all, auto complete job, gun mods'
  },
  {
    title: 'Lone Survival',
    icon: '(you’ll need to insert the image link here)',
    gameLink: 'https://www.roblox.com/games/13559584718/Lone-Survival',
    groupLink: 'https://www.roblox.com/communities/32062143/High-Table-Studio',
    ccu: '~2k',
    visits: '26.3m',
    role: 'Whitehat, exploit – 2 Noclip methods, silent aim, and many more vulns'
  }
];

const groups = [
  {
    name: 'TR Sentinels',
    icon: 'https://tr.rbxcdn.com/180DAY-c2f5b4af4009f85b033d8c82fcbea1d0/150/150/Image/Webp/noFilter',
    link: 'https://www.roblox.com/communities/5163623/TR-Sentinels#!/about',
    role: 'Developer, anticheat maker'
  },
  {
    name: 'TR lntercept Squadron',
    icon: 'https://tr.rbxcdn.com/180DAY-04861922c0250ce17b1fbf8bcd36efa3/150/150/Image/Webp/noFilter',
    link: 'https://www.roblox.com/communities/10104161/TR-lntercept-Squadron#!/about',
    role: 'Developer'
  },
  {
    name: 'TR HELlX',
    icon: 'https://tr.rbxcdn.com/180DAY-cbbd9c7aaa1ed3c1f60de28ac0570f8f/150/150/Image/Webp/noFilter',
    link: 'https://www.roblox.com/communities/10109929/TR-HELlX#!/about',
    role: 'Developer'
  },
  {
    name: 'Robine Deathwatch',
    icon: 'https://tr.rbxcdn.com/180DAY-1d7987d6da93f756b30f588906687abb/150/150/Image/Webp/noFilter',
    link: 'https://www.roblox.com/communities/2896860/Robine-Deathwatch#!/about',
    role: 'Developer'
  },
  {
    name: 'Grand Army of the Insurgence',
    icon: '(you’ll need to insert the image link here)',
    link: 'https://www.roblox.com/communities/1075140737/Grand-Army-of-the-Insurgence#!/about',
    role: 'Developer, Scripter – Owned by DoBigStudios'
  }
];


  const renderContent = () => {
    switch (activeTab) {
      case 'PROJECTS':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-mono font-bold text-accent text-glow mb-4">
                NOTORIOUS
              </h1>
              <p className="text-text-secondary font-mono uppercase tracking-widest">
                Roblox Game Developer Portfolio
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        );
      case 'GROUPS':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-mono font-bold text-accent text-glow mb-4">
                GROUPS
              </h2>
              <p className="text-text-secondary font-mono uppercase tracking-widest">
                Development Organizations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groups.map((group, index) => (
                <GroupCard key={index} {...group} />
              ))}
            </div>
          </div>
        );
      case 'VIDEOS':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-mono font-bold text-accent text-glow mb-4">
                VIDEOS
              </h2>
              <p className="text-text-secondary font-mono uppercase tracking-widest">
                Development Showcases
              </p>
            </div>
            <VideoGrid />
          </div>
        );
      case 'CONTACT':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-mono font-bold text-accent text-glow mb-4">
                CONTACT
              </h2>
              <p className="text-text-secondary font-mono uppercase tracking-widest">
                Get In Touch
              </p>
            </div>
            <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Info */}
              <div className="sharp-card p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-mono font-bold text-text-primary mb-2">Discord</h3>
                  <p className="text-accent font-mono">notoriouswhitehat</p>
                  <p className="text-text-muted font-mono text-sm">959238547133595648</p>
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-text-primary mb-2">Email</h3>
                  <a href="mailto:notoriouswhitehat@gmail.com" className="text-accent font-mono hover:text-accent-glow transition-colors">
                    notoriouswhitehat@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold text-text-primary mb-2">Roblox</h3>
                  <a
                    href="https://www.roblox.com/users/37294166/profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-mono hover:text-accent-glow transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              {/* Email Form */}
              <ContactForm />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <SnowBackground />
      <CustomCursor />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <ContactCard />
      
      <main className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
