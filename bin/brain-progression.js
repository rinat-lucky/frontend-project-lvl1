#!/usr/bin/env node

import { game, getRandomProgression, checkAnswer } from '../src/games/progression.js';

game(
  'What number is missing in the progression?',
  getRandomProgression,
  checkAnswer,
);
