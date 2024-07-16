import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Sidebar from './components/SidebarComponent';
import BarchartComponent from './components/BarchartComponent';
import LinechartComponent from './components/LinechartComponent';
import PiechartComponent from './components/PiechartComponent';
import RadialbarChart from './components/RadialbarChart';
import AreachartComponent from './components/AreachartComponent';

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/BarChart' element={<BarchartComponent />} />
            <Route path='/LineChart' element={<LinechartComponent />} />
            <Route path='/PieChart' element={<PiechartComponent />} />
            {/* <Route path='/RadialBarChart' element={<RadialbarChart />} /> */}
            <Route path='/AreaChart' element={<AreachartComponent />} />
          </Routes>
        
      </div>
    </div>
  );
};

export default App;
