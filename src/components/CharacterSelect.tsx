
import React from 'react';
import { Button } from '@/components/ui/button';

interface Character {
  id: string;
  name: string;
  careerPath: string;
  description: string;
  color: string;
}

const characters: Character[] = [
  {
    id: 'tech-wizard',
    name: 'Tech Wizard',
    careerPath: 'Information Technology',
    description: 'Master of code and digital solutions.',
    color: 'bg-mario-blue',
  },
  {
    id: 'creative-genius',
    name: 'Creative Genius',
    careerPath: 'Design & Media',
    description: 'Bringing ideas to life through art and design.',
    color: 'bg-mario-red',
  },
  {
    id: 'business-hero',
    name: 'Business Hero',
    careerPath: 'Business & Management',
    description: 'Leading teams and driving growth strategies.',
    color: 'bg-mario-green',
  },
  {
    id: 'science-explorer',
    name: 'Science Explorer',
    careerPath: 'STEM Research',
    description: 'Discovering new frontiers through science.',
    color: 'bg-mario-yellow',
  },
];

interface CharacterSelectProps {
  onSelect: (character: Character) => void;
}

const CharacterSelect: React.FC<CharacterSelectProps> = ({ onSelect }) => {
  const [hoveredCharacter, setHoveredCharacter] = React.useState<string | null>(null);
  
  return (
    <div className="py-12 px-4">
      <h2 className="font-press-start text-center text-2xl mb-8">Choose Your Career Hero</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {characters.map((character) => (
          <div 
            key={character.id}
            className={`pixel-border ${character.color} p-6 rounded transition-transform duration-300 ${hoveredCharacter === character.id ? 'scale-105' : ''}`}
            onMouseEnter={() => setHoveredCharacter(character.id)}
            onMouseLeave={() => setHoveredCharacter(null)}
          >
            <div className="h-40 flex items-center justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-mario-black flex items-center justify-center">
                <span className="text-6xl">{character.name.charAt(0)}</span>
              </div>
            </div>

            <h3 className="font-press-start text-center text-sm mb-2">{character.name}</h3>
            <p className="text-center text-sm font-bold mb-2">{character.careerPath}</p>
            <p className="text-center text-xs mb-4">{character.description}</p>
            
            <div className="text-center">
              <Button 
                onClick={() => onSelect(character)} 
                className="pixel-button"
              >
                Select
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelect;
