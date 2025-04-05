
import React from 'react';
import { CoinCounter, StarCounter } from './MarioUI';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  coins: number;
  stars: number;
}

const Navbar: React.FC<NavbarProps> = ({ coins, stars }) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-mario-red p-4 border-b-4 border-mario-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="font-press-start text-mario-white text-lg">Career Quest</h1>
          <span className="hidden md:inline font-press-start text-mario-yellow text-xs">PIXEL PATH</span>
        </div>

        {isMobile ? (
          <>
            <button 
              className="text-mario-white" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-mario-red border-b-4 border-mario-black animate-accordion-down">
                <div className="container mx-auto p-4 flex flex-col gap-4">
                  <NavLinks />
                  <div className="flex justify-between items-center">
                    <CoinCounter count={coins} />
                    <StarCounter count={stars} />
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-8">
            <NavLinks />
            <div className="flex items-center gap-4">
              <CoinCounter count={coins} />
              <StarCounter count={stars} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <ul className="flex flex-col md:flex-row gap-6">
    <li>
      <a href="#" className="font-press-start text-mario-white text-sm hover:text-mario-yellow transition-colors">
        Home
      </a>
    </li>
    <li>
      <a href="#skills" className="font-press-start text-mario-white text-sm hover:text-mario-yellow transition-colors">
        Skills
      </a>
    </li>
    <li>
      <a href="#puzzles" className="font-press-start text-mario-white text-sm hover:text-mario-yellow transition-colors">
        Puzzles
      </a>
    </li>
    <li>
      <a href="#rewards" className="font-press-start text-mario-white text-sm hover:text-mario-yellow transition-colors">
        Rewards
      </a>
    </li>
  </ul>
);

export default Navbar;
