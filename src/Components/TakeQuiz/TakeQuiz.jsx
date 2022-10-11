import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TakeQuiz = () => {
    const quizes = useLoaderData()
    const lllll = quizes.data.questions;
  
    return (
        <div>
           the length is {lllll.length}
        </div>
    );
};

export default TakeQuiz;