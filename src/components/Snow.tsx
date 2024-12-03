import { useEffect, useState } from 'react';
import '../assets/snow.css';

type Snowflake = {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
};

export default function Snow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const createSnowflake = (): Snowflake => ({
      id: Math.random(),
      left: Math.random() * 100, // percentage across screen
      animationDuration: 3 + Math.random() * 7, // between 3-10 seconds
      opacity: 0.4 + Math.random() * 0.6, // between 0.4-1
    });

    // Create initial snowflakes
    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake);
    setSnowflakes(initialSnowflakes);

    // Add new snowflakes periodically
    const interval = setInterval(() => {
      setSnowflakes(prev => [...prev.slice(-49), createSnowflake()]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
}