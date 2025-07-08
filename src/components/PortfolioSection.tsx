
import React, { useState } from 'react';
import { GameCard } from './GameCard';
import { ProjectModal } from './ProjectModal';

const games = [
  {
    id: 1,
    title: 'Project Realism',
    description: 'Half-Life inspired dystopian roleplay experience with military factions and revolutionary gameplay. Over 18M+ visits!',
    image: 'https://i.imgur.com/zEbgoMY.png',
    tags: ['Lua', 'DarkRP', 'Roleplay'],
    link: 'https://www.roblox.com/games/509062192/UPD-Project-Realism',
    stats: { visits: '18M+', rating: '4.8/5' },
    features: ['Military Factions', 'Revolutionary Gameplay', 'Dystopian Setting']
  },
  {
    id: 2,
    title: 'Arcane Conquest',
    description: 'Epic RPG dungeon crawler with 5 unique classes, mythical gear upgrades, and challenging Abyssal Gates. 6M+ visits!',
    image: 'https://i.imgur.com/jUKGCfs.png',
    tags: ['Lua', 'RPG Systems', 'Dungeon Crawler'],
    link: 'https://www.roblox.com/games/125503319883299/CALAMITY-Arcane-Conquest',
    stats: { visits: '6M+', rating: '4.9/5' },
    features: ['5 Unique Classes', 'Mythical Gear', 'Abyssal Gates']
  },
  {
    id: 3,
    title: 'Dungeon Quest',
    description: 'Massive RPG adventure with 17 unique dungeons, multiple classes, and team-based boss battles. 2.2B+ visits!',
    image: 'https://i.imgur.com/qsBEQ14.png',
    tags: ['Lua', 'MMORPG', 'Team Combat'],
    link: 'https://www.roblox.com/games/2414851778/Dungeon-Quest-RPG-Adventure',
    stats: { visits: '2.2B+', rating: '4.7/5' },
    features: ['17 Unique Dungeons', 'Multiple Classes', 'Team Boss Battles']
  },
  {
    id: 4,
    title: 'Crusaders RPG',
    description: 'Action-packed dungeon crawler with rune systems, boss raids, and powerful ability-collection mechanics.',
    image: 'https://i.imgur.com/HSyaRx5.png',
    tags: ['Lua', 'Action RPG', 'Boss Fights'],
    link: 'https://www.roblox.com/games/13076677555/RAID-Crusaders-RPG',
    stats: { visits: '1.5M+', rating: '4.6/5' },
    features: ['Rune Systems', 'Boss Raids', 'Ability Collection']
  },
];

export const PortfolioSection = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <section id="portfolio-section" className="min-h-screen bg-gradient-to-b from-black/95 to-slate-900/98 relative z-5 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
          Featured Games
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
          {games.map((game, index) => (
            <GameCard
              key={game.id}
              game={game}
              index={index}
              onClick={() => setSelectedGame(game)}
            />
          ))}
        </div>
      </div>

      {selectedGame && (
        <ProjectModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </section>
  );
};
