import { useState } from 'react';
import './App.css'
import Start from './Start/Start';
import Quiz from './Quiz/Quiz';

function App() {
  const [started, setStarted] = useState(false);
  const handleStartClick = () => {
    setStarted(true);
  }

  return (
    <div >
      {!started && <Start onStartClick={handleStartClick} />}
      {started && <Quiz />}
    </div>
  )
}

export default App
