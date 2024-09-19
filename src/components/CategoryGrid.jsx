import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation from react-i18next
import './CategoryGrid.css'; // Import the CSS file for styling

const categories = [
  { name: 'agriculture_rural_environment', schemes: 338, icon: '🌾' },
  { name: 'banking_financial_insurance', schemes: 172, icon: '🏦' },
  { name: 'business_entrepreneurship', schemes: 343, icon: '💼' },
  { name: 'education_learning', schemes: 626, icon: '🎓' },
  { name: 'health_wellness', schemes: 171, icon: '❤️' },
  { name: 'housing_shelter', schemes: 64, icon: '🏠' },
  { name: 'public_safety_law_justice', schemes: 9, icon: '⚖️' },
  { name: 'science_it_communications', schemes: 57, icon: '🔬' },
  { name: 'skills_employment', schemes: 217, icon: '📊' },
  { name: 'social_welfare_empowerment', schemes: 1092, icon: '✊' },
  { name: 'sports_culture', schemes: 106, icon: '🎾' },
  { name: 'transport_infrastructure', schemes: 46, icon: '🚍' },
  { name: 'travel_tourism', schemes: 34, icon: '🌍' },
  { name: 'utility_sanitation', schemes: 30, icon: '🔧' },
  { name: 'women_child', schemes: 323, icon: '👶' },
];

const CategoryGrid = () => {
  const { t } = useTranslation(); // Get the translation function
  const visibleCategories = categories.slice(0, 15); // Limit to 15 items for 5x3 grid

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginLeft: '30px' }}>
        {t('find_schemes_by_category')}
      </h1>
      <div className="container">
        <div className="grid-container">
          {visibleCategories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <div className="category-info">
                <h4>{t(category.name)}</h4>
                <p>
                  {category.schemes} {t('schemes_label')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
