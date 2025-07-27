import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-dark relative overflow-hidden">
      {/* Decoration elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-overlay blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full mix-blend-overlay blur-3xl opacity-20"></div>
        
        {/* Sound wave decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="w-1 bg-light mx-0.5 rounded-full animate-pulse-slow"
              style={{ 
                height: `${20 + Math.sin(i / 3) * 50}%`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-light mb-6">
          Ready to experience music together?
        </h2>
        <p className="text-light-50 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of music lovers who are reconnecting through shared listening experiences. Create your first room in seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button variant="primary" size="lg" className="group min-w-48">
            Create Room
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-light-50">
            No credit card required. 100% free beta.
          </p>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center text-light-50">
          <div className="flex items-center mx-4 mb-4 md:mb-0">
            <div className="bg-primary/20 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-100" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Instant Setup</span>
          </div>
          
          <div className="flex items-center mx-4 mb-4 md:mb-0">
            <div className="bg-primary/20 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-100" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>No Downloads</span>
          </div>
          
          <div className="flex items-center mx-4">
            <div className="bg-primary/20 rounded-full p-2 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-100" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Works on Any Device</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;