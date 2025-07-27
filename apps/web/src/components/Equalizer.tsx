import React from 'react';

interface EqualizerProps {
  className?: string;
}

const Equalizer: React.FC<EqualizerProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-end h-8 space-x-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const heights = ['40%', '70%', '100%', '80%', '60%'];
        return (
          <div
            key={index}
            className="bg-primary w-1.5 rounded-t-sm"
            style={{
              height: heights[index % heights.length],
              animation: 'wave 1.5s ease-in-out infinite',
              animationDelay: `${index * 0.2}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Equalizer;