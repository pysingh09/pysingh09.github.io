import React from 'react';

const About = () => {
  const skills = [
    'Artificial Intelligence (AI)',
    'Blockchain & Web3',
    'Metaverse',
    'AWS & Cloud',
    'Full-Stack Development',
    'Product Development',
    'Business Strategy',
    'Startup Scaling',
    'Leadership',
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Consider adding the 'section-heading' class here if you want consistent heading style */}
        <h2 className="text-3xl font-bold mb-12 text-center text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start"> {/* Added items-start for better alignment */}
          <div>
            <p className="text-gray-300 mb-6">
              Dynamic founder with 9+ years building and scaling technology ventures.
              Currently Founder of MadeYou AI, CEO of XANA India, and Director at Alphacodr,
              I bring deep experience in product, growth, and strategy
              across markets from Indore to Dubai, UAE.
            </p>
            <p className="text-gray-300 mb-6">
              As a Forbes Business Council member and AWS Certified Solutions Architect, I'm passionate about leveraging technology
              to drive innovation, with a particular focus on <span className="font-semibold text-gray-100">AI (Artificial Intelligence)</span>, the <span className="font-semibold text-gray-100">Metaverse</span>, <span className="font-semibold text-gray-100">Blockchain</span>, and
              full-stack product development. My journey began with founding Webllisto Technologies in 2018,
              and now centers on <a href="https://madeyou.ai" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200">MadeYou AI</a> — an AI-powered platform for more meaningful human connection.
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