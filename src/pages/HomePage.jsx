import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';
import TabComponent from '../components/TabComponent'; // Import the TabComponent
import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();
  const images = ['/2.png', '/4.png', '/6.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homePage">
      <LanguageSwitcher />
      <main className="mainStyle">
        <img
          src={images[currentIndex]}
          alt={t('hero_title')}
          className="mainImageStyle"
        />
      </main>

      {/* Add the TabComponent here */}
      <TabComponent />

      <div>
        <HeroSection />
        <CategoryGrid />
      </div>

      <div style={{ textAlign: 'center', marginTop: '0px', marginBottom: '50px' }}>
        <Link to="/population-chart" className="ctaButtonStyle">
          {t('view_data_statistics')}
        </Link>
      </div>

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
