import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Navigation.css';

const Navigation = ({ language, setLanguage, t, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
   // In handleNavClick function, add 'coaches' to the sectionMap:
      const sectionMap = {
  home: 'home',
  about: 'about',
  management: 'management',
  coaches: 'coaches',  // Add this
  schedule: 'schedule',
  contact: 'contact'
};
    scrollToSection(sectionMap[section] || 'home');
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={logo} alt="Phoenix Athletics" className="logo-img" />
            <div className="logo-text">Phoenix <span className="logo-text-accent">Athletics e.V.</span></div>
          </div>
          
          {/* Desktop Menu */}
          <div className="nav-desktop">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className="nav-link"
              >
                {value}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="nav-language"
            >
              <Globe className="language-icon" />
              <span>{language === 'en' ? 'DE' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="nav-mobile-button"
          >
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="nav-mobile">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className="nav-mobile-link"
              >
                {value}
              </button>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="nav-mobile-language"
            >
              <Globe className="language-icon" />
              <span>{language === 'en' ? 'Deutsch' : 'English'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;