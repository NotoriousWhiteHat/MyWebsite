const StaticBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.10),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[16vw] leading-none font-black text-white/[0.035] tracking-tighter whitespace-nowrap select-none">
          NOTORIOUS
        </span>
      </div>
    </div>
  );
};

export default StaticBackground;
