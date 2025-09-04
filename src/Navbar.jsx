// React and router imports
import { useState, useRef, useEffect } from "react";
// For this example, we'll use a placeholder Link if it's not available.
import { Link as RouterLink, useLocation } from "react-router-dom";

// Navigation links for the navbar
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/courses", label: "Courses" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

// Fallback Link component if react-router-dom is not set up
const Link = (props) => {
  return <RouterLink {...props} />;
};


// Hamburger menu icon for mobile
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Close (X) icon for mobile menu
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Main Navbar component
const App = () => {
  // State for mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);
  // State for the sliding pill's style (width, left, opacity)
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, opacity: 0 });

  // Ref to the container holding the nav links (for measuring pill position)
  const linksContainerRef = useRef(null);
  // Get the current route location
  const location = useLocation();

  // Toggle mobile menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);
  // Close mobile menu (used on link click)
  const closeMobileMenu = () => setIsOpen(false);

  // Update the pill's position and size to match the hovered/active link
  const updatePillStyle = (element) => {
    if (element && linksContainerRef.current) {
        const containerRect = linksContainerRef.current.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        
        setPillStyle({
            width: element.offsetWidth,
            left: element.offsetLeft,
            opacity: 1,
        });
    }
  };

  // On route change, set the pill to the active link
  useEffect(() => {
    const activeLink = linksContainerRef.current?.querySelector(
      `a[href="${location.pathname}"]`
    );
    // Delay to ensure DOM is ready for measurement
    if (activeLink) {
        setTimeout(() => updatePillStyle(activeLink), 50);
    } else {
        // If no link is active (e.g., 404 page), hide the pill
        setPillStyle({ width: 0, left: 0, opacity: 0 });
    }
  }, [location.pathname]);

  // On mouse enter, move pill to hovered link
  const handleMouseEnter = (e) => {
    updatePillStyle(e.currentTarget);
  };

  // On mouse leave, reset pill to active link
  const handleMouseLeave = () => {
    const activeLink = linksContainerRef.current?.querySelector(
      `a[href="${location.pathname}"]`
    );
    updatePillStyle(activeLink);
  };

  return (
    // Navbar outer container (fixed, full width)
    <nav className="bg-black/50 backdrop-blur-md shadow-lg shadow-neutral-900/50 fixed w-full z-50">
      {/* Main content container (full width, responsive padding) */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo / Name section */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMobileMenu}>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white transition-transform duration-300 hover:scale-105">
                DP
              </h1>
            </Link>
          </div>

          {/* Desktop navigation links (centered) */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div
              ref={linksContainerRef}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center p-1 rounded-full bg-gray-800 shadow-[inset_4px_4px_8px_#1f2937,inset_-4px_-4px_8px_#4b5563]"
            >
              {/* Sliding pill background for active/hovered link */}
              <div
                className="absolute h-10 bg-white/30 backdrop-blur-sm border border-white/20 rounded-full shadow-lg transition-all duration-300 ease-in-out z-0"
                style={pillStyle}
              />

              {/* Render each nav link */}
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={handleMouseEnter}
                  className={`relative px-20 py-2 text-lg font-medium rounded-full transition-colors duration-300 z-10 
                    ${
                      location.pathname === link.to
                        ? "text-white" // Active text on the light pill
                        : "text-gray-300 hover:text-white" 
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button (hamburger/close) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-800 text-gray-200 shadow-[4px_4px_8px_#1c1c1c,-4px_-4px_8px_#2a2a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown (collapsible) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900 border-t border-gray-700/50 py-2">
          {/* Render each nav link for mobile */}
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu} // Close menu on link click
              className={`block px-6 py-3 text-lg transition-colors duration-200 
                ${
                  location.pathname === link.to
                    ? "bg-gray-700 text-white font-semibold"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default App;

