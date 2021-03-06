import getResult from '../index.js';
import generateRandom from '../random.js';

const questionOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const numberMax = (num2 > num1) ? num2 : num1;
  const numsForAnalis = [];
  for (let i = 0; i <= numberMax; i += 1) {
    numsForAnalis.push(i);
  }

  let answer = 0;
  for (let i = 1; i < numsForAnalis.length; i += 1) {
    const currentNum = numsForAnalis[i];
    if (num1 % currentNum === 0 && num2 % currentNum === 0) {
      if (currentNum >= answer) {
        answer = currentNum;
      }
    }
  }
  return answer;
};

const generateData = () => {
  const randNum1 = generateRandom();
  const randNum2 = generateRandom();
  const question = `${randNum1} ${randNum2}`;
  const rightAnswer = getGcd(randNum1, randNum2);
  return [question, String(rightAnswer)];
};

const generateResultGame = () => getResult(questionOfGame, generateData);
export default generateResultGame;
