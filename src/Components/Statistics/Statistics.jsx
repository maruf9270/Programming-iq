import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const Loaderdata = useLoaderData()
    const data = Loaderdata.data

    
   console.log(data);
    return (
        <div className='md:w-full h-[500px] flex justify-center items-center flex-col'>
            <h2 className='text-center py-5 text-2xl w-full' >Total Quiz qustion added in this month</h2>
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