import React from 'react';
import { ChevronDown } from 'lucide-react';
import ProfilePic from '/src/assets/img/piyush.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300" />
            <img
              src={ProfilePic}
              alt="Piyush Singh - Entrepreneur and Business Leader"
              className="w-32 h-32 rounded-full mx-auto object-cover relative transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Piyush Singh
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-6 opacity-90">
            Entrepreneur, Metaverse Advocate, and Business Leader
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Driving Innovation in Technology and Beyond
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#ventures"
              className="primary-button"
            >
              Explore my ventures
            </a>
            <a
              href="https://www.linkedin.com/in/piyushsinghxyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToNext}
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;