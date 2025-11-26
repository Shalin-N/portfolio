import './ParticlesBackground.css';
import { useMemo } from 'react';

const ParticlesBackground = () => {
  // Generate static hexagon data to prevent re-rendering issues
  const hexagons = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      buzzDuration: 8 + Math.random() * 4, // 8-12 seconds for gentle buzzing
      driftDuration: 20 + Math.random() * 10, // 20-30 seconds for slow drift
    }));
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at 20% 50%, rgba(168, 201, 7, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 201, 7, 0.05) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(168, 201, 7, 0.05) 0%, transparent 50%)',
      }}
    >
      {/* Animated hexagons using CSS */}
      <div className="particles-container">
        {hexagons.map((hexagon) => (
          <div
            key={hexagon.id}
            className="particle"
            style={{
              left: `${hexagon.left}%`,
              top: `${hexagon.top}%`,
              animationDelay: `${hexagon.delay}s`,
              animationDuration: `${hexagon.buzzDuration}s`,
              '--drift-duration': `${hexagon.driftDuration}s`,
            } as React.CSSProperties & { '--drift-duration': string }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticlesBackground;
