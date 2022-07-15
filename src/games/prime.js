const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if ((number % i === 0) || (number < 2)) {
      return false;
    }
  }
  return true;
};

const game = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound: (getRandomInt) => {
    const question = getRandomInt();
    const answer = isPrime(question) ? 'yes' : 'no';
    return { question, answer };
  },
};

export default game;
