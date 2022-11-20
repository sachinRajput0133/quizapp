import {
  Box,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useContext} from 'react';
import './Test.css';

import { FiArrowLeft } from 'react-icons/fi';
import { QuizArray } from '../../Assets/Quiz';
import { QuizContext} from '../context/QuizContext';
const Test = () => {
  const {
   
    answer,
    setAnswer,
    setToggleTimer,
    current,
    correct,
    setCorrect,
    setCurrent,
    setGameState
  } = useContext(QuizContext);
 

  const submitAnswerHandler = (id) => {
    const answerSelected = QuizArray[current].options.find(
      item => item.id === id
    );
   

    if (QuizArray[current].correct === answerSelected.op ) {
      setCorrect(prev => prev + 1);
      setAnswer(true)
    }else{
       setAnswer(false)
    }
    

     if(current+1 === QuizArray.length ){
      setGameState("result")
      setToggleTimer(false)
      
     }else{
      
      setCurrent(current+1)
     }
   
  };


const  backButtonHandler=()=>{
  setCurrent(current - 1)
  if(answer){
  setCorrect(correct-1)
    
  }
}
  return (
    <div className="container">
      <div className="noOfQuestions">
        <span style={{color:"rgba(0, 0, 0, 0.3)"}}>{current +1}</span>/5 
      </div>
      <VStack
        spacing={'20px'}
        // mt={'20px'}
        minH={'476px'}
        // height="100%"
        // border="1px solid red"
        w={'900px'}
      >
        <Image maxH="120px" maxW={'100%'} src={QuizArray[current].image} />
        <Box minHeight={'63px'} display="flex" justifyContent={'center'}>
          <Text
            fontSize={'24px'}
            color={'white'}
            fontWeight="500"
            fontFamily={'Roboto'}
          >
            {QuizArray[current].question}
           
          </Text>
        </Box>

        <Stack
          className="testOptions"
          width={'100%'}
          direction={['column', 'row']}
          justifyContent={['center', 'center']}
          flexWrap={'wrap'}
          gap={'20px'}
        >
          {QuizArray[current].options?.map((item) => (
            <Image
              key={item.id}
              onClick={() => submitAnswerHandler(item.id, current)}
              height={'120px'}
              src={item.op}
            />
          ))}
          
        </Stack>

        <Box
          display={'flex'}
          alignItems="flex-start"
          justifyContent={'flex-start'}
          width="100%"
          height={'100%'}
          // border={'1px solid red'}
        >
          {current === 0 ? null : (<>
          
            <button
              onClick={() =>backButtonHandler() }
              width={'20'}
              // backgroundColor="#595c9c"
              // colorScheme={"blue"}
              className="button"
              
            >
              <FiArrowLeft />
            </button>
         
          
          </>
          )}
           
        </Box>
      </VStack>
    </div>
  );
};

export default Test;
