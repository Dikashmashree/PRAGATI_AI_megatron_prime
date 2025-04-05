
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import GameWorld from '@/components/GameWorld';
import CharacterSelect from '@/components/CharacterSelect';
import SkillTree from '@/components/SkillTree';
import { PuzzleGrid } from '@/components/PuzzleCard';
import { AchievementBadge, ProgressBar } from '@/components/MarioUI';

// Sample puzzle data with corrected difficulty types
const puzzles = [
  {
    id: 'puzzle-1',
    title: 'Communication Basics',
    description: 'Learn the fundamentals of workplace communication',
    difficulty: 'easy' as const,
    category: 'Soft Skills',
    completed: true,
    skillPoints: 50,
  },
  {
    id: 'puzzle-2',
    title: 'Problem-Solving Challenge',
    description: 'Practice critical thinking and solution development',
    difficulty: 'medium' as const,
    category: 'Cognitive Skills',
    completed: false,
    skillPoints: 75,
  },
  {
    id: 'puzzle-3',
    title: 'Team Collaboration',
    description: 'Work effectively in team environments',
    difficulty: 'medium' as const,
    category: 'Teamwork',
    completed: false,
    skillPoints: 75,
  },
  {
    id: 'puzzle-4',
    title: 'Career Planning Strategy',
    description: 'Develop a comprehensive career roadmap',
    difficulty: 'hard' as const,
    category: 'Planning',
    completed: false,
    skillPoints: 100,
  },
  {
    id: 'puzzle-5',
    title: 'Industry Knowledge',
    description: 'Explore current trends in your chosen field',
    difficulty: 'medium' as const,
    category: 'Knowledge',
    completed: false,
    skillPoints: 75,
  },
  {
    id: 'puzzle-6',
    title: 'Leadership Foundations',
    description: 'Develop essential leadership qualities',
    difficulty: 'hard' as const,
    category: 'Leadership',
    completed: false,
    skillPoints: 100,
  },
];

const Index = () => {
  const [gameState, setGameState] = useState<'intro' | 'character-select' | 'main'>('intro');
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [coins, setCoins] = useState(50);
  const [stars, setStars] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(1);
  
  const handleEnterWorld = () => {
    setGameState('character-select');
  };
  
  const handleCharacterSelect = (character: any) => {
    setSelectedCharacter(character);
    setGameState('main');
  };
  
  const handleSkillSelect = (skill: any) => {
    console.log('Selected skill:', skill);
  };
  
  const handlePuzzleSelect = (puzzle: any) => {
    console.log('Selected puzzle:', puzzle);
  };
  
  return (
    <div className="font-pixel bg-mario-blue bg-opacity-10 min-h-screen">
      {gameState !== 'intro' && <Navbar coins={coins} stars={stars} />}
      
      {gameState === 'intro' && (
        <GameWorld onEnterWorld={handleEnterWorld} />
      )}
      
      {gameState === 'character-select' && (
        <div className="pt-20">
          <CharacterSelect onSelect={handleCharacterSelect} />
        </div>
      )}
      
      {gameState === 'main' && selectedCharacter && (
        <div className="pt-20 pb-12 px-4 container mx-auto">
          {/* Character info */}
          <div className="bg-white rounded-lg pixel-border p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className={`w-24 h-24 rounded-full ${selectedCharacter.color} border-4 border-mario-black flex items-center justify-center`}>
                <span className="text-6xl">{selectedCharacter.name.charAt(0)}</span>
              </div>
              
              <div className="flex-1">
                <h2 className="font-press-start text-xl mb-2">{selectedCharacter.name}</h2>
                <p className="text-sm mb-4">{selectedCharacter.careerPath} Specialist</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ProgressBar 
                    progress={currentLevel} 
                    total={8} 
                    label="Level" 
                  />
                  <ProgressBar 
                    progress={150} 
                    total={500} 
                    label="XP" 
                  />
                  <ProgressBar 
                    progress={1} 
                    total={6} 
                    label="Completed Puzzles" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Skill tree section */}
          <section id="skills" className="mb-12">
            <h2 className="font-press-start text-2xl mb-6">Skill Tree</h2>
            <SkillTree onSkillSelect={handleSkillSelect} />
          </section>
          
          {/* Puzzles section */}
          <section id="puzzles" className="mb-12">
            <h2 className="font-press-start text-2xl mb-6">Available Puzzles</h2>
            <PuzzleGrid puzzles={puzzles} onPuzzleSelect={handlePuzzleSelect} />
          </section>
          
          {/* Rewards section */}
          <section id="rewards">
            <h2 className="font-press-start text-2xl mb-6">Career Rewards</h2>
            <div className="bg-white rounded-lg pixel-border p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                <AchievementBadge 
                  label="Industry Visit" 
                  type="trophy" 
                  unlocked={true} 
                />
                <AchievementBadge 
                  label="Basic Certification" 
                  type="award" 
                  unlocked={false} 
                />
                <AchievementBadge 
                  label="Internship Ready" 
                  type="star" 
                  unlocked={false} 
                />
                <AchievementBadge 
                  label="Advanced Skills" 
                  type="award" 
                  unlocked={false} 
                />
                <AchievementBadge 
                  label="Job Placement" 
                  type="trophy" 
                  unlocked={false} 
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Index;
