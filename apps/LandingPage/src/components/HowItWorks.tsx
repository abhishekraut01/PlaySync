import React from 'react';
import { Users, Share2, Radio } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => (
  <div className="relative flex flex-col items-center">
    {/* Step number badge */}
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
      {number}
    </div>
    
    {/* Icon circle */}
    <div className="w-24 h-24 rounded-full bg-dark-50 flex items-center justify-center mb-4 group-hover:bg-primary-900 transition-colors duration-300">
      <div className="text-primary">
        {icon}
      </div>
    </div>
    
    <h3 className="text-xl font-display font-bold text-light mb-2">{title}</h3>
    <p className="text-light-50 text-center max-w-xs">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-dark py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary-900 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent-darker rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-4">
            How PlaySync Works
          </h2>
          <p className="text-light-50 max-w-2xl mx-auto">
            Experience music together in just three simple steps, no matter where your friends are.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Step
            number={1}
            title="Create a Room"
            description="Start your private listening room with a single click. Choose your platform and get ready to share."
            icon={<Users size={40} />}
          />
          
          <div className="hidden md:block relative h-full">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full">
              <div className="h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          
          <Step
            number={2}
            title="Share Your Code"
            description="Invite friends with your unique room code. They can join instantly from any device."
            icon={<Share2 size={40} />}
          />
          
          <div className="hidden md:block relative h-full">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full">
              <div className="h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          
          <Step
            number={3}
            title="Listen Together"
            description="Experience perfect sync with real-time chat. Share reactions as you listen to your favorite tracks."
            icon={<Radio size={40} />}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;