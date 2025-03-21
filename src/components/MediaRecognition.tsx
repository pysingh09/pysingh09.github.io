import React from 'react';
import { ExternalLink } from 'lucide-react';

const MediaRecognition = () => {
  return (
    <section id="media" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Media & Recognition</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Forbes Business Council */}
          <div className="venture-card">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Forbes Business Council Leader
                </h3>
                <p className="text-blue-400">Entrepreneur & Thought Leader in Blockchain</p>
              </div>
              <a
                href="https://www.forbes.com/councils/piyushsingh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label="View Forbes Profile"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="text-gray-300">
              Active contributor to Forbes Business Council, sharing insights as an Entrepreneur and Blockchain Advocate.
            </p>
          </div>

          {/* GDG Indore Startup Success Days 2023 */}
          <div className="venture-card">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Speaker at Startup Success Days India 2023
                </h3>
                <p className="text-blue-400">GDG Indore | Sep 30, 2023</p>
              </div>
              <a
                href="https://gdg.community.dev/events/details/google-gdg-indore-presents-startup-success-days-india-2023-gdg-indore-1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label="View Event Details"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <h4 className="text-lg font-medium text-white mb-3">
              Empowering Startups through Web3 & Blockchain Innovation
            </h4>
            <p className="text-gray-300">
              Featured as a Metaverse Expert and Blockchain Advocate, Piyush Singh shared insights on leveraging Web3 technologies to boost startup success and digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaRecognition;
