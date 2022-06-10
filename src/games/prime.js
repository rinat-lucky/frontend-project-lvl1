import { game, getRandomInt } from '../index.js';

const getRandomNum = () => getRandomInt(1, 30);

const checkAnswer = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 2) {
      return 'no';
    }
  }
  return 'yes';
};

export { game, getRandomNum, checkAnswer };
