import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SingleQuiz from './SingleQuiz/SingleQuiz';

const TakeQuiz = () => {
    const quizes = useLoaderData()
    const quizeDatas = quizes.data.questions;
    const quizName = quizes.data.name;
    console.log();
    let quizeNO= 0;
  
    return (
        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ] my-24 flex justify-center items-center flex-col text-white'>
          <h3 className='w-[full] p-5 bg-primary text-3xl text-white rounded-md'>Quiz Topic: <span className='font-bold'>{quizName}</span></h3>
          {quizeDatas.map(quizeData=>{
            quizeNO++
            return <SingleQuiz key={quizeData.id} quizeData={quizeData} quizeNO={quizeNO}></SingleQuiz>
          })}
           <ToastContainer></ToastContainer>
           
           
        </div>
    );
};

export default TakeQuiz;