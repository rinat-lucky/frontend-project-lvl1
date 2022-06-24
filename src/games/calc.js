import getRandomInt from '../helpers.js';

// const rules = 'What is the result of the expression?';

// const question = () => {
//   const num1 = getRandomInt();
//   const num2 = getRandomInt();
//   const operators = ['+', '-', '*'];
//   const operator = operators[getRandomInt(0, 2)];

//   return `${num1} ${operator} ${num2}`;
// };

// const checkAnswer = (exp) => { // функция принимает на вход случайно сгенерированное выражение
//   const expArr = exp.toString().split(' ');
//   switch (expArr[1]) { // второй элемент массива - это оператор
//     case '+':
//       return (Number(expArr[0]) + Number(expArr[2])).toString();
//     case '-':
//       return (Number(expArr[0]) - Number(expArr[2])).toString();
//     case '*':
//       return (Number(expArr[0]) * Number(expArr[2])).toString();
//     default:
//       return console.log('Произошла ошибка в вычислениях');
//   }
// };

// export { rules, question, checkAnswer };

export default () => {
  const rules = 'What is the result of the expression?';

  const genQuestion = () => {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, 2)];

    return `${num1} ${operator} ${num2}`;
  };

  const question = genQuestion();

  const checkAnswer = () => { // функция принимает на вход случайно сгенерированное выражение
    const expArr = question.toString().split(' '); // приводим выражение к строке => к массиву из трёх слов
    switch (expArr[1]) { // второй элемент массива - это оператор
      case '+':
        return (Number(expArr[0]) + Number(expArr[2])).toString();
      case '-':
        return (Number(expArr[0]) - Number(expArr[2])).toString();
      case '*':
        return (Number(expArr[0]) * Number(expArr[2])).toString();
      default:
        return console.log('Произошла ошибка в вычислениях');
    }
  };
  const answer = checkAnswer();

  return [rules, question, answer];
};
