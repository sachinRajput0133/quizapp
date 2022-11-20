import { createContext, useState } from 'react';


export const QuizContext = createContext();

export const QuizHolder = ({ children }) => {
  const [start, setStart] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState('');
  const [correct, setCorrect] = useState(0)
  const [gameState, setGameState] = useState("start")
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [iqLevel, setIqLevel] = useState(0)
  const [average, setAverage] = useState("")
  return (
    <QuizContext.Provider
      value={{
        start,
        setStart,
        seconds, setSeconds,
        current,
        setCurrent,
        answer,
        setAnswer,
        correct, setCorrect,
        gameState, setGameState,minutes, setMinutes,hours, setHours,toggleTimer, iqLevel, setIqLevel,setToggleTimer,average, setAverage
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
