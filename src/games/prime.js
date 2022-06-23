import getRandomInt from '../helpers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const question = () => getRandomInt(1, 30);

const checkAnswer = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return number === 1 ? 'no' : 'yes';
};

export { rules, question, checkAnswer };
