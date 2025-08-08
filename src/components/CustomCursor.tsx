import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive element dynamically
      const target = e.target as Element;
      const isInteractive = target.closest('a, button, [role="button"], .nav-tab, .sharp-button');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div 
      className={`cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default CustomCursor;