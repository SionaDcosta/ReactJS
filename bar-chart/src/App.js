// src/App.js
import React from 'react';
import './App.css';
import SimpleBarChart from './components/SimpleBarChart';
import BarChartWithBarProperties from './components/BarChartWithBarProperties';
import BarChartWithAxisProperties from './components/BarChartWithAxisProperties';
import BarChartExcel from './components/BarChartExcel';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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
              <h2>SimpleBarChart</h2>
              <SimpleBarChart />

              <h2>BarChartWithBarProperties</h2>
              <BarChartWithBarProperties />

              <h2>BarChartWithAxisProperties</h2>
              <BarChartWithAxisProperties />
            </div>
          } />
          <Route path="/BarChartExcel" element={<BarChartExcel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
