import React from 'react';
import SingleQuizeOption from './SingleQuizeOption/SingleQuizeOption';
import 'react-toastify/dist/ReactToastify.css';
import { toastSuccess, toastError, toastInformation } from './Toast/Toast';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';






const SingleQuiz = (props) => {
  
    const quizNo = props.quizeNO
    const quizeQuestion = props.quizeData.question
    
    const endingPoint = quizeQuestion.length -4
     const quizeQuestionSubstringed = quizeQuestion.substring(3, endingPoint)

    const options = props.quizeData.options
    const correctAnswer = props.quizeData.correctAnswer;
   
    let arrkey = 0;
   
    
   
   
   
    const checkingAnswer = (props1) =>{
        
        if(props1===correctAnswer){
          toastSuccess('Correct Answer')
        }
        else{
            toastError('Wrong Answer')
        }
        }

        const rightAnswerToast = () =>{
            toastInformation(correctAnswer)
        }
     


    return (
        <div className='w-[96%] md:w-full h-full md:h-full bg-primary my-10 rounded-lg relative'>
            <div className='text-center py-3'>
            <h2 className='text-4xl'>Quiz No:{quizNo}</h2>
            </div>
            <div className='text-center text-xl'>
               {quizeQuestionSubstringed ? quizeQuestionSubstringed : 'No data found'}
            </div>

            <div className='w-[94%] md:w-[90%] h-auto md:h-52 bg-base-100 mx-auto flex flex-wrap justify-center items-center my-7'>
                {options.map(option=> {

                    arrkey++
                    return <SingleQuizeOption option={option} checkingAnswer={checkingAnswer} key={arrkey}></SingleQuizeOption>

                })}

            </div>

            <div className='absolute top-5 right-5 cursor-pointer' onClick={rightAnswerToast} >
              <FontAwesomeIcon icon={faEye} />

            </div>
           
           
        </div>
    );
};

export default SingleQuiz;