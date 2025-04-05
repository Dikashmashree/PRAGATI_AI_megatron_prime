
import React from 'react';
import { Check, Star } from 'lucide-react';

interface Puzzle {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  completed: boolean;
  skillPoints: number;
}

const difficultyStars = {
  'easy': 1,
  'medium': 2,
  'hard': 3
};

interface PuzzleCardProps {
  puzzle: Puzzle;
  onClick: (puzzle: Puzzle) => void;
}

const PuzzleCard: React.FC<PuzzleCardProps> = ({ puzzle, onClick }) => {
  return (
    <div 
      className={`p-4 rounded-lg pixel-border transition-transform duration-200 hover:scale-105 cursor-pointer ${
        puzzle.completed ? 'bg-mario-green bg-opacity-20' : 'bg-white'
      }`}
      onClick={() => onClick(puzzle)}
    >
      {puzzle.completed && (
        <div className="absolute -top-3 -right-3 bg-mario-green rounded-full p-1 border-2 border-mario-black">
          <Check size={16} className="text-white" />
        </div>
      )}
      
      <h3 className="font-press-start text-sm mb-2 text-mario-black">{puzzle.title}</h3>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold">{puzzle.category}</span>
        <div className="flex">
          {Array.from({ length: difficultyStars[puzzle.difficulty] }).map((_, i) => (
            <Star key={i} size={12} fill="#FBD000" color="#FBD000" />
          ))}
          {Array.from({ length: 3 - difficultyStars[puzzle.difficulty] }).map((_, i) => (
            <Star key={i} size={12} color="#CCCCCC" />
          ))}
        </div>
      </div>
      
      <p className="text-xs mb-4 h-12 overflow-hidden">{puzzle.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="coin mr-1"></div>
          <span className="text-xs">{puzzle.skillPoints} points</span>
        </div>
        <button className="bg-mario-red text-white text-xs px-2 py-1 rounded hover:bg-opacity-80">
          Start
        </button>
      </div>
    </div>
  );
};

interface PuzzleGridProps {
  puzzles: Puzzle[];
  onPuzzleSelect: (puzzle: Puzzle) => void;
}

export const PuzzleGrid: React.FC<PuzzleGridProps> = ({ puzzles, onPuzzleSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {puzzles.map(puzzle => (
        <PuzzleCard key={puzzle.id} puzzle={puzzle} onClick={onPuzzleSelect} />
      ))}
    </div>
  );
};

export default PuzzleGrid;
