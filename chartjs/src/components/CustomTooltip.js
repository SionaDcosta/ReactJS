// src/CustomTooltip.js
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

//IF active is true, payload exists, and payload.length is greater than 0
//The charting library, such as recharts, automatically passes the label prop to the CustomTooltip component when the user interacts with the chart
// /This label is part of the payload array that is passed to the CustomTooltip component along with other data (value, name, etc.).
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

const getIntroOfPage = (label) => {
  switch (label) {
    case 'Page A':
      return "Page A is about men's clothing";
    case 'Page B':
      return 'Page B is about women\'s dress';
    case 'Page C':
      return 'Page C is about children\'s shoes';
    case 'Page D':
      return 'Page D is about home appliances';
    case 'Page E':
      return 'Page E is about food and beverages';
    case 'Page F':
      return 'Page F is about baby products';
    case 'Page G':
      return 'Page G is about electronics';
    default:
      return '';
  }
};

const CustomTooltipChart = () => (
  <div style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CustomTooltipChart;
