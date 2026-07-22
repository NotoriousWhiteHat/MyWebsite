interface MarqueeGame {
  title: string;
  image: string;
  gameLink: string;
}

interface GamesMarqueeProps {
  games: MarqueeGame[];
}

const GamesMarquee = ({ games }: GamesMarqueeProps) => {
  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <div className="flex w-max animate-scroll-left" style={{ animationDuration: "50s" }}>
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center gap-5 pr-5 shrink-0" aria-hidden={copy === 1}>
            {games.map((game, i) => (
              <li key={`${copy}-${i}`} className="shrink-0">
                <a
                  href={game.gameLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={game.title}
                  className="group block w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-white/40 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default GamesMarquee;
