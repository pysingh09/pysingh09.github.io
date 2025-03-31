import React from 'react';
import { ChevronDown } from 'lucide-react';
import ProfilePic from '/src/assets/img/piyush.jpg'; // Make sure this path is correct relative to your project structure

const Hero = () => {
  const scrollToNext = () => {
    // Consider targeting a more specific next section like '#about' or '#ventures'
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Consider adding bg-black or similar if the gradient isn't dark enough on its own
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 bg-gray-900"> {/* Added a base background color */}
      {/* Optional: decorative gradients/overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 relative group">
            {/* Blur effect container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition duration-300" /> {/* Increased blur */}
            <img
              src={ProfilePic}
              // UPDATED alt text
              alt="Piyush Singh - AI, Blockchain & Metaverse Entrepreneur"
              className="w-32 h-32 rounded-full mx-auto object-cover relative ring-4 ring-gray-700 group-hover:scale-105 transition duration-300" // Added ring and adjusted transform origin if needed
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Piyush Singh
          </h1>
          {/* UPDATED Tagline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-6 opacity-90">
            AI, Blockchain & Metaverse Entrepreneur
          </p>
          {/* UPDATED Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Driving innovation at the intersection of Artificial Intelligence (AI), Blockchain, and the Metaverse to empower digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#ventures" // Make sure this ID exists on your ventures section
              className="primary-button"
            >
              Explore My Ventures
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
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" // Ensure button is above overlays if needed
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;