#!/usr/bin/env node

import startGame from '../src/index.js'
import getQuestionAndAnswer from '../src/games/gcd.js'

const gameRules = 'Find the greatest common divisor of given numbers.'

startGame(gameRules, getQuestionAndAnswer)
