import React from 'react';
import { ExternalLink } from 'lucide-react';

const MediaRecognition = () => {
  return (
    <section id="media" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Media & Recognition</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Forbes Business Council Profile */}
          <div className="venture-card">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Forbes Business Council Member
                </h3>
                <p className="text-blue-400">Thought Leader & Contributor</p>
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
              Active member of the Forbes Business Council, an invitation-only community
              for successful business owners and leaders.
            </p>
          </div>

          {/* Featured Article */}
          <div className="venture-card">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Featured Article on Forbes
                </h3>
                <p className="text-blue-400">June 14, 2023</p>
              </div>
              <a
                href="https://www.forbes.com/councils/forbesbusinesscouncil/2023/06/14/digital-divide-how-tech-companies-can-help-address-the-usability-gap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label="Read Article"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <h4 className="text-lg font-medium text-white mb-3">
              Digital Divide: How Tech Companies Can Help Address the Usability Gap
            </h4>
            <p className="text-gray-300">
              Exploring strategies for technology companies to bridge the digital divide
              and make their products more accessible to diverse user groups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaRecognition;