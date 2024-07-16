// src/PieChartComponent.js
import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Data for the pie chart
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// Colors for each segment of the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Functional component for the pie chart
const SimplePieChart = () => (
  <div style={{ width: '100%', height: 400 }}>
    {/* Responsive container for the pie chart */}
    <ResponsiveContainer>
      {/* PieChart component from recharts */}
      <PieChart>
        {/* Pie component representing each segment */}
        <Pie
          data={data}         // Data array for the pie chart
          dataKey="value"     // Key in each data object representing the value
          nameKey="name"      // Key in each data object representing the name
          cx="50%"            // X-coordinate of the center of the pie chart
          cy="50%"            // Y-coordinate of the center of the pie chart
          outerRadius={100}   // Outer radius of the pie chart
        >
          {/* Rendering each segment with different colors */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* Tooltip component for displaying data on hover */}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default SimplePieChart;
