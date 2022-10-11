import React from 'react';

const SingleQuizeOption = (props) => {
   
    return (
        <div onClick={()=>props.checkingAnswer(props.option)} className='md:w-[40%] md:h-[30%] bg-primary mx-2 w-full h-auto flex justify-center items-center cursor-pointer my-4 py-4'>
            <div className='text-center'>
                {props.option}
            </div>
           
            
        </div>
    );
};

export default SingleQuizeOption;