import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ventures from './components/Ventures';
import Opportunities from './components/Opportunities';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import MediaRecognition from './components/MediaRecognition';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <MediaRecognition />
        <Opportunities />
        <Contact />
      </main>
      <footer className="bg-gray-800/50 backdrop-blur-sm py-6 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Piyush Singh. All rights reserved.</p>
      </footer>
      <BackToTop />
    </div>
  );
}

export default App;