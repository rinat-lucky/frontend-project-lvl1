#!/usr/bin/env node

import { game, getRandomNums, checkAnswer } from '../src/games/gcd.js';
import { username } from '../src/index.js';

game(
  'Find the greatest common divisor of given numbers.',
  getRandomNums,
  checkAnswer,
  `Let's try again, ${username}!`,
);
