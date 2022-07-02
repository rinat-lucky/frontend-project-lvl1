const isEven = (number) => (number % 2 === 0);

const game = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound: (getRandomInt) => {
    const question = getRandomInt();
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  },
};

export default game;
