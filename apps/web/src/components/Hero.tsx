import React from 'react';
import Button from './Button';
import { Play, ChevronDown } from 'lucide-react';
import WaveAnimation from './WaveAnimation';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-dark to-dark-50 flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-darker rounded-full blur-3xl opacity-20"></div>
        
        {/* Animated waveform background */}
        <div className="absolute bottom-0 w-full opacity-30">
          <WaveAnimation />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="inline-block bg-primary-900 text-primary-100 px-4 py-1 rounded-full text-sm font-medium mb-6">
              BETA LAUNCH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-light leading-tight mb-4">
              Experience Music<br />
              <span className="text-primary">Together</span> in Real-Time
            </h1>
            <p className="text-lg text-light-50 mb-8 max-w-md">
              Create a room, share the code, and listen in perfect sync with friends anywhere in the world. No more "3, 2, 1, play!"
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" className="group">
                <Play size={18} className="mr-2 group-hover:translate-x-0.5 transition-transform" />
                Create Room
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('how-it-works')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="relative">
              {/* App mockup */}
              <div className="bg-dark-50 rounded-2xl shadow-2xl border border-dark-50 overflow-hidden">
                <div className="px-4 py-3 bg-dark-100 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-light-50 text-sm">
                    PlaySync - Room #7642
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-dark rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-accent-darker"></div>
                      <div className="ml-3">
                        <div className="text-light font-medium">Current Track</div>
                        <div className="text-light-50 text-sm">Artist Name - Song Title</div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1.5 bg-dark-50 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3 rounded-full"></div>
                      </div>
                      <div className="flex justify-between text-light-50 text-xs">
                        <span>2:34</span>
                        <span>4:15</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary-900 flex-shrink-0"></div>
                      <div className="ml-3 bg-dark-50 py-2 px-3 rounded-lg rounded-tl-none">
                        <div className="text-light-50 text-sm">This beat drop is insane!</div>
                      </div>
                    </div>
                    <div className="flex items-start justify-end">
                      <div className="mr-3 bg-primary-900 py-2 px-3 rounded-lg rounded-tr-none">
                        <div className="text-light-50 text-sm">I know right? Let's add it to our playlist!</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-light-50 flex-shrink-0"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decoration elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div 
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('how-it-works')}
          >
            <span className="text-light-50 text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={24} className="text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;