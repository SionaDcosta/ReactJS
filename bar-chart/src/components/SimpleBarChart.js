// src/BarChartComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'January', productA: 4000, productB: 2400 },
  { month: 'February', productA: 3000, productB: 1398 },
  { month: 'March', productA: 2000, productB: 9800 },
  { month: 'April', productA: 2780, productB: 3908 },
  { month: 'May', productA: 1890, productB: 4800 },
  { month: 'June', productA: 2390, productB: 3800 },
  { month: 'July', productA: 3490, productB: 4300 },
];

const SimpleBarChart = () => (
  <div style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer>
      <BarChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="productA" fill="#8884d8" /> */}
        <Bar dataKey="productB" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SimpleBarChart;
