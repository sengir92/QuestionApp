import React from 'react';
import './Start.css';

function Start({onStartClick}) {
  return (
    <div className='start-div'>
        <h1>Welcome the Our Test</h1>
        <p>There are 10 questions in our test and the answer time for each question is 30 seconds. <br />
           After answering the question or after 30 seconds are up, there is no chance to move on to a new question or return to the old question.</p>
        <button id='start' onClick={onStartClick}>Start Quiz</button>
    </div>
  )
}

export default Start