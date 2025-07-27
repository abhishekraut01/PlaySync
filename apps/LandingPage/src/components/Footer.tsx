import React from 'react';
import { Music, Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Music className="h-7 w-7 text-primary" />
              <span className="ml-2 text-light font-display font-bold text-xl">PlaySync</span>
            </div>
            <p className="text-sm mb-4">
              Experience music together in real-time, no matter where you are in the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-50 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-light-50 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light-50 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-light-50 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Beta Program
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-light-50 hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PlaySync. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-light-50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-light-50 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-light-50 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;