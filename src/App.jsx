// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Form from './components/Form';
import PopulationChart from './components/PopulationChart';
import './i18n';
import CategoryGrid from './components/CategoryGrid';  // Import CategoryGrid
import AboutUs from './components/AboutUs';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home Page route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/apply" element={<Form />} />
          <Route path="/population-chart" element={<PopulationChart />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
