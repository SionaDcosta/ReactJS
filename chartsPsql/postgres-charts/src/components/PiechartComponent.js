'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

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
    //   console.log(salesData)
    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={salesData} dataKey="month" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={salesData} dataKey="sales" cx="50%" cy="50%" innerRadius={40} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    )
};

export default BarchartComponent