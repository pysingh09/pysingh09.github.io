import React from 'react';

const About = () => {
  // Updated skills list: Added AI, removed ANC (assuming it was less relevant)
  const skills = [
    'Artificial Intelligence (AI)', // Added AI
    'Blockchain',
    'Metaverse', // Kept Metaverse
    'Business Development',
    'Strategy',
    'Leadership',
    'Web3',
    'Product Development',
    // 'Active Noise Cancellation (ANC)', // Removed - Add back if relevant!
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Consider adding the 'section-heading' class here if you want consistent heading style */}
        <h2 className="text-3xl font-bold mb-12 text-center text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start"> {/* Added items-start for better alignment */}
          <div>
            <p className="text-gray-300 mb-6">
              Dynamic leader with a proven track record in building and scaling businesses.
              Currently serving as the CEO of XANA India and Co-founder of Alphacodr,
              I bring extensive experience in business development, growth, and strategy
              across diverse markets, including Dubai, UAE. {/* Added location context */}
            </p>
            <p className="text-gray-300 mb-6">
              As a Forbes Business Council Member, I'm passionate about leveraging technology
              to drive innovation, with a particular focus on <span className="font-semibold text-gray-100">AI (Artificial Intelligence)</span>, the <span className="font-semibold text-gray-100">Metaverse</span>, <span className="font-semibold text-gray-100">Blockchain</span>, and
              cutting-edge product development. My journey includes successful leadership roles
              at Webllisto Technologies and significant contributions to <a href="https://purda.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200">"Purda: Reclaim Your Quiet."</a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3"> {/* Increased gap slightly */}
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-default" // Added hover effect
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;