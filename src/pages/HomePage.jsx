import React from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher'; // Import the LanguageSwitcher component

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Main Image */}
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', marginLeft: '80px' }}>
        <img
          src="/2.png"
          alt={t('hero_title')}
          style={{ maxWidth: '100%', maxHeight: '100%' ,marginTop:'250px'}}
        />
      </main>

      {/* Sections */}
      <div>
        <HeroSection />
        <CategoryGrid />
      </div>

      {/* Link to PopulationChart page */}
      <div style={{ textAlign: 'center', marginTop: '0px', marginBottom: '50px' }}>
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

// ApplySection component
function ApplySection() {
  const { t } = useTranslation();

  return (
    <section id="apply" style={sectionStyle}>
      <div style={contentStyle}>
        <h2>{t('apply_section_title')}</h2>
        <p>{t('apply_section_description')}</p>
      </div>
    </section>
  );
}

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '250px',
  width: '100%',
  margin: '15px 0'
};

const contentStyle = {
  textAlign: 'center',
  width: '80%',
  maxWidth: '800px',
  padding: '20px',
  boxSizing: 'border-box'
};

const ctaButtonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  marginTop: '20px',
  backgroundColor: '#FFBF78',
  color: 'white',
  borderRadius: '20px',
  textDecoration: 'none'
};

export default HomePage;
