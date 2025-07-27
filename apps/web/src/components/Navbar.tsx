import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
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
              <button className="bg-primary hover:bg-primary-400 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200">
                Create Room
              </button>
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
            <button className="bg-primary hover:bg-primary-400 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200 w-full">
              Create Room
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;