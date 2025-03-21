import React from 'react';

const About = () => {
  const skills = [
    'Blockchain',
    'Business Development',
    'Strategy',
    'Leadership',
    'Web3',
    'Metaverse',
    'Product Development',
    'Active Noise Cancellation (ANC)',
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-6">
              Dynamic leader with a proven track record in building and scaling businesses. 
              Currently serving as the CEO of XANA India and Co-founder of Protonshub, 
              I bring extensive experience in business development, growth, and strategy 
              across diverse markets.
            </p>
            <p className="text-gray-300 mb-6">
              As a Forbes Business Council Member, I'm passionate about leveraging technology 
              to drive innovation, with a particular focus on the metaverse, blockchain, and 
              cutting-edge product development. My journey includes successful leadership roles 
              at Webllisto Technologies and significant contributions to "Purda: Reclaim Your Quiet."
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
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