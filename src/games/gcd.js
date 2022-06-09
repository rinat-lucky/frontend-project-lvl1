import { game, getRandomInt } from '../index.js';

const getRandomNums = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt(15, 25);

  return `${num1} ${num2}`;
};

const checkAnswer = (exp) => {
  const expArr = exp.toString().split(' ');
  const num1 = Number(expArr[0]);
  const num2 = Number(expArr[1]);
  let gcd = 1;
  for (let i = 2; i <= num1; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      gcd = i;
    }
  }
  return gcd.toString();
};

export { game, getRandomNums, checkAnswer };
