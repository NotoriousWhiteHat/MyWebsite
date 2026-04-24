interface GameCarouselProps {
  games: { title: string; image: string }[];
}

const GameCarousel = ({ games }: GameCarouselProps) => {
  // Duplicate the list to create a seamless infinite loop
  const items = [...games, ...games];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-zinc-950/60 border-t border-zinc-800/40">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />

      <div className="flex gap-4 w-max animate-scroll-carousel">
        {items.map((game, i) => (
          <div
            key={i}
            className="shrink-0 w-28 h-20 rounded-xl overflow-hidden border border-zinc-700/40 hover:border-cyan-400/40 transition-colors duration-300 group"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;
