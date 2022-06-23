import getRandomInt from '../helpers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const question = () => getRandomInt(1, 30);

const checkAnswer = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 2) {
      return 'no';
    }
  }
  return 'yes';
};

export { rules, question, checkAnswer };
