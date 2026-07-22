const StaticBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#08090c]" />

      {/* Faint grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 0%, #000 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, #000 40%, transparent 85%)",
        }}
      />

      {/* Soft blue glow up top to tie into the hero */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-600/10 blur-[130px]" />
    </div>
  );
};

export default StaticBackground;
