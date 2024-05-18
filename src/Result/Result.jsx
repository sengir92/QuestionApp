import React from 'react';
import './Result.css';

const Result = ({ score, totalQuestions, correctAnswer, wrongAnswer }) => {
  return (
    <div className="result-container">
      <h2>Quiz Finished!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <div className='result-answers'>
        <h3>Correct Answer :</h3>
        <ul>
          {correctAnswer.map((answer,index) => (
            <li className='trueanswer' key={index}>{answer}</li>
          ))}
        </ul>
        <h3>Wrong Answer :</h3>
        <ul>
          {wrongAnswer.map((answer,index) => (
            <li className='falseanswer' key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Result;