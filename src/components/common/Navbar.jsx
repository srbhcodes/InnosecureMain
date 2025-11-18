import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu();
    
    // Scroll to top when navigating to home page
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location]);

  // Lock body scroll when mobile menu is open & close on Escape
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (prev) {
        setActiveMobileDropdown(null);
      }
      return !prev;
    });
  };

  const toggleMobileDropdown = (dropdownName) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdownName ? null : dropdownName
    );
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const handleLogoClick = (e) => {
    // If already on home page, prevent navigation and scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    }
    // If on different page, Link will handle navigation
    // The useEffect will handle scrolling to top after navigation
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setActiveMobileDropdown(null);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
            <span className="logo-text">
              innos<span className="logo-e">e</span>cure
            </span>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="navbar-center">
            <ul className="navbar-menu">
              {/* Services Dropdown */}
              <li className="navbar-item">
                <Link to="/services" className="navbar-link">
                  Services
                  <svg className="arrow" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 8L2 4h8L6 8z" />
                  </svg>
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-title">Our Services</div>
                  <Link to="/services/generative-ai" className="dropdown-item">
                    <span className="dropdown-badge badge-purple">🤖</span>
                    <span>Generative AI</span>
                  </Link>
                  <Link to="/services/blockchain" className="dropdown-item">
                    <span className="dropdown-badge badge-blue">🔗</span>
                    <span>Blockchain & Web3</span>
                  </Link>
                  <Link to="/services/data-engineering" className="dropdown-item">
                    <span className="dropdown-badge badge-teal">📊</span>
                    <span>Data Engineering</span>
                  </Link>
                  <Link to="/services/cloud-engineering" className="dropdown-item">
                    <span className="dropdown-badge badge-orange">☁️</span>
                    <span>Cloud Engineering</span>
                  </Link>
                  <Link to="/services/app-development" className="dropdown-item">
                    <span className="dropdown-badge badge-pink">📱</span>
                    <span>App Development</span>
                  </Link>
                  <Link to="/services/managed-services" className="dropdown-item">
                    <span className="dropdown-badge badge-purple">🔧</span>
                    <span>Managed Services</span>
                  </Link>
                  <Link to="/services/intelligent-automation" className="dropdown-item">
                    <span className="dropdown-badge badge-blue">⚙️</span>
                    <span>Intelligent Automation</span>
                  </Link>
                </div>
              </li>

              {/* Industries Dropdown */}
              <li className="navbar-item">
                <Link to="/industries" className="navbar-link">
                  Industries
                  <svg className="arrow" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 8L2 4h8L6 8z" />
                  </svg>
                </Link>
                <div className="dropdown-menu">
                  <div className="dropdown-title">Industry Solutions</div>
                  <Link to="/industries/aerospace" className="dropdown-item">
                    <span className="dropdown-badge badge-purple">✈️</span>
                    <span>Aerospace</span>
                  </Link>
                  <Link to="/industries/automotive" className="dropdown-item">
                    <span className="dropdown-badge badge-blue">🚗</span>
                    <span>Automotive</span>
                  </Link>
                  <Link to="/industries/banking" className="dropdown-item">
                    <span className="dropdown-badge badge-teal">🏦</span>
                    <span>Banking</span>
                  </Link>
                  <Link to="/industries/education" className="dropdown-item">
                    <span className="dropdown-badge badge-orange">🎓</span>
                    <span>Education</span>
                  </Link>
                  <Link to="/industries/healthcare" className="dropdown-item">
                    <span className="dropdown-badge badge-pink">❤️</span>
                    <span>Healthcare</span>
                  </Link>
                  <Link to="/industries/high-tech" className="dropdown-item">
                    <span className="dropdown-badge badge-purple">💻</span>
                    <span>High Tech</span>
                  </Link>
                  <Link to="/industries/hospitality" className="dropdown-item">
                    <span className="dropdown-badge badge-blue">🏨</span>
                    <span>Hospitality</span>
                  </Link>
                  <Link to="/industries/insurance" className="dropdown-item">
                    <span className="dropdown-badge badge-teal">🛡️</span>
                    <span>Insurance</span>
                  </Link>
                  <Link to="/industries/media" className="dropdown-item">
                    <span className="dropdown-badge badge-orange">🎥</span>
                    <span>Media</span>
                  </Link>
                  <Link to="/industries/retail" className="dropdown-item">
                    <span className="dropdown-badge badge-pink">🛍️</span>
                    <span>Retail</span>
                  </Link>
                  <Link to="/industries/tour-travel" className="dropdown-item">
                    <span className="dropdown-badge badge-purple">✈️</span>
                    <span>Travel</span>
                  </Link>
                  <Link to="/industries/logistics" className="dropdown-item">
                    <span className="dropdown-badge badge-blue">🚚</span>
                    <span>Logistics</span>
                  </Link>
                </div>
              </li>

              {/* About */}
              <li className="navbar-item">
                <Link
                  to="/about"
                  className={`navbar-link ${isActiveLink('/about') ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>

              {/* Contact */}
              <li className="navbar-item">
                <Link
                  to="/contact"
                  className={`navbar-link ${isActiveLink('/contact') ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-panel"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            <span
              style={{
                transform: isMobileMenuOpen
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : 'none',
              }}
            ></span>
            <span style={{ opacity: isMobileMenuOpen ? '0' : '1' }}></span>
            <span
              style={{
                transform: isMobileMenuOpen
                  ? 'rotate(-45deg) translate(7px, -6px)'
                  : 'none',
              }}
            ></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu-panel"
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="navbar"
      >
        <ul className="navbar-menu">
          {/* Services Dropdown - Mobile */}
          <li
            className={`navbar-item ${
              activeMobileDropdown === 'services' ? 'active' : ''
            }`}
          >
            <a
              href="/services"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                toggleMobileDropdown('services');
              }}
            >
              Services
              <svg className="arrow" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 11l-5-5h10l-5 5z" />
              </svg>
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-title">Our Services</div>
              <Link to="/services/generative-ai" className="dropdown-item">
                <span className="dropdown-badge badge-purple">🤖</span>
                <span>Generative AI</span>
              </Link>
              <Link to="/services/blockchain" className="dropdown-item">
                <span className="dropdown-badge badge-blue">🔗</span>
                <span>Blockchain & Web3</span>
              </Link>
              <Link to="/services/data-engineering" className="dropdown-item">
                <span className="dropdown-badge badge-teal">📊</span>
                <span>Data Engineering</span>
              </Link>
              <Link to="/services/cloud-engineering" className="dropdown-item">
                <span className="dropdown-badge badge-orange">☁️</span>
                <span>Cloud Engineering</span>
              </Link>
              <Link to="/services/app-development" className="dropdown-item">
                <span className="dropdown-badge badge-pink">📱</span>
                <span>App Development</span>
              </Link>
              <Link to="/services/managed-services" className="dropdown-item">
                <span className="dropdown-badge badge-purple">🔧</span>
                <span>Managed Services</span>
              </Link>
              <Link to="/services/intelligent-automation" className="dropdown-item">
                <span className="dropdown-badge badge-blue">⚙️</span>
                <span>Intelligent Automation</span>
              </Link>
            </div>
          </li>

          {/* Industries Dropdown - Mobile */}
          <li
            className={`navbar-item ${
              activeMobileDropdown === 'industries' ? 'active' : ''
            }`}
          >
            <a
              href="/industries"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                toggleMobileDropdown('industries');
              }}
            >
              Industries
              <svg className="arrow" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 11l-5-5h10l-5 5z" />
              </svg>
            </a>
            <div className="dropdown-menu">
              <div className="dropdown-title">Industry Solutions</div>
              <Link to="/industries/aerospace" className="dropdown-item">
                <span className="dropdown-badge badge-purple">✈️</span>
                <span>Aerospace</span>
              </Link>
              <Link to="/industries/automotive" className="dropdown-item">
                <span className="dropdown-badge badge-blue">🚗</span>
                <span>Automotive</span>
              </Link>
              <Link to="/industries/banking" className="dropdown-item">
                <span className="dropdown-badge badge-teal">🏦</span>
                <span>Banking</span>
              </Link>
              <Link to="/industries/education" className="dropdown-item">
                <span className="dropdown-badge badge-orange">🎓</span>
                <span>Education</span>
              </Link>
              <Link to="/industries/healthcare" className="dropdown-item">
                <span className="dropdown-badge badge-pink">❤️</span>
                <span>Healthcare</span>
              </Link>
              <Link to="/industries/high-tech" className="dropdown-item">
                <span className="dropdown-badge badge-purple">💻</span>
                <span>High Tech</span>
              </Link>
              <Link to="/industries/hospitality" className="dropdown-item">
                <span className="dropdown-badge badge-blue">🏨</span>
                <span>Hospitality</span>
              </Link>
              <Link to="/industries/insurance" className="dropdown-item">
                <span className="dropdown-badge badge-teal">🛡️</span>
                <span>Insurance</span>
              </Link>
              <Link to="/industries/media" className="dropdown-item">
                <span className="dropdown-badge badge-orange">🎥</span>
                <span>Media</span>
              </Link>
              <Link to="/industries/retail" className="dropdown-item">
                <span className="dropdown-badge badge-pink">🛍️</span>
                <span>Retail</span>
              </Link>
              <Link to="/industries/tour-travel" className="dropdown-item">
                <span className="dropdown-badge badge-purple">✈️</span>
                <span>Travel</span>
              </Link>
              <Link to="/industries/logistics" className="dropdown-item">
                <span className="dropdown-badge badge-blue">🚚</span>
                <span>Logistics</span>
              </Link>
            </div>
          </li>

          {/* About - Mobile */}
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>

          {/* Contact - Mobile */}
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Navbar;

