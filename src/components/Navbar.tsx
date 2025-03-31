import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure these items match the IDs of your sections in App.tsx for scrolling to work
  // Note: 'Opportunities' was commented out in the App.tsx example I provided earlier.
  // Ensure you have a section with id="opportunities" if you keep this link.
  const navItems = ['About', 'Ventures', 'Opportunities', 'Contact']; // You might need 'Media' here too if you want a link

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Use Link for the home/brand link */}
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              onClick={() => setIsOpen(false)} // Close mobile menu if open
            >
              Piyush Singh
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                // Replace <a> with <Link> for desktop menu
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`} // Use path-based URL
                  className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                       hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2
                       focus:ring-inset focus:ring-white transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'} // Improved aria-label
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 shadow-lg">
          {navItems.map((item) => (
            // Replace <a> with <Link> for mobile menu
            <Link
              key={item}
              to={`/${item.toLowerCase()}`} // Use path-based URL
              className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2
                       rounded-md text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)} // Keep this to close menu on click
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;