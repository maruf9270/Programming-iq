import React from 'react';
import SingleQuizeOption from './SingleQuizeOption/SingleQuizeOption';




const SingleQuiz = (props) => {
    const quizNo = props.quizeNO
    const quizeQuestion = props.quizeData.question
    const options = props.quizeData.options
    const correctAnswer = props.quizeData.correctAnswer;
    const correctAnswerToLowerCased = correctAnswer.toLowerCase()
    
    
   
   
   
    const checkingAnswer = (props) =>{
        console.log( 'Correct', correctAnswer);
    const inputtedAnswer = props.target.innerText;
    console.log('input answer' ,inputtedAnswer);
    const inputtedAnswetLowerCased = inputtedAnswer.toLowerCase()
    if(correctAnswer== inputtedAnswer){
        alert('Right answer')
    }
    else{
        alert('wrong answer')
    }
    console.log(props.target.innerText);

}

    


    return (
        <div className='w-full h-96 bg-primary my-5 rounded-lg'>
            <div className='text-center py-3'>
            <h2 className='text-4xl'>Quiz No:{quizNo}</h2>
            </div>
            <div className='text-center text-xl'>
               {quizeQuestion ? quizeQuestion : 'No data found'}
            </div>

            <div className='md:w-[90%] h-52 bg-base-100 mx-auto flex flex-wrap justify-center items-center'>
                {options.map(option=> <SingleQuizeOption option={option} checkingAnswer={checkingAnswer} ></SingleQuizeOption>)}

            </div>
           
           
        </div>
    );
};

export default SingleQuiz;