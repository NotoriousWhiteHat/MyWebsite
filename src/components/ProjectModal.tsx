
import React from 'react';
import { X, ExternalLink, Users, Star } from 'lucide-react';

interface ProjectModalProps {
  game: any;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ game, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900/95 border border-green-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl">
        
        {/* Header */}
        <div className="relative">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-300 mb-4">{game.title}</h2>
          
          {/* Stats */}
          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2 bg-green-500/10 px-3 py-2 rounded-lg">
              <Users className="w-4 h-4 text-green-400" />
              <span className="text-green-300">{game.stats.visits} visits</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-500/10 px-3 py-2 rounded-lg">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300">{game.stats.rating}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">{game.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-green-300 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {game.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-6">
            {game.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors w-full"
          >
            <ExternalLink className="w-5 h-5" />
            Play Game
          </a>
        </div>
      </div>
    </div>
  );
};
