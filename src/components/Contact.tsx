import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <a
              href="mailto:i@piyushsingh.xyz"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
              <span>i@piyushsingh.xyz</span>
            </a>
            <a
              href="https://www.linkedin.com/in/piyushsinghxyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              <span>LinkedIn Profile</span>
            </a>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <a
                href="https://purda.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button flex items-center space-x-2"
              >
                <span>Purda</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="https://alphacodr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button flex items-center space-x-2"
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