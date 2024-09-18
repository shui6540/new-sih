// src/pages/SchemeListPage.js
import React from 'react';
import SchemeCard from '../components/SchemeCard';

const SchemeListPage = () => {
  const schemes = [
    { name: "Scheme 1", description: "Details about Scheme 1" },
    { name: "Scheme 2", description: "Details about Scheme 2" },
  ];

  return (
    <div>
      <h2>All Schemes</h2>
      {schemes.map((scheme, index) => (
        <SchemeCard key={index} scheme={scheme} />
      ))}
    </div>
  );
};

export default SchemeListPage;
