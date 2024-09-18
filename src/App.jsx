// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SchemeListPage from './pages/SchemeListPage';
import Form from './components/Form';

import CategoryGrid from './components/CategoryGrid';  // Import CategoryGrid

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home Page route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Schemes List Page route */}
          <Route path="/schemes" element={<SchemeListPage />} />
          <Route path="/apply" element={<Form />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
