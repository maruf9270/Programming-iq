import React from 'react';

const SingleQuizeOption = (props) => {
   
    return (
        <div onClick={(event)=>props.checkingAnswer(event)} className='md:w-[40%] md:h-[30%] bg-primary mx-2 w-full h-[20%] flex justify-center items-center cursor-pointer'>
            <div className='text-center'>
                {props.option}
            </div>
           
            
        </div>
    );
};

export default SingleQuizeOption;