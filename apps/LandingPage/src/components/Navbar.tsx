import React, { useState } from 'react';
import { Music, Menu, X } from 'lucide-react';
import Button from './Button';
import WaitlistModal from './WaitlistModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-dark shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Music className="h-8 w-8 text-primary" />
              <span className="ml-2 text-light font-display font-bold text-xl">PlaySync</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#how-it-works" className="text-light-50 hover:text-primary-100 transition-colors">
                  How It Works
                </a>
                <a href="#features" className="text-light-50 hover:text-primary-100 transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-light-50 hover:text-primary-100 transition-colors">
                  Use Cases
                </a>
                <Button 
                  variant="primary"
                  onClick={() => setIsWaitlistOpen(true)}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-light"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-50 p-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="text-light-50 hover:text-primary-100 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-light-50 hover:text-primary-100 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="text-light-50 hover:text-primary-100 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <Button 
                variant="primary"
                onClick={() => {
                  setIsWaitlistOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </nav>

      <WaitlistModal 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
};

export default Navbar;