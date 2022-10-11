import React from 'react';
import SingleQuizeOption from './SingleQuizeOption/SingleQuizeOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastSuccess } from './Toast/Toast';




const SingleQuiz = (props) => {
    const notify = () => {
     return toast('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    };
    const quizNo = props.quizeNO
    const quizeQuestion = props.quizeData.question
    const options = props.quizeData.options
    const correctAnswer = props.quizeData.correctAnswer;
   
    
   
   
   
    const checkingAnswer = (props1) =>{
        console.log(props1);
        if(props1===correctAnswer){
          toastSuccess('')
        }
        else{
            alert('wrong answer')
        }


}

    


    return (
        <div className='w-[96%] md:w-full h-full md:h-96 bg-primary my-5 rounded-lg'>
            <div className='text-center py-3'>
            <h2 className='text-4xl'>Quiz No:{quizNo}</h2>
            </div>
            <div className='text-center text-xl'>
               {quizeQuestion ? quizeQuestion : 'No data found'}
            </div>

            <div className='w-[94%] md:w-[90%] h-auto md:h-52 bg-base-100 mx-auto flex flex-wrap justify-center items-center my-7'>
                {options.map(option=> <SingleQuizeOption option={option} checkingAnswer={checkingAnswer} ></SingleQuizeOption>)}

            </div>
           
           
        </div>
    );
};

export default SingleQuiz;