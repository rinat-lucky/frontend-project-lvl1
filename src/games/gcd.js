const getGreatestCommonDivisor = (num1, num2) => {
  let greatestCommonDivisor = 1;
  for (let i = 2; i <= num1; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      greatestCommonDivisor = i;
    }
  }
  return greatestCommonDivisor;
};

const game = {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound: (getRandomInt) => {
    const num1 = getRandomInt(3, 20);
    const num2 = getRandomInt(15, 25);
    const question = `${num1} ${num2}`;
    const answer = getGreatestCommonDivisor(Number(num1), Number(num2)).toString();
    return { question, answer };
  },
};

export default game;
