import getResult from '../index.js';
import generateRandom from '../funcs.js';

const questionOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  const numsForAnalis = [];
  let countDivisors = 0;
  for (let i = 1; i <= number; i += 1) {
    numsForAnalis.push(i);
  }
  for (let i = 0; i < numsForAnalis.length; i += 1) {
    const currentNum = numsForAnalis[i];
    if (number % currentNum === 0) {
      countDivisors += 1;
    }
  }
  const answer = (countDivisors === 2) ? 'yes' : 'no';
  return answer;
};

const generateResult = () => {
  const randNumber = generateRandom();
  const question = String(randNumber);
  const rightAnswer = isPrime(randNumber);
  return [question, rightAnswer];
};

const generateResultGame = () => getResult(questionOfGame, generateResult);
export default generateResultGame;
