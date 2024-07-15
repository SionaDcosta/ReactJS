import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const BarChartDB = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('/get_housePrice'); // This will go to http://localhost:5000/api/house_prices due to the proxy setting
          const jsonData = response.data;
          console.log(response);
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching or parsing data:', error);
        }
      };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="number_of_bedrooms" />  // Adjust this key to match your MongoDB field name
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Price" fill="#8884d8" /> 
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartDB;
