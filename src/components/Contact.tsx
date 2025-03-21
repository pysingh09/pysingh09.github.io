import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <a
              href="mailto:i@piyushsingh.xyz"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={24} />
              <span>i@piyushsingh.xyz</span>
            </a>
            <a
              href="https://www.linkedin.com/in/piyushsinghxyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn Profile</span>
            </a>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://purda.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                <span>PURDA</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://alphacodr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                <span>Alphacodr</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;