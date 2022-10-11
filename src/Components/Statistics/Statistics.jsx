import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const Loaderdata = useLoaderData()
   const data = Loaderdata.data
   console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Statistics;