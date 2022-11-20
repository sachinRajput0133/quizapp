import { Box, Button, HStack, Stack, Text, VStack } from '@chakra-ui/react';

import { FaRedoAlt } from 'react-icons/fa';
import React, { useContext } from 'react';
import './Result.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RefreshIcon from '@mui/icons-material/Refresh';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import StarIcon from '@mui/icons-material/Star';
import { FaTelegram } from 'react-icons/fa';

import { QuizContext } from '../context/QuizContext';

const Result = () => {
  const {
    seconds,
    setSeconds,

    setCurrent,

    setAnswer,
    correct,
    setCorrect,
    setGameState,
    minutes,
    setMinutes,
    hours,
    setHours,
    iqLevel,
    setIqLevel,
    setToggleTimer,
    average,
    setAverage,
  } = useContext(QuizContext);
  const resetGameHandler = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setCorrect(0);
    setAnswer(false);
    setCurrent(0);
    setToggleTimer(true);
    setGameState('quiz');
    
    setAverage('');
    setIqLevel(0);
  };

  if (correct === 0) {
    setIqLevel(40);
    setAverage('below average');
  }
  if (correct === 1) {
    setIqLevel(50);
    setAverage('below average');
  }
  if (correct === 2) {
    setIqLevel(75);
    setAverage('below average');
  }
  if (correct === 3) {
    setIqLevel(85);
    setAverage('below average');
  }
  if (correct === 4) {
    setIqLevel(90);
    setAverage(' average');
  }
  if (correct === 5) {
    setIqLevel(100);
    setAverage('above average');
  }

  return (
    <div className="resultContainer">
      <VStack width={'full'} height={'100%'}  >
        <VStack
          height="283px"
          backgroundColor={'#6b6fbc'}
          display="flex"
          w="100vw"
          alignItems={'center'}
          justifyContent="center"
          
          gap={"25px"}
        >
           <VStack className="headingContainer" mt={"30px"} gap={"20px"}>

            <p>Tests <span>.</span>Intellectual</p>
            <h1>IQ Test for kids from 7 to 16 year old</h1>
          <button
            onClick={() => resetGameHandler()}
            className="takeTestAgainbutton"
          >
            {' '}
           <RefreshIcon/>
            <Text mx={'5'}>Take the test again</Text>{' '}
          </button>
           </VStack>
        </VStack>
      </VStack>
      {/* box1 */}
      <Stack className="result__body" height={'792px'}>
        <Stack
          className="result-body-container"
          marginLeft={['1vw', '6vw', '10vw', '15vw']}
          marginRight={['1vw', '6vw', '10vw', '15vw']}
          paddingBottom={'50px'}
        >
          <Stack marginTop={'20px'} direction={['column', 'row']}>
            <VStack
            width={["95%","65%","70%","100%"]}
              align={'flex-start'}
              fontSize={'20px'}
              color={'#5e5e73'}
              gap={'10px'}
              minHeight="630px"
              lineHeight={'1.7em'}
              fontWeight="400"
              fontFamily={'Roboto'}
            >
              <Text alignSelf={['center', 'flex-start']}>
                <b>Your result:</b>{' '}
              </Text>
              <Text>
                Test time: {hours < 10 ? '0' + hours : hours} :{' '}
                {minutes < 10 ? '0' + minutes : minutes} :{' '}
                {seconds < 10 ? '0' + seconds : seconds}, average users
                00:01:51.
              </Text>
              <Text>
                <b>Your IQ is {iqLevel}</b>. This corresponds to a {average}{' '}
                level IQ. In this test you have{' '}
                <b>{correct} correct answers from 5</b>.
              </Text>
              <Text>
                <b>Do you need proxies</b>
              </Text>
              <Text>http/s and socks5 in one account</Text>
              <Text color={'#02A0EA'}>proxyelitebiz</Text>

              <Text>
                {' '}
                Please note that the first question of the test were only the
                practice questions and they do not count towards the final
                result.{' '}
              </Text>
              <Box width={"100%"} >
                <Text>
                  <b>Permanent result link:</b>
                </Text>
                <span href="/" style={{ color: '#02A0EA' }}>
                  https://en.testometrika.com/a/1Dp6t5VY7lh30bkjp%252BAjHw/
                </span>
                <Button ml={'10px'} color={'blackAlpha.400'}>
                  copy
                </Button>
              </Box>
              <VStack alignItems={'flex-start'}>
                <Text>Share result:</Text>
                <HStack className="shareResultIcons">
                  <IoLogoWhatsapp />
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                  {/* <PendingOutlinedIcon/> */}
                  <span>...</span>
                </HStack>
              </VStack>
            </VStack>
            {/* Box2 */}
            <Box color={'#5e5e73'}>
              <VStack
                marginLeft={['0', '2px', '30px', '10px', '95px']}
                height="265px"
                width={["40%","50px","100px",'260px']}
                // border={'1px solid red'}
                alignItems={'flex-start'}
              >
                <VStack
                  alignItems={'flex-start'}
                  fontSize="20px"
                  color={'#5D5C73'}
                >
                  <VStack alignItems={'flex-start'} className="starIconContainer" >
                    <HStack >
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarBorderIcon />
                    </HStack>
                    <Text  fontSize={"30px"} >
                      4.3
                    </Text>
                  </VStack>
                  <Text>
                    <b>Our social networks</b>
                  </Text>
                  <HStack
                    alignItems={'flex-start'}
                    justifyContent="flex-start"
                    className="socialMedia"
                  >
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaTelegram />
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Result;
