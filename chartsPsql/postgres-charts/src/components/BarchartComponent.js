'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarchartComponent=() =>{

    const [salesData, setSalesData] = useState([]);
    useEffect(() => {
        fetchSalesData();
      }, []);

      const fetchSalesData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/sales');
          setSalesData(response.data);
        } catch (error) {
          console.error('Error fetching sales data:', error);
        }
      };
      console.log(salesData)
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={salesData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="month" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    )
};

export default BarchartComponent