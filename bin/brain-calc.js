#!/usr/bin/env node

import { startGame, getRandomExp, checkAnswer } from '../src/games/calc.js';

startGame(
  'What is the result of the expression?',
  getRandomExp,
  checkAnswer,
);
