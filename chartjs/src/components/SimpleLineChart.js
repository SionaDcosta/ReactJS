// src/SimpleLineChart.js
import React from 'react';
import { LineChart, Line, YAxis, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];

const SimpleLineChart = () => (
  <div style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer>
      <LineChart data={data}>
        {/* 3 units of dash followed by 3 units of gap */}
        <CartesianGrid strokeDasharray="3 3" /> 
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SimpleLineChart;
