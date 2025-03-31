import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree hooks

const Contact = () => {
  // Add the useForm hook here, using your Formspree form ID
  const [state, handleSubmit] = useForm("mblgawgn");

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Let's Connect</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            Interested in collaborating, discussing innovative ideas, or exploring opportunities in Web3 and Blockchain? Reach out directly or connect through my ventures. You can also send a message using the form below. {/* Added mention of the form */}
          </p>

          {/* Keep existing contact links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"> {/* Adjusted layout for links */}
          
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

          {/* --- Add the Formspree Form Here --- */}
          {state.succeeded ? (
             <p className="text-green-500 font-semibold text-lg mb-8">Thanks for reaching out! I'll get back to you soon.</p>
          ) : (
            <form method="POST" onSubmit={handleSubmit} className="space-y-6 text-left bg-gray-800/50 p-6 sm:p-8 rounded-lg shadow-lg mb-12">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
                 <ValidationError
                   prefix="Name" // Optional prefix for the error message
                   field="name"
                   errors={state.errors}
                   className="text-red-400 text-sm mt-1"
                 />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="Your message here..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="primary-button w-full disabled:opacity-50 disabled:cursor-not-allowed" // Use your primary button style
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
          {/* --- End Formspree Form --- */}


          {/* Keep existing venture links */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
             <p className="w-full text-gray-400 mb-2">Explore my ventures:</p> {/* Added context for buttons */}
            <a
              href="https://purda.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button inline-flex items-center gap-2" // Changed to secondary button for distinction? Adjust as needed.
            >
              Purda <ExternalLink size={16} />
            </a>
            <a
              href="https://alphacodr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button inline-flex items-center gap-2" // Changed to secondary button for distinction? Adjust as needed.
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