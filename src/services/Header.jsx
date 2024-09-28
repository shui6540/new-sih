import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome for icons
import './Header.css'; // Import CSS
import { Link } from 'react-router-dom';
import { translateText } from '../services/translateService'; // Import the translate service

const Header = () => {
  const [language, setLanguage] = useState('en'); // Default language
  const [translations, setTranslations] = useState({
    placeholder: 'Enter scheme name to search...',
    signIn: 'Sign In',
  });

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const placeholder = await translateText('Enter scheme name to search...', language);
        const signIn = await translateText('Sign In', language);
        setTranslations({ placeholder, signIn });
      } catch (error) {
        console.error('Failed to fetch translations:', error);
      }
    };

    fetchTranslations();
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <header className="header">
      <nav className="header-container">
        {/* Logo linked to Home Page */}
        <div className="logo-container">
          <Link to="/">
            <img 
              src="./logo.png" 
              alt="Logo" 
              className="right-logo"
            />
          </Link>
        </div>

        {/* Centered Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder={translations.placeholder}
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
              {translations.signIn} <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
