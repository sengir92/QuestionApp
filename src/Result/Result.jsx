import React from 'react';
import './Result.css';

const Result = ({ score, totalQuestions, correctAnswer, wrongAnswer }) => {
  return (
    <div className="result-container">
      <div className='container-box'>
        <h2>Quiz Finished!</h2>
        <p>Your Score: {score} / {totalQuestions}</p>
        <div className='result-answers'>
          <div className='correctanswer'>
          <h3><u>Correct Answer</u></h3>
          <ul>
            {correctAnswer.map((answer,index) => (
              <li className='trueanswer' key={index}>{answer}</li>
            ))}
          </ul>
          </div>
          <div className='wronganswer'>
          <h3><u>Wrong Answer</u></h3>
          <ul>
            {wrongAnswer.map((answer,index) => (
              <li className='falseanswer' key={index}>{answer}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;