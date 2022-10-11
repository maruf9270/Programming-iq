import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = (props) => {
    const quizData = props.quizData
    console.log(quizData);
    const {logo,name,total,id} = quizData;

    return (
        <div className="card bg-primary shadow-xl h-96 w-52">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <Link to={`takequiz/${id}`}><button className='btn bg-base-100'>Take Quiz</button></Link>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">{total}</div> 
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
        </div>
    );
};

export default QuizCard;