import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Footer from '../components/Footer'; // Import Footer component if not already imported
import PopulationChart from '../components/PopulationChart'; // This import is for direct rendering, not for routing


const data = [
  { year: 1901, population: 17552 },
  { year: 1911, population: 15141 },
  { year: 1921, population: 18833 },
  { year: 1931, population: 25236 },
  { year: 1941, population: 33364 },
  { year: 1951, population: 44204 },
  { year: 1961, population: 52685 },
  { year: 1971, population: 59714 },
  { year: 1981, population: 64431 },
  { year: 1991, population: 89625 },
  { year: 2001, population: 129894 },
  { year: 2011, population: 172878 },
];

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Main Image */}
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', marginLeft: '30px' }}>
        <img
          src="/slide.png"
          alt="Centered"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </main>

      {/* Sections */}
      <div>
        <HeroSection />
        <ApplySection />
        <CategoryGrid />
      </div>
     
      
      {/* Link to PopulationChart page */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Link to="/population-chart" style={ctaButtonStyle}>
          View Data Statiscts for Kerala
        </Link>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

// HeroSection component
function HeroSection() {
  return (
    <section id="hero" style={sectionStyle}>
      <div style={contentStyle}>
        <h2>Empowering Your Future</h2>
        <p>Learn about the benefits and apply for the Government Scheme today.</p>
        <Link to="/apply" style={ctaButtonStyle}>Apply Now</Link>
      </div>
    </section>
  );
}

// ApplySection component
function ApplySection() {
  return (
    <section id="apply" style={sectionStyle}>
      <div style={contentStyle}>
        <h2>How to Apply</h2>
        <p>Step-by-step instructions on how to apply for the scheme.</p>
      </div>
    </section>
  );
}

const sectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '500px', // Set desired height
  width: '100%', // Full width
  margin: '15px 0'
};

const contentStyle = {
  textAlign: 'center',
  width: '80%', // Adjust width as needed
  maxWidth: '800px', // Adjust max width as needed
  padding: '20px',
  boxSizing: 'border-box'
};

const ctaButtonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  marginTop: '20px',
  backgroundColor: '#FFBF78',
  color: 'white',
  borderRadius: '20px',
  textDecoration: 'none'
};

export default HomePage;
