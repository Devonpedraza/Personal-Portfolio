// React and router imports
import { useState, useRef, useEffect } from "react";
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
const Link = (props) => <RouterLink {...props} />;

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
  const [isOpen, setIsOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0, opacity: 0 });
  const linksContainerRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMobileMenu = () => setIsOpen(false);

  const updatePillStyle = (element) => {
    if (element && linksContainerRef.current) {
      setPillStyle({
        width: element.offsetWidth,
        left: element.offsetLeft,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    const activeLink = linksContainerRef.current?.querySelector(
      `a[href="${location.pathname}"]`
    );
    if (activeLink) {
      setTimeout(() => updatePillStyle(activeLink), 50);
    } else {
      setPillStyle({ width: 0, left: 0, opacity: 0 });
    }
  }, [location.pathname]);

  const handleMouseEnter = (e) => updatePillStyle(e.currentTarget);

  const handleMouseLeave = () => {
    const activeLink = linksContainerRef.current?.querySelector(
      `a[href="${location.pathname}"]`
    );
    updatePillStyle(activeLink);
  };

  // Prevent body scroll when mobile menu is open (nicer UX)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Chrome mobile fix: dynamically position mobile menu under navbar
  useEffect(() => {
    const handleViewportResize = () => {
      const navHeight = document.querySelector("nav")?.offsetHeight || 80;
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) mobileMenu.style.top = `${navHeight}px`;
    };

    // Run once and add listener
    handleViewportResize();
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportResize);
    } else {
      window.addEventListener("resize", handleViewportResize);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleViewportResize);
      } else {
        window.removeEventListener("resize", handleViewportResize);
      }
    };
  }, [isOpen]);

  return (
    <>
      {/* FIXED navbar with GPU layer to avoid mobile "disappearing" */}
      <nav
        className="
          fixed inset-x-0 top-0 z-50
          bg-black/50 backdrop-blur-md
          shadow-lg shadow-neutral-900/50
        "
        style={{
          paddingTop: "env(safe-area-inset-top)", // notch safe
          transform: "translateZ(0)", // force GPU layer
          willChange: "transform",    // keep stable in Chrome
        }}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo / Name section */}
            <div className="flex-shrink-0">
              <Link to="/" onClick={closeMobileMenu}>
                <h1
                  className="text-4xl md:text-5xl font-extrabold tracking-wider text-white transition-transform duration-300 hover:scale-105"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  DP
                </h1>
              </Link>
            </div>

            {/* Desktop navigation links (centered) */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
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

                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onMouseEnter={handleMouseEnter}
                    className={`relative px-15 py-2 text-lg font-medium rounded-full transition-colors duration-300 z-10 
                      ${
                        location.pathname === link.to
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button (hamburger/close) */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-gray-800 text-gray-200 shadow-[4px_4px_8px_#1c1c1c,-4px_-4px_8px_#2a2a2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from sliding under the fixed navbar (h-20 = 5rem) */}
      <div className="h-20" aria-hidden="true" />

      {/* Mobile menu dropdown */}
      <div
        id="mobile-menu"
        className={`
          lg:hidden fixed left-0 right-0 z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="bg-gray-900 border-t border-gray-700/50 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
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
    </>
  );
};

export default App;
