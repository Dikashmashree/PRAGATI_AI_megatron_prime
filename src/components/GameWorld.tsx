
import React, { useEffect, useState } from 'react';
import { Cloud, Pipe } from './MarioUI';

interface GameWorldProps {
  onEnterWorld: () => void;
}

const GameWorld: React.FC<GameWorldProps> = ({ onEnterWorld }) => {
  const [loaded, setLoaded] = useState(false);
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleJump = () => {
    if (!jumping) {
      setJumping(true);
      setTimeout(() => {
        setJumping(false);
        onEnterWorld();
      }, 1000);
    }
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden bg-mario-blue">
      {/* Sky with clouds */}
      <div className="absolute w-full h-full">
        {/* Sun */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-mario-yellow rounded-full"></div>
        
        {/* Clouds */}
        <Cloud className="absolute top-[15%] left-[10%]" />
        <Cloud className="absolute top-[25%] right-[15%]" />
        <Cloud className="absolute top-[40%] left-[30%]" />
        <Cloud className="absolute top-[20%] right-[35%]" />
      </div>
      
      {/* Ground/floor */}
      <div className="absolute bottom-0 w-full h-[20%] bg-mario-green border-t-4 border-mario-black">
        {/* Brick pattern on ground */}
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="brick"></div>
          ))}
        </div>
      </div>
      
      {/* Hills in background */}
      <div className="absolute bottom-[20%] left-[10%] w-40 h-32 bg-mario-green rounded-[50%] border-2 border-mario-black"></div>
      <div className="absolute bottom-[20%] right-[5%] w-60 h-40 bg-mario-green rounded-[50%] border-2 border-mario-black"></div>
      
      {/* Pipes */}
      <div className="absolute bottom-[20%] left-[25%]">
        <Pipe height="h-28" width="w-20" />
      </div>
      <div className="absolute bottom-[20%] right-[25%]">
        <Pipe height="h-40" width="w-24" />
      </div>
      
      {/* Center pipe for entrance */}
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2" onClick={handleJump}>
        <div className={`transition-transform duration-500 ${jumping ? 'translate-y-[-50px]' : ''}`}>
          <div className="relative">
            <Pipe height="h-32" width="w-32" />
            
            {/* Character */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-16 h-24">
              <div className="w-full h-16 bg-mario-red rounded-t-full border-2 border-mario-black"></div>
              <div className="w-full h-8 bg-mario-blue border-2 border-mario-black"></div>
            </div>
            
            {/* Entrance text */}
            <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-48">
              <div className="bg-white p-2 rounded-lg border-2 border-mario-black text-center">
                <p className="font-press-start text-xs">Click to Enter</p>
                <p className="text-xs">Career World</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="font-press-start text-mario-white text-shadow text-2xl sm:text-4xl mb-2">
          CAREER QUEST
        </h1>
        <h2 className="font-press-start text-mario-yellow text-shadow text-lg sm:text-xl">
          PIXEL PATH
        </h2>
        <div className="mt-4 animate-bounce">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path d="M16 26L4 14L7 11L16 20L25 11L28 14L16 26Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      {/* Loading animation */}
      {!loaded && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-coin-spin w-12 h-12 bg-mario-yellow rounded-full mx-auto mb-4"></div>
            <p className="font-press-start text-white text-sm">Loading World...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameWorld;
