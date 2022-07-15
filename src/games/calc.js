const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator!');
  }
};

const game = {
  description: 'What is the result of the expression?',
  generateRound: (getRandomInt) => {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operators = ['+', '-', '*'];
    const lastOperatorIndex = operators.length - 1;
    const operator = operators[getRandomInt(0, lastOperatorIndex)];

    const question = `${num1} ${operator} ${num2}`;
    const answer = calc(Number(num1), Number(num2), operator).toString();

    return { question, answer };
  },
};

export default game;
