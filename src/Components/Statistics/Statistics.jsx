import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const Loaderdata = useLoaderData()
    const data = Loaderdata.data

    
  
    return (
        <div className=' h-[500px] flex justify-center items-center flex-col bg-white w-[92%] mx-auto rounded-md py-7'>
            <h2 className='text-center py-5 text-2xl w-full text-black font-bold ' >Total Quiz qustion added in this month</h2>
            <ResponsiveContainer>
                 <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                
                
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;