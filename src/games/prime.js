import getRandomInt from '../helpers.js';

// const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// const question = () => getRandomInt(1, 30);

// const checkAnswer = (number) => {
//   for (let i = 2; i < number; i += 1) {
//     if (number % i === 0) {
//       return 'no';
//     }
//   }
//   return number === 1 ? 'no' : 'yes';
// };

// export { rules, question, checkAnswer };

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const genQuestion = () => getRandomInt();
  const question = genQuestion();
  const checkAnswer = () => {
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        return 'no';
      }
    }
    return question === 1 ? 'no' : 'yes';
  };
  const answer = checkAnswer();
  return [rules, question, answer];
};
