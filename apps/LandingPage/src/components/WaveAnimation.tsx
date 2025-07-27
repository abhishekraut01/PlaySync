import React from 'react';

const WaveAnimation: React.FC = () => {
  return (
    <div className="flex items-end justify-center h-32 space-x-1">
      {Array.from({ length: 40 }).map((_, index) => {
        const randomHeight = 10 + Math.floor(Math.random() * 90);
        const delay = `${index * 0.05}s`;
        
        return (
          <div
            key={index}
            className="bg-primary-500 opacity-30 w-1 rounded-t-full"
            style={{
              height: `${randomHeight}%`,
              animation: 'wave 1.5s ease-in-out infinite',
              animationDelay: delay
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default WaveAnimation;