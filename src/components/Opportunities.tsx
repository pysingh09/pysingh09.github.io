import React from 'react';

const opportunities = [
  {
    company: 'Alphacodr',
    title: 'Dubai Expansion',
    description: 'Seeking to establish a presence in Dubai and generate more business opportunities. Open to partnerships with local businesses, marketing experts, and business development professionals in the region.',
  },
  {
    company: 'Purda',
    title: 'MVP Development',
    description: 'Actively seeking professionals to contribute to the MVP development, including engineers, designers, and product managers with experience in audio technology or related fields. Also seeking investors interested in supporting the development and launch of this innovative product.',
  },
];

const Opportunities = () => {
  return (
    <section id="opportunities" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">What I'm Looking For</h2>
        <div className="space-y-8">
          {opportunities.map((opp) => (
            <div
              key={opp.company}
              className="bg-gray-700 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{opp.company} - {opp.title}</h3>
              <p className="text-gray-300">{opp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;