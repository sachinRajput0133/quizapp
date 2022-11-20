import op1 from '../components/images/op1.svg';
import op2 from '../components/images/op2.svg';
import op3 from '../components/images/op3.svg';
import op4 from '../components/images/op4.svg';
import op5 from '../components/images/op5.svg';
import op6 from '../components/images/op6.svg';
import q1 from '../components/images/q1.svg';
import q2 from '../components/images/q2.svg';
import q2op1 from '../components/images/q2op1.svg';
import q2op2 from '../components/images/q2op2.svg';
import q2op3 from '../components/images/q2op3.svg';
import q2op4 from '../components/images/q2op4.svg';
import q2op5 from '../components/images/q2op5.svg';
import q2op6 from '../components/images/q2op6.svg';
import q3 from '../components/images/q3.svg';
import q3op1 from '../components/images/q3op1.svg';
import q3op2 from '../components/images/q3op2.svg';
import q3op3 from '../components/images/q3op3.svg';
import q3op4 from '../components/images/q3op4.svg';
import q3op5 from '../components/images/q3op5.svg';
import q3op6 from '../components/images/q3op6.svg';
import q4 from '../components/images/q4.svg';
import q4op1 from '../components/images/q4op1.svg';
import q4op2 from '../components/images/q4op2.svg';
import q4op3 from '../components/images/q4op3.svg';
import q4op4 from '../components/images/q4op4.svg';
import q4op5 from '../components/images/q4op5.svg';
import q4op6 from '../components/images/q4op6.svg';
import q5 from '../components/images/q5.svg';
import q5op1 from '../components/images/q5op1.svg';
import q5op2 from '../components/images/q5op2.svg';
import q5op3 from '../components/images/q5op3.svg';
import q5op4 from '../components/images/q5op4.svg';
import q5op5 from '../components/images/q5op5.svg';
import q5op6 from '../components/images/q5op6.svg';

 const question1 =
    'Q1. Which shape should be in the rightmost cell with a question mark?';
  const question2 = 'Q2. Which shape should be in the rightmost cell with a question mark?';
  const question3 = 'Q3. Which shape should be in the rightmost cell with a question mark?';
  const question4 = 'Q4. Which shape should be in the rightmost cell with a question mark?';
  const question5 = 'Q5. Which shape should be in the rightmost cell with a question mark?';

  export const QuizArray = [

    {
      image: q1,
      question: question1,
      options: [
        {
          id: 1,
          op: op1,
        },
        {
          id: 2,
          op: op2,
        },
        {
          id: 3,
          op: op3,
        },
        {
          id: 4,
          op: op4,
        },
        {
          id: 5,
          op: op5,
        },
        {
          id: 6,
          op: op6,
        },
      ],
      correct: op2,
    },
    {
      image: q2,
      question: question2,
      options: [
        {
          id: 1,
          op: q2op1,
        },
        {
          id: 2,
          op: q2op2,
        },
        {
          id: 3,
          op: q2op3,
        },
        {
          id: 4,
          op: q2op4,
        },
        {
          id: 5,
          op: q2op5,
        },
        {
          id: 6,
          op: q2op6,
        },
      ],
      correct: q2op5,
    },
    {
      image: q3,
      question: question3,
      options: [
        {
          id: 1,
          op: q3op1,
        },
        {
          id: 2,
          op: q3op2,
        },
        {
          id: 3,
          op: q3op3,
        },
        {
          id: 4,
          op: q3op4,
        },
        {
          id: 5,
          op: q3op5,
        },
        {
          id: 6,
          op: q3op6,
        },
      ],
      correct: q3op6,
    },
    {
      image: q4,
      question: question4,
      options: [
        {
          id: 1,
          op: q4op1,
        },
        {
          id: 2,
          op: q4op2,
        },
        {
          id: 3,
          op: q4op3,
        },
        {
          id: 4,
          op: q4op4,
        },
        {
          id: 5,
          op: q4op5,
        },
        {
          id: 6,
          op: q4op6,
        },
      ],
      correct: q4op4,
    },
    {
      image: q5,
      question: question5,
      options: [
        {
          id: 1,
          op: q5op1,
        },
        {
          id: 2,
          op: q5op2,
        },
        {
          id: 3,
          op: q5op3,
        },
        {
          id: 4,
          op: q5op4,
        },
        {
          id: 5,
          op: q5op5,
        },
        {
          id: 6,
          op: q5op6,
        },
      ],
      correct: q5op5,
    },
  ];