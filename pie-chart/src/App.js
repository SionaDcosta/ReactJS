// src/App.js
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SimplePieChart from './components/SimplePieChart';
import AdvancedPieChart from './components/AdvancedPieChart';
import EnhancedPieChart from './components/EnhancedPieChart';


const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Chart Viewer</h1>
          <nav>
            {/* <Link to="/">Home</Link> */}
            <select onChange={(e) => window.location.href = e.target.value}>
              <option value="">Select a chart</option>
              <option value="/BarChartExcel">BarChartExcel</option>
              
            </select>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <div>
              <h2>SimplePieChart</h2>
              <SimplePieChart />

              <h2>AdvancedPieChart</h2>
              <AdvancedPieChart />

              <h2>EnhancedPieChart</h2>
              <EnhancedPieChart />


              
            </div>
          } />
          {/* <Route path="/BarChartExcel" element={<BarChartExcel />} /> */}
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
