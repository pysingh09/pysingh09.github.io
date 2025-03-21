import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Let's Connect</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            Interested in collaborating, discussing innovative ideas, or exploring opportunities in Web3 and Blockchain? Reach out directly or connect through my ventures.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <a
              href="mailto:i@piyushsingh.xyz"
              className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-white transition duration-200"
            >
              <Mail size={24} className="transform hover:scale-110 transition-transform" />
              <span>Email: i@piyushsingh.xyz</span>
            </a>
            <a
              href="https://www.linkedin.com/in/piyushsinghxyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-white transition duration-200"
            >
              <Linkedin size={24} className="transform hover:scale-110 transition-transform" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="https://purda.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button inline-flex items-center gap-2"
            >
              Purda <ExternalLink size={16} />
            </a>
            <a
              href="https://alphacodr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button inline-flex items-center gap-2"
            >
              Alphacodr <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
