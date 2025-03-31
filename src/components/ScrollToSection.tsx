// src/components/ScrollToSection.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // Get the section ID from the pathname (e.g., "/contact" -> "contact")
    // Default to 'hero' if the path is just '/'
    const sectionId = location.pathname === '/' ? 'hero' : location.pathname.substring(1);

    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      // Use setTimeout to ensure the element is available after render
      const timer = setTimeout(() => {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // Small delay might be needed

      return () => clearTimeout(timer); // Cleanup timer on component unmount or path change
    }
    // Optionally, scroll to top if no matching section ID is found or path is '/'
    else if (location.pathname === '/') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }, [location.pathname]); // Re-run effect when the pathname changes

  return null; // This component does not render anything itself
}

export default ScrollToSection;