#!/usr/bin/env node

import { startGame, getRandomNum, checkAnswer } from '../src/games/prime.js';

startGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRandomNum,
  checkAnswer,
);
