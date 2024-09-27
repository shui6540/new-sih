import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './StatesUTsPage.css'; // Create a CSS file for styles

const StatesUTsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="statesUTsPage">
      <h1>{t('explore_schemes')}</h1>
      <div className="gridContainer">
        {/* Add your states and UTs here as links */}
        <Link to="/andaman" className="stateCard">Andaman and Nicobar Islands</Link>
        <Link to="/andhra-pradesh" className="stateCard">Andhra Pradesh</Link>
        <Link to="/arunachal-pradesh" className="stateCard">Arunachal Pradesh</Link>
        <Link to="/assam" className="stateCard">Assam</Link>
        {/* Add more states as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default StatesUTsPage;
