
import React from 'react';
import { Star, Trophy, Award } from 'lucide-react';

interface CoinCounterProps {
  count: number;
}

export const CoinCounter: React.FC<CoinCounterProps> = ({ count }) => {
  return (
    <div className="flex items-center gap-2 bg-mario-black bg-opacity-70 px-4 py-2 rounded-full">
      <div className="coin"></div>
      <span className="font-press-start text-mario-yellow text-sm">×{count}</span>
    </div>
  );
};

interface StarCounterProps {
  count: number;
}

export const StarCounter: React.FC<StarCounterProps> = ({ count }) => {
  return (
    <div className="flex items-center gap-2 bg-mario-black bg-opacity-70 px-4 py-2 rounded-full">
      <Star className="text-mario-yellow animate-pulse" size={18} />
      <span className="font-press-start text-mario-yellow text-sm">×{count}</span>
    </div>
  );
};

interface ProgressBarProps {
  progress: number;
  total: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total, label }) => {
  const percentage = Math.min(100, Math.round((progress / total) * 100));
  
  return (
    <div className="w-full">
      {label && <p className="font-press-start text-xs mb-1">{label}</p>}
      <div className="w-full h-4 bg-mario-black rounded-full overflow-hidden pixel-border">
        <div 
          className="h-full bg-mario-red" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1">
        <span className="font-press-start text-xs">{progress}</span>
        <span className="font-press-start text-xs">{total}</span>
      </div>
    </div>
  );
};

interface QuestionBlockProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const QuestionBlock: React.FC<QuestionBlockProps> = ({ children, onClick }) => {
  return (
    <div className="question-block" onClick={onClick}>
      {children}
    </div>
  );
};

interface AchievementBadgeProps {
  label: string;
  type: 'trophy' | 'award' | 'star';
  unlocked?: boolean;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ 
  label, 
  type, 
  unlocked = false 
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 transition-all duration-300 ${unlocked ? 'opacity-100' : 'opacity-50 grayscale'}`}>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${unlocked ? 'bg-mario-yellow' : 'bg-gray-300'} pixel-border`}>
        {type === 'trophy' && <Trophy size={30} className={unlocked ? 'text-mario-red' : 'text-gray-500'} />}
        {type === 'award' && <Award size={30} className={unlocked ? 'text-mario-red' : 'text-gray-500'} />}
        {type === 'star' && <Star size={30} className={unlocked ? 'text-mario-red' : 'text-gray-500'} />}
      </div>
      <span className="font-press-start text-xs text-center">{label}</span>
    </div>
  );
};

interface PipeProps {
  height?: string;
  width?: string;
}

export const Pipe: React.FC<PipeProps> = ({ height = 'h-20', width = 'w-16' }) => {
  return (
    <div className={`${height} ${width} pipe animate-pipe-rise`}>
      <div className="h-4 w-full bg-mario-green rounded-t-lg border-b-4 border-mario-black"></div>
    </div>
  );
};

export const Cloud: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`cloud w-24 h-12 animate-float ${className}`}></div>
  );
};
