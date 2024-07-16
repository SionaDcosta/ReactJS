'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer,LabelList } from 'recharts';

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

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
      };

    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={salesData}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="sales"
          />
           <LabelList
            dataKey="sales"
            position="insideStart"
            fill="#fff"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
        </RadialBarChart>
      </ResponsiveContainer>
    )
};

export default BarchartComponent