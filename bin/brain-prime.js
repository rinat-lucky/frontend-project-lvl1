#!/usr/bin/env node

import { game, getRandomNum, checkAnswer } from '../src/games/prime.js';
import { username } from '../src/index.js';

game(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRandomNum,
  checkAnswer,
  `Let's try again, ${username}!`,
);
