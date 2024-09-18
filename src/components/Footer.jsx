// src/components/Footer.js
//
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 MyScheme. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '11px',
   // Optional: Background color for the footer
   // Optional: To keep the footer at the bottom of the page
  bottom: 0,
  margin: '-10px -15px',
  width: '100%'
};

export default Footer;
