import { game } from '../index.js';

const checkAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export { game, checkAnswer };
