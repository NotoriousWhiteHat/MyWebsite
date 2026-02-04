const ScrollingBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 transform -rotate-12 scale-150">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`flex whitespace-nowrap text-4xl font-black tracking-wider select-none ${
              i % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'
            }`}
            style={{
              opacity: 0.05,
              color: '#fff',
              marginBottom: '20px',
            }}
          >
            {[...Array(80)].map((_, j) => (
              <span key={j} className="px-3">NOTORIOUS</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBackground;