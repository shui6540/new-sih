import React from 'react';
import './CategoryGrid.css'; // Import the CSS file for styling

const categories = [
  { name: 'Agriculture, Rural & Environment', schemes: 338, icon: '🌾' },
  { name: 'Banking, Financial Services and Insurance', schemes: 172, icon: '🏦' },
  { name: 'Business & Entrepreneurship', schemes: 343, icon: '💼' },
  { name: 'Education & Learning', schemes: 626, icon: '🎓' },
  { name: 'Health & Wellness', schemes: 171, icon: '❤️' },
  { name: 'Housing & Shelter', schemes: 64, icon: '🏠' },
  { name: 'Public Safety, Law & Justice', schemes: 9, icon: '⚖️' },
  { name: 'Science, IT & Communications', schemes: 57, icon: '🔬' },
  { name: 'Skills & Employment', schemes: 217, icon: '📊' },
  { name: 'Social Welfare & Empowerment', schemes: 1092, icon: '✊' },
  { name: 'Sports & Culture', schemes: 106, icon: '🎾' },
  { name: 'Transport & Infrastructure', schemes: 46, icon: '🚍' },
  { name: 'Travel & Tourism', schemes: 34, icon: '🌍' },
  { name: 'Utility & Sanitation', schemes: 30, icon: '🔧' },
  { name: 'Women and Child', schemes: 323, icon: '👶' },
];

const CategoryGrid = () => {
  const visibleCategories = categories.slice(0, 15); // Limit to 15 items for 5x3 grid

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Find Schemes Based on Categories</h1>
      <div className="grid-container">
        {visibleCategories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <div className="category-info">
              <h4>{category.name}</h4>
              <p>{category.schemes} Schemes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
