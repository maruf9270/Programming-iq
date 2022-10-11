import React, { useContext } from 'react';
import { AllQuizContext } from '../Home';
import QuizCard from './QuizCard/QuizCard';

const Body = () => {
    const allQuizDataOject = useContext(AllQuizContext);
    const allQuizData = allQuizDataOject.data;
    
   
    return (
        <div className='flex flex-wrap justify-around my-7'>
            {allQuizData.map(quizData => <QuizCard key={quizData.id} quizData={quizData}></QuizCard>)}
        </div>
    );
};

export default Body;