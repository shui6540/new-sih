import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
// import './CentralMinistriesPage.css'; // Create a CSS file for styles

const CentralMinistriesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="centralMinistriesPage">
      <h1>{t('central_ministries')}</h1>
      <div className="gridContainer">
        {/* Add your central ministries here as links */}
        <Link to="/ministry-of-finance" className="ministryCard">Ministry of Finance</Link>
        <Link to="/ministry-of-health" className="ministryCard">Ministry of Health</Link>
        <Link to="/ministry-of-education" className="ministryCard">Ministry of Education</Link>
        {/* Add more ministries as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default CentralMinistriesPage;
