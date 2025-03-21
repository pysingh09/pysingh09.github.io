import React from 'react';

const opportunities = [
  {
    company: 'Alphacodr',
    title: 'Dubai Expansion',
    description:
      'Looking to establish strategic partnerships in Dubai. Interested in connecting with local businesses, marketing specialists, and business development experts.',
  },
  {
    company: 'Purda',
    title: 'MVP Development',
    description:
      'Seeking skilled engineers, designers, and product managers experienced in audio tech. Open to investors eager to support cutting-edge innovation.',
  },
];

const Opportunities = () => {
  return (
    <section id="opportunities" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Current Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {opportunities.map((opp) => (
            <div
              key={opp.company}
              className="bg-gray-700 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {opp.company} – {opp.title}
              </h3>
              <p className="text-gray-300">{opp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
