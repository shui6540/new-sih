import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Header = () => {
  const { t, i18n } = useTranslation(); // Import useTranslation hook for translations
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage for theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Toggle theme and save preference in local storage
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Change language function
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <header>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/smj.png" 
              alt={t('logo_primary')} // Use translation keys for alt text
              style={{ width: '150px', marginRight: '10px' }} 
            />
            <img 
              src="/logo.png" 
              alt={t('logo_secondary')} // Use translation keys for alt text
              style={{ width: '300px' }}  
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder={t('search_placeholder')} // Use translation key for placeholder
                style={{
                  padding: '10px 40px 10px 15px',
                  borderRadius: '30px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  fontSize: '16px',
                  width: '300px',
                  textAlign: 'center',
                  marginLeft: '150px'
                }}
              />
              <i 
                className="fas fa-search" 
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '15px',
                  transform: 'translateY(-50%)',
                  fontSize: '16px',
                  color: '#555'
                }}
              ></i>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '30px' }}>
              <button style={{
                backgroundColor: '#FFBF78', 
                color: 'white', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '20px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}>
                {t('sign_in')} <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <i className="fas fa-language"></i>
                <span onClick={() => handleLanguageChange('en')} style={{ cursor: 'pointer' }}>Eng</span>
                <span onClick={() => handleLanguageChange('hi')} style={{ cursor: 'pointer' }}>हिंदी</span>
              </div>

              {/* Theme Toggle Button */}
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleTheme}>
                <i className={isDarkMode ? "fas fa-moon" : "fas fa-sun"}></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
