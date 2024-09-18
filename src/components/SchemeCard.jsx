// src/components/SchemeCard.js
import React from 'react';

const SchemeCard = ({ scheme }) => {
  return (
    <div className="scheme-card">
      <h3>{scheme.name}</h3>
      <p>{scheme.description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default SchemeCard;
