import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ventures from './components/Ventures';
import Opportunities from './components/Opportunities';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Opportunities />
        <Contact />
      </main>
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Piyush Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;