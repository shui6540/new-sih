import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Form from './components/Form';
import PopulationChart from './components/PopulationChart';
import './i18n';
import AboutUs from './components/AboutUs';
import LoginPage from './pages/LoginPage';
import StatesUTsPage from './components/StatesUTsPage';
import CentralMinistriesPage from './components/CentralMinistriesPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/apply" element={<Form />} />
          <Route path="/population-chart" element={<PopulationChart />} />
           <Route path="/login" element={<LoginPage />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
