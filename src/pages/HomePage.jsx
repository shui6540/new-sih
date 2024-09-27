import React from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher'; // Import the LanguageSwitcher component
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="homePage">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Main Image */}
      <main className="mainStyle">
        <img
          src="/2.png"
          alt={t('hero_title')}
          className="mainImageStyle"
        />
      </main>

      {/* Sections */}
      <div>
        <HeroSection />
        <CategoryGrid />
      </div>

      {/* Link to PopulationChart page */}
      <div style={{ textAlign: 'center', marginTop: '0px', marginBottom: '50px' }}>
        <Link to="/population-chart" className="ctaButtonStyle">
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
    <section id="hero" className="sectionStyle">
      <div className="contentStyle">
        <h2>{t('hero_title')}</h2>
        <p>{t('hero_description')}</p>
        <Link to="/apply" className="ctaButtonStyle">{t('cta_button_apply')}</Link>
      </div>
    </section>
  );
}

export default HomePage;