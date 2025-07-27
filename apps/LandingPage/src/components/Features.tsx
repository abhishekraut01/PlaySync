import React from 'react';
import { MessageSquare, Youtube, Share, Play, Volume2 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-dark-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/10 hover:-translate-y-1">
    <div className="bg-primary-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold text-light mb-2">{title}</h3>
    <p className="text-light-50">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-dark-50 to-dark py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-900 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-darker rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-4">
            Features That Make Music Social
          </h2>
          <p className="text-light-50 max-w-2xl mx-auto">
            PlaySync brings people together through music with these powerful features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<Play size={24} />}
            title="Synchronized Playback" 
            description="Everyone hears the same part of the song at the exact same time, creating a truly shared experience."
          />
          
          <Feature 
            icon={<MessageSquare size={24} />}
            title="Real-Time Chat" 
            description="Share your thoughts, reactions, and emotions as you listen together with built-in messaging."
          />
          
          <Feature 
            icon={<Youtube size={24} />}
            title="YouTube Integration" 
            description="Play any song from YouTube's massive library directly in PlaySync without leaving the app."
          />
          
          <Feature 
            icon={<Share size={24} />}
            title="Easy Room Sharing" 
            description="Generate and share a simple room code that lets friends join your session instantly."
          />
          
          <Feature 
            icon={<Volume2 size={24} />}
            title="Collaborative Queue" 
            description="Everyone can add songs to the playlist, making it a truly democratic listening experience."
          />
          
          <div className="relative bg-dark-50 rounded-xl p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-primary/10"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold text-light mb-4">Coming Soon</h3>
              <ul className="space-y-3 text-light-50">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-300 rounded-full mr-2"></div>
                  Spotify & Apple Music integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-300 rounded-full mr-2"></div>
                  Custom room themes & visualizers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-300 rounded-full mr-2"></div>
                  Voice chat for real-time discussions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-300 rounded-full mr-2"></div>
                  Mobile apps for iOS and Android
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;