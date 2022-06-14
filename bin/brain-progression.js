#!/usr/bin/env node

import { startGame, getRandomProgression, checkAnswer } from '../src/games/progression.js';

startGame(
  'What number is missing in the progression?',
  getRandomProgression,
  checkAnswer,
);
