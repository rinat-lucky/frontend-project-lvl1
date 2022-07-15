#!/usr/bin/env node

import play from '../src/index.js';
import { input, output } from '../src/cli.js';
import game from '../src/games/gcd.js';

play(game, input, output);
