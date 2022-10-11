import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = (props) => {
    const quizData = props.quizData
    const {logo,name,total,id} = quizData;

    return (
        <div className="card bg-primary shadow-xl h-96 w-52 my-4 text-white">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <Link to={`takequiz/${id}`}><button className='btn text-black bg-purple-400 hover:bg-purple-700 px-10 whitespace-nowrap'>Take Quiz</button></Link>
            <div className="card-actions justify-start">
            <div className="badge badge-outline">Total Quiz: {total}</div> 
            
            </div>
        </div>
        </div>
    );
};

export default QuizCard;