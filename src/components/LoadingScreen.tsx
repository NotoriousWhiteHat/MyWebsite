
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing neural networks...",
    "Loading quantum algorithms...",
    "Connecting to mainframe...",
    "Notorious.exe loading...",
    "Welcome to the matrix..."
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 50);

    const textTimer = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 600);

    return () => {
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, []);

  // Matrix rain effect
  const MatrixRain = () => {
    const columns = Array.from({ length: 20 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden">
        {columns.map((col) => (
          <div
            key={col}
            className="absolute top-0 text-primary opacity-20"
            style={{
              left: `${col * 5}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: '14px',
              fontFamily: 'monospace'
            }}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="animate-matrix-rain"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {String.fromCharCode(33 + Math.random() * 93)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <MatrixRain />
      
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="floating-particles"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`
          }}
        />
      ))}

      <div className="text-center z-10 space-y-8">
        <div className="relative">
          <h1 className="text-6xl font-bold glow-text mb-4 animate-loading-pulse">
            NOTORIOUS
          </h1>
          <div className="text-xl text-primary/80 font-mono">
            {loadingTexts[currentText]}
          </div>
        </div>

        <div className="w-80 mx-auto space-y-4">
          <div className="h-2 bg-muted rounded-full overflow-hidden glow-border">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-sm text-muted-foreground font-mono">
            {Math.min(Math.floor(progress), 100)}% Complete
          </div>
        </div>

        <div className="flex space-x-2 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rounded-full animate-loading-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
