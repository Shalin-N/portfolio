import './ParticlesBackground.css';
import { useMemo } from 'react';

type Shape = 'circle' | 'square' | 'star' | 'blob' | 'cross';

const COLORS = ['#FF2E93', '#FFD60A', '#3D5AFE', '#C9F73F', '#FF6B35', '#C77DFF', '#6EE7B7'];
const SHAPES: Shape[] = ['circle', 'square', 'star', 'blob', 'cross'];

const ParticlesBackground = () => {
  const shapes = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 50 + Math.random() * 80,
      rotate: Math.floor(Math.random() * 60 - 30),
      color: COLORS[i % COLORS.length],
      shape: SHAPES[i % SHAPES.length],
      delay: Math.random() * 6,
      duration: 9 + Math.random() * 6,
    }));
  }, []);

  const renderShape = (shape: Shape, color: string, size: number) => {
    const common = { width: size, height: size, display: 'block' } as const;
    switch (shape) {
      case 'circle':
        return (
          <svg viewBox="0 0 100 100" style={common}>
            <circle cx="50" cy="50" r="44" fill={color} stroke="#0a0a0a" strokeWidth="6" />
          </svg>
        );
      case 'square':
        return (
          <svg viewBox="0 0 100 100" style={common}>
            <rect x="8" y="8" width="84" height="84" rx="14" fill={color} stroke="#0a0a0a" strokeWidth="6" />
          </svg>
        );
      case 'star':
        return (
          <svg viewBox="0 0 100 100" style={common}>
            <path
              d="M50 6 L62 38 L96 40 L68 60 L78 94 L50 74 L22 94 L32 60 L4 40 L38 38 Z"
              fill={color}
              stroke="#0a0a0a"
              strokeWidth="5"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'blob':
        return (
          <svg viewBox="0 0 100 100" style={common}>
            <path
              d="M52 6 C76 4 96 22 94 48 C92 76 70 96 46 92 C20 88 4 66 8 42 C12 18 32 8 52 6 Z"
              fill={color}
              stroke="#0a0a0a"
              strokeWidth="6"
            />
          </svg>
        );
      case 'cross':
        return (
          <svg viewBox="0 0 100 100" style={common}>
            <path
              d="M36 8 H64 V36 H92 V64 H64 V92 H36 V64 H8 V36 H36 Z"
              fill={color}
              stroke="#0a0a0a"
              strokeWidth="6"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div className="bg-deco" aria-hidden="true">
      {shapes.map((s) => (
        <div
          key={s.id}
          className="bg-shape"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            transform: `rotate(${s.rotate}deg)`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          {renderShape(s.shape, s.color, s.size)}
        </div>
      ))}
    </div>
  );
};

export default ParticlesBackground;
