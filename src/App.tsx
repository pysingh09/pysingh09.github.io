// src/App.tsx
import React from 'react';
// Keep your existing icon and component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ventures from './components/Ventures';
import Opportunities from './components/Opportunities'; // Assuming this component exists
// import Testimonials from './components/Testimonials'; // Assuming this component exists
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import MediaRecognition from './components/MediaRecognition';
import ScrollToSection from './components/ScrollToSection'; // Import the new component

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <ScrollToSection /> {/* Add the scroll handler component here */}
      <Navbar />
      <main>
        {/* Ensure each section component has a root element with the corresponding ID */}
        {/* e.g., Hero component's root should be <section id="hero" ...> */}
        <Hero />
        {/* e.g., About component's root should be <section id="about" ...> */}
        <About />
        {/* e.g., Ventures component's root should be <section id="ventures" ...> */}
        <Ventures />
         {/* e.g., MediaRecognition component's root should be <section id="media" ...> (choose an ID) */}
        <MediaRecognition />
        {/* e.g., Opportunities component's root should be <section id="opportunities" ...> */}
         <Opportunities />  {/* Uncomment if you have this */}
        {/* e.g., Contact component's root should be <section id="contact" ...> */}
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