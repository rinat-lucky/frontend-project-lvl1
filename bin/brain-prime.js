#!/usr/bin/env node

import { game, getRandomNum, checkAnswer } from '../src/games/prime.js';

game(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRandomNum,
  checkAnswer,
);
