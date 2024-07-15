import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { readCSV } from '../utils/readCSV';
import axios from 'axios';

const preprocessData = (data) => {
  // Initialize an object to store grouped data
  const groupedData = {};

  // Group data by number of bedrooms
  data.forEach((entry) => {
    const bedrooms = entry['number of bedrooms'];
    if (!groupedData[bedrooms]) {
      groupedData[bedrooms] = [];
    }
    groupedData[bedrooms].push(entry);
  });

  // Convert groupedData object into an array
  const processedData = Object.keys(groupedData).map((bedrooms) => ({
    'number of bedrooms': bedrooms,
    Price: groupedData[bedrooms].reduce((total, entry) => total + parseFloat(entry.Price), 0) / groupedData[bedrooms].length,
  }));

  return processedData;
};

const BarChartExcel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/House_Price_India_Clean.csv', { responseType: 'blob' });
        const jsonData = await readCSV(response.data);
        const processedData = preprocessData(jsonData);
        setData(processedData);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);
console.log(data)
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="number of bedrooms" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartExcel;
