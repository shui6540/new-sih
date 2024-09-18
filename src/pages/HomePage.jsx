import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import { LineChart, PieChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, Cell } from 'recharts';
import Footer from '../components/Footer'; // Import Footer component if not already imported

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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#f5f5f5', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];

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

      {/* Charts and Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {/* Line Chart */}
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="year" />
            <YAxis />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="population" stroke="#8884d8" />
          </LineChart>

          {/* Pie Chart */}
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="population"
              nameKey="year"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Add the App sections here */}
        <div>
          <HeroSection />
          <ApplySection />
          <CategoryGrid />
        </div>
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

// AboutSection component
function AboutSection() {
  return (
    <section id="about" style={sectionStyle}>
      <div style={contentStyle}>
        <h2>About the Scheme</h2>
        <p>Detailed information about the government scheme, its purpose, and goals.</p>
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

// ContactSection component
function ContactSection() {
  return (
    <section id="contact" style={sectionStyle}>
      <div style={contentStyle}>
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us.</p>
        <address>
          <p>Email: <a href="mailto:info@government.gov">info@government.gov</a></p>
          <p>Phone: +1 (234) 567-890</p>
        </address>
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
