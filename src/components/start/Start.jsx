import {  Stack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import './Start.css';
import avatar from '../images/avatar.svg';
const Start = () => {
  const { setGameState, setToggleTimer } = useContext(QuizContext);
  const quizStartHandler = () => {
    setGameState('quiz');
    setToggleTimer(true);
  };

  return (
    <Stack
      backgroundColor={'gray.100'}
      className="startButtonContainer"
      width={'100vw'}
      height="100vh"
      alignItems={'center'}
      justifyContent="center"
    >
      <div className="startButton" onClick={() => quizStartHandler()}>
        {' '}
        <img style={{ width: '80px' }} src={avatar} alt="" />{' '}
        <div>
        <p>Are you smarter than 75% of all the people in the world?</p>{' '}
        <p><b>Click to start the quiz!</b></p>{' '}

        </div>
      </div>
    </Stack>
  );
};

export default Start;
