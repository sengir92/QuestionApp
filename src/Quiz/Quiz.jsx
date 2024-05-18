import React, { useEffect, useState } from 'react';
import questions from './questions';
import Result from '../Result/Result';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [wrongAnswer,setWrongAnswer] = useState([]);

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
      setCorrectAnswer(prev => [...prev, selectedAnswer])
    } else {
      setWrongAnswer(prev => [...prev, selectedAnswer])
    }  
    setCurrentQuestion(prev => prev +1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  useEffect(()=>{
    const timer = setTimeout(() => {
      setCurrentQuestion(prev => prev +1);
     
    }, 30000)
    return () => clearTimeout(timer);
  }, [currentQuestion])

  useEffect (() => {
    const timer = setTimeout(() => {
      setShowOptions(true);
    }, 10000)
    return () => setShowOptions(false);
  },[currentQuestion])

  return (
    <div className="quiz-container">
      {currentQuestion >= questions.length ? (
           <Result
            score={score} 
            totalQuestions={questions.length}
            correctAnswer={correctAnswer}
            wrongAnswer={wrongAnswer}
             />
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].question}</div>
          <div className="answer-options">
            {showOptions && questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
          {questions[currentQuestion].media && (
        <div className="media-section">
          <img src={questions[currentQuestion].media} alt="Question media" />
        </div>
      )}
        </div>
      )}
     
    </div>
  );
};

export default Quiz;