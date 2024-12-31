import { useState, useEffect, useCallback } from 'react';

interface Particle {
  id: number;
  angle: number;
  color: string;
  distance: number;
  opacity: number;
  x: number;
  y: number;
}

export default function Firework() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const getRandomPosition = (): { x: number; y: number } => {
    // Get container dimensions (in percentage to be responsive)
    return {
      x: Math.random() * 100, // Random position from 0% to 100% of container width
      y: Math.random() * 70 + 15, // Random position from 15% to 85% of container height
    };
  };

  const createParticles = useCallback((): Particle[] => {
    const particleCount = 30;
    const colors = ['red', 'gold', 'blue', 'green', 'purple', 'pink'];
    const position = getRandomPosition();
    
    return Array.from({ length: particleCount }, (_, i) => ({
      id: Date.now() + i,
      angle: (i * 360) / particleCount,
      color: colors[Math.floor(Math.random() * colors.length)],
      distance: 0,
      opacity: 1,
      x: position.x,
      y: position.y,
    }));
  }, []);

  const explode = useCallback(() => {
    const newParticles = createParticles();
    setParticles(prev => [...prev, ...newParticles]);
    
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticles[0].id));
    }, 500);
  }, [createParticles]);

  // Automatic firework launcher
  useEffect(() => {
    const launchInterval = setInterval(() => {
      explode();
    }, 2000); // Launch a new firework every 2 seconds

    return () => clearInterval(launchInterval);
  }, [explode]);

  // Particle animation
  useEffect(() => {
    if (particles.length > 0) {
      const animationInterval = setInterval(() => {
        setParticles(prev => 
          prev.map(particle => ({
            ...particle,
            distance: particle.distance + 2,
            opacity: particle.opacity - 0.02
          }))
        );
      }, 20);

      return () => clearInterval(animationInterval);
    }
  }, [particles.length]);

  return (
    <div className="fixed h-screen w-full overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute h-2 w-2 rounded-full"
          style={{
            backgroundColor: particle.color,
            transform: `rotate(${particle.angle}deg) translateX(${particle.distance}px)`,
            opacity: particle.opacity,
            transition: 'transform 20ms linear, opacity 20ms linear',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}
    </div>
  );
}