import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Form from './components/Form';
import PopulationChart from './components/PopulationChart';
import './i18n';
import AboutUs from './components/AboutUs';
import LoginPage from './pages/LoginPage';
import FilterPanel from './components/FilterPanel';
import StatesUTsPage from './components/StatesUTsPage';
import CentralMinistriesPage from './components/CentralMinistriesPage';
import Dashboard from './pages/Dashboard'; // Import Dashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* This is the Home route */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/states-uts" element={<StatesUTsPage />} />
          <Route path="/central-ministries" element={<CentralMinistriesPage />} />
          <Route path="/filter-panel/:ministryName" element={<FilterPanel />} />
          <Route path="/filter-panel" element={<FilterPanel />} />
          <Route path="/apply" element={<Form />} />
          <Route path="/population-chart" element={<PopulationChart />} />
          <Route path="/login" element={<LoginPage />} /> {/* This is the login route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* This is the dashboard route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
