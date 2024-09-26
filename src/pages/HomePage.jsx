import React from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';
import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div style={containerStyle}>
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Main Image */}
      <main style={mainStyle}>
        <img
          src="/2.png"
          alt={t('hero_title')}
          style={mainImageStyle}
        />
      </main>

      {/* Sections */}
      <div>
        <HeroSection />
        <CategoryGrid />
      </div>

      {/* Link to PopulationChart page */}
      <div style={linkContainerStyle}>
        <Link to="/population-chart" style={ctaButtonStyle}>
          {t('view_data_statistics')}
        </Link>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

// HeroSection component
function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" style={sectionStyle}>
      <div style={contentStyle}>
        <h2>{t('hero_title')}</h2>
        <p>{t('hero_description')}</p>
        <Link to="/apply" style={ctaButtonStyle}>{t('cta_button_apply')}</Link>
      </div>
    </section>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const mainStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%', // Full width
  height: '95vh', // Full height
  overflow: 'hidden', // Prevent scrollbars
  margin: '0', // Remove any default margins
  padding: 0,
};

const mainImageStyle = {
  width: '100%', // Full width
  height: 'auto', // Maintain aspect ratio
  objectFit: 'cover', // Cover the entire width and height without distortion
  marginTop: '100px', // Adjust margin-top if needed
};

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '250px',
  width: '100%',
  margin: '15px 0',
};

const contentStyle = {
  textAlign: 'center',
  width: '80%',
  maxWidth: '800px',
  padding: '20px',
  boxSizing: 'border-box',
};

const ctaButtonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  marginTop: '20px',
  backgroundColor: '#FFBF78',
  color: 'white',
  borderRadius: '20px',
  textDecoration: 'none',
};

const linkContainerStyle = {
  textAlign: 'center',
  marginTop: '0',
  marginBottom: '50px',
};

export default HomePage;
