import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Play, Users, Share2, Radio } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  useCase: string;
  avatarUrl?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "I used PlaySync to listen to a new album release with friends from college who've moved all across the country. It felt like we were in the same room!",
    author: "Michael T.",
    useCase: "Listen to new albums with friends",
    avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    content: "Our music club hosts virtual listening parties every Friday using PlaySync. We've connected music lovers from three different countries!",
    author: "Sarah K.",
    useCase: "Host virtual listening parties",
    avatarUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    content: "Whenever I discover a great new track, I share it instantly with my partner using PlaySync. It's like we're discovering music together despite living apart.",
    author: "David L.",
    useCase: "Share your music discoveries instantly",
    avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    content: "My sister and I have a weekly listening session on PlaySync. It's how we stay connected through music even though we're thousands of miles apart.",
    author: "Emma W.",
    useCase: "Stay connected through music",
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section id="testimonials" className="bg-dark-50 py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary rounded-full blur-3xl opacity-5"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent rounded-full blur-3xl opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-light mb-4">
            How People Use PlaySync
          </h2>
          <p className="text-light-50 max-w-2xl mx-auto">
            Join thousands of music lovers who are reconnecting through shared listening experiences.
          </p>
        </div>
        
        <div className="relative bg-dark rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="absolute -top-5 left-8 text-primary opacity-50">
            <Quote size={64} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 relative z-10">
              <div className="mb-8">
                <p className="text-light text-lg md:text-xl italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                <div>
                  <p className="text-primary font-semibold">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-light-50">
                    {testimonials[activeIndex].useCase}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === activeIndex ? 'bg-primary' : 'bg-dark-50'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={idx}
                    className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'ring-2 ring-primary scale-105' 
                        : 'opacity-50 hover:opacity-80'
                    }`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div className="aspect-w-1 aspect-h-1">
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                    <div className="absolute bottom-2 left-2 right-2 text-light text-xs font-medium">
                      {testimonial.useCase}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={handlePrev}
                  className="bg-dark-50 hover:bg-primary/10 text-primary rounded-full p-2 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="bg-dark-50 hover:bg-primary/10 text-primary rounded-full p-2 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-dark p-6 rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <div className="text-primary">
                  {idx === 0 && <Play size={20} />}
                  {idx === 1 && <Users size={20} />}
                  {idx === 2 && <Share2 size={20} />}
                  {idx === 3 && <Radio size={20} />}
                </div>
              </div>
              <h3 className="text-lg font-bold text-light mb-2">
                {testimonial.useCase}
              </h3>
              <p className="text-light-50 text-sm">
                {testimonial.content.split(' ').slice(0, 10).join(' ')}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;