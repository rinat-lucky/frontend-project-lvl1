import readlineSync from 'readline-sync';
import { startGame } from './index.js';

export default (rules, question, answer) => {
  const inText = (msg) => readlineSync.question(msg);
  const outText = (msg) => console.log(msg);
  startGame(rules, question, answer, inText, outText);
};
