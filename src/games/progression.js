import { game, getRandomInt } from '../index.js';

let missedNum;

const getRandomProgression = () => {
  const stepOfProgression = getRandomInt(1, 5);
  const firstNum = getRandomInt(1, 15);
  const arr = [firstNum];
  for (let i = 1; i < 10; i += 1) {
    const nextNum = firstNum + (stepOfProgression * i);
    arr.push(nextNum);
  }
  const missedNumIndex = getRandomInt(0, 10);
  missedNum = arr[missedNumIndex];
  arr[missedNumIndex] = '..';
  return arr.join(' ');
};

const checkAnswer = () => missedNum.toString();

export { game, getRandomProgression, checkAnswer };
