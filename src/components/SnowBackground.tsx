import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

const SnowBackground = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes: Snowflake[] = [];
        for (let i = 0; i < 50; i++) {
          const duration = Math.random() * 15 + 10;
          flakes.push({
            id: i,
            x: Math.random() * 100,
            size: Math.random() * 0.8 + 0.2,
            duration,
            // Use negative delay so flakes are already mid-fall (prevents clustering at top)
            delay: -(Math.random() * duration),
          });
        }
      setSnowflakes(flakes);
    };

    createSnowflakes();
  }, []);

  return (
    <div className="snow">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.x}%`,
            fontSize: `${flake.size * 1.5}em`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            // Start above the viewport even during delay to avoid top clustering
            transform: 'translateY(-100vh) rotate(0deg)',
            color: 'hsl(var(--snow))',
            textShadow: '0 0 10px hsl(var(--snow) / 0.8)',
            opacity: 0.8
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default SnowBackground;