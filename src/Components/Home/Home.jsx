import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Body from './Body/Body';

import { Header } from './Hero/Hero';
export const AllQuizContext = createContext([]);


// Loading All quiz data from api


const Home = () => {
    const allQuizData = useLoaderData()
   
    return (
        <AllQuizContext.Provider value={allQuizData}>
            <Header></Header>
            <Body></Body>
        </AllQuizContext.Provider>
    );
};

export default Home;