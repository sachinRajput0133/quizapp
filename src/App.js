import React, { useContext, useEffect } from 'react';

import { QuizContext } from './components/context/QuizContext';
import Result from './components/result/Result';
import Start from './components/start/Start';

import Test from './components/test/Test';

function App() {
  const {
    gameState,

    minutes,
    setMinutes,

    setHours,
    toggleTimer,

    seconds,
    setSeconds,
  } = useContext(QuizContext);
  useEffect(() => {
    let interval;
    if (toggleTimer) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);

        if (seconds === 59) {
          setMinutes(prev => prev + 1);
          setSeconds(0);
        }
        if (minutes === 59) {
          setHours(prev => prev + 1);
          setMinutes(0);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [toggleTimer, seconds, setHours, setMinutes, setSeconds, minutes]);

  return (
    <>
      {gameState === 'start' && <Start />}
      {gameState === 'result' && <Result />}
      {gameState === 'quiz' && <Test />}
    </>
  );
}

export default App;
