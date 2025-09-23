#!/usr/bin/env node

import startGame from '../src/index.js'
import getQuestionAndAnswer from '../src/games/calculate.js'

const gameRules = 'What is the result of the expression?'

startGame(gameRules, getQuestionAndAnswer)
