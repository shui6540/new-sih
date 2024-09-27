import React from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for icons
import './Header.css'; // Import CSS
import { Link } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation(); // For translations

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <nav className="header-container">
        {/* Logo linked to Home Page */}
        <div className="logo-container">
          <Link to="/">
            <img 
              src="./logo.png" 
              alt={t('logo_secondary')} 
              className="right-logo"
            />
          </Link>
        </div>

        {/* Centered Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder={t('Enter scheme name to search...')}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>

        {/* Right-aligned elements: Language Switch and Sign-In Button */}
        <div className="right-elements">
          <div className="language-switch">
            <i className="fas fa-language"></i>
            <span onClick={() => handleLanguageChange('en')} className="language-option">Eng</span>
            <span onClick={() => handleLanguageChange('hi')} className="language-option">हिंदी</span>
          </div>

          <Link to="/login">
            <button className="sign-in-button">
              {t('Sign In')} <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
