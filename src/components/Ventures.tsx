import React from 'react';
import { ExternalLink } from 'lucide-react';

const ventures = [
  {
    name: 'XANA India',
    role: 'CEO',
    description: 'Leading the Indian operations of XANA, a pioneering metaverse platform.',
    link: 'https://xana.net/',
  },
  {
    name: 'Purda',
    role: 'Founder',
    description: 'Revolutionary active noise cancellation technology for a quieter world.',
    link: 'https://purda.in',
  },
  {
    name: 'Protonshub',
    role: 'Co-founder',
    description: 'Building innovative technology solutions for businesses worldwide.',
    link: 'https://protonshub.com/',
  },
  {
    name: 'Webllisto Technologies',
    role: 'Former Founder',
    description: 'Led strategic growth and development of digital solutions.',
    link: 'https://webllisto.com/',
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          My Ventures
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((venture) => (
            <div key={venture.name} className="venture-card group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {venture.name}
                  </h3>
                  <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {venture.role}
                  </p>
                </div>
                <a
                  href={venture.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;