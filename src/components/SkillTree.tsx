
import React from 'react';
import { QuestionBlock } from './MarioUI';

interface SkillNode {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  level: number;
  position: {
    x: number;
    y: number;
  };
  dependencies: string[];
}

const skillNodes: SkillNode[] = [
  {
    id: 'basics',
    name: 'Career Basics',
    description: 'Fundamental career concepts',
    unlocked: true,
    level: 1,
    position: { x: 50, y: 20 },
    dependencies: [],
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'Effective workplace communication',
    unlocked: false,
    level: 2,
    position: { x: 30, y: 35 },
    dependencies: ['basics'],
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    description: 'Critical thinking and solutions',
    unlocked: false,
    level: 2,
    position: { x: 70, y: 35 },
    dependencies: ['basics'],
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    description: 'Collaborative skills',
    unlocked: false,
    level: 3,
    position: { x: 20, y: 50 },
    dependencies: ['communication'],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    description: 'Team management and direction',
    unlocked: false,
    level: 3,
    position: { x: 40, y: 50 },
    dependencies: ['communication', 'problem-solving'],
  },
  {
    id: 'technical',
    name: 'Technical Skills',
    description: 'Industry-specific expertise',
    unlocked: false,
    level: 3,
    position: { x: 60, y: 50 },
    dependencies: ['problem-solving'],
  },
  {
    id: 'innovation',
    name: 'Innovation',
    description: 'Creative problem-solving',
    unlocked: false,
    level: 3,
    position: { x: 80, y: 50 },
    dependencies: ['problem-solving'],
  },
  {
    id: 'mastery',
    name: 'Career Mastery',
    description: 'Advanced professional skills',
    unlocked: false,
    level: 4,
    position: { x: 50, y: 70 },
    dependencies: ['leadership', 'technical', 'innovation', 'teamwork'],
  },
];

interface SkillTreeProps {
  onSkillSelect: (skill: SkillNode) => void;
}

const SkillTree: React.FC<SkillTreeProps> = ({ onSkillSelect }) => {
  const [selectedSkill, setSelectedSkill] = React.useState<SkillNode | null>(null);
  
  const handleSkillClick = (skill: SkillNode) => {
    setSelectedSkill(skill);
    onSkillSelect(skill);
  };

  return (
    <div className="relative w-full h-[600px] bg-mario-blue bg-opacity-30 overflow-hidden rounded-lg pixel-border">
      {/* Decorative clouds */}
      <div className="absolute top-[10%] left-[15%]">
        <div className="cloud w-24 h-12"></div>
      </div>
      <div className="absolute top-[25%] right-[20%]">
        <div className="cloud w-20 h-10"></div>
      </div>
      <div className="absolute bottom-[30%] left-[25%]">
        <div className="cloud w-16 h-8"></div>
      </div>
      
      {/* Ground */}
      <div className="absolute bottom-0 w-full h-[15%] bg-mario-brown border-t-4 border-mario-black"></div>
      
      {/* Connections between nodes */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        {skillNodes.map(node => (
          node.dependencies.map(depId => {
            const depNode = skillNodes.find(n => n.id === depId);
            if (!depNode) return null;
            
            return (
              <line
                key={`${node.id}-${depId}`}
                x1={`${depNode.position.x}%`}
                y1={`${depNode.position.y}%`}
                x2={`${node.position.x}%`}
                y2={`${node.position.y}%`}
                stroke={node.unlocked ? "#E52521" : "#8B5E3C"}
                strokeWidth="4"
                strokeDasharray={node.unlocked ? "0" : "5,5"}
              />
            );
          })
        ))}
      </svg>
      
      {/* Skill nodes */}
      {skillNodes.map(node => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${node.position.x}%`,
            top: `${node.position.y}%`,
            width: '120px',
          }}
        >
          <QuestionBlock
            onClick={() => node.unlocked && handleSkillClick(node)}
          >
            <div className={`text-xs ${node.unlocked ? 'text-mario-black' : 'text-gray-500'}`}>
              <div className="mb-2">LVL {node.level}</div>
              {node.name}
            </div>
          </QuestionBlock>
        </div>
      ))}
      
      {/* Skill Info Panel */}
      {selectedSkill && (
        <div className="absolute bottom-[17%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white p-4 rounded pixel-border">
          <h3 className="font-press-start text-sm mb-2">{selectedSkill.name}</h3>
          <p className="text-sm mb-2">{selectedSkill.description}</p>
          <div className="flex justify-between">
            <span className="text-xs font-bold">Level {selectedSkill.level}</span>
            <button className="bg-mario-red text-white text-xs px-3 py-1 rounded hover:bg-opacity-80">
              Train This Skill
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTree;
