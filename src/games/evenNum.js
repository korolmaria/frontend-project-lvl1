import getResult from '../index.js';
import generateRandom from '../funcs.js';

const questionOfGame = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateResult = () => {
  const randNumber = generateRandom();
  const question = String(randNumber);
  const rightAnswer = isEven(randNumber) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const generateResultGame = () => getResult(questionOfGame, generateResult);
export default generateResultGame;
