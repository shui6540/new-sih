import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutUs.css';

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us">
      <h2>{t('aboutUs.heading1')}</h2>
      <p>{t('aboutUs.paragraph1')}</p>
      <p>{t('aboutUs.paragraph2')}</p>

      <h2>{t('aboutUs.heading2')}</h2>
      <p>{t('aboutUs.paragraph3')}</p>
      <p>{t('aboutUs.paragraph4')}</p>

      <h2>{t('aboutUs.heading3')}</h2>
      <p>{t('aboutUs.paragraph5')}</p>
      <p>{t('aboutUs.paragraph6')}</p>

      <h2>{t('aboutUs.heading4')}</h2>
      <p>{t('aboutUs.paragraph7')}</p>
      <p>{t('aboutUs.paragraph8')}</p>

      <h2>{t('aboutUs.heading5')}</h2>
      <p>{t('aboutUs.paragraph9')}</p>
      <p>{t('aboutUs.paragraph10')}</p>

      <h2>{t('aboutUs.heading6')}</h2>
      <p>{t('aboutUs.paragraph11')}</p>
      <p>{t('aboutUs.paragraph12')}</p>

      <h2>{t('aboutUs.heading7')}</h2>
      <p>{t('aboutUs.paragraph13')}</p>
    </div>
  );
};

export default AboutUs;
