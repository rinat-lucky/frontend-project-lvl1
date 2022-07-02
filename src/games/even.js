const isEven = (number) => (number % 2 === 0);

const game = {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound: (getRandomInt) => {
    const number = getRandomInt();
    const answer = isEven(number) ? 'yes' : 'no';
    return [number, answer];
  },
};

export default game;
