import readlineSync from 'readline-sync';
import playGame from './index.js';

export default (rules, question, answer) => {
  const input = (msg) => readlineSync.question(msg);
  const output = (msg) => console.log(msg);
  playGame(rules, question, answer, input, output);
};
