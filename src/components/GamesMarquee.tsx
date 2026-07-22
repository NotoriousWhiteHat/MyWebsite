interface MarqueeGame {
  title: string;
  image: string;
  gameLink: string;
}

interface GamesMarqueeProps {
  games: MarqueeGame[];
}

const GamesMarquee = ({ games }: GamesMarqueeProps) => {
  const loop = [...games, ...games];

  return (
    <div className="relative w-full border-t border-b border-amber-400/20 bg-black/50 py-5 sm:py-6 overflow-hidden">
      <div className="flex w-max gap-3 sm:gap-4 animate-scroll-left">
        {loop.map((game, i) => (
          <a
            key={`${game.title}-${i}`}
            href={game.gameLink}
            target="_blank"
            rel="noopener noreferrer"
            title={game.title}
            className="shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-zinc-700/60 hover:border-white/50 transition-colors duration-200"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default GamesMarquee;
