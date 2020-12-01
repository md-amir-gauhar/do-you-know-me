const readlineSync = require('readline-sync');
const chalk = require('chalk');

var user = readlineSync.question('What is your name?');
var score = 0;

console.log(`Welcome! ${user} to ${chalk.bgBlue('DO YOU KNOW Amir?')}`);

var questionBank = [
  {
    question: 'Where do I live?',
    answer: 'Patna',
  },
  {
    question: 'Which month is my birthday month?',
    answer: 'April',
  },
  {
    question: 'Which is my favourite programming language?',
    answer: 'JavaScript',
  },
  {
    question: 'Who is my favourite superhero?',
    answer: 'Batman',
  },
  {
    question: 'Which is my favourite sports?',
    answer: 'Kabaddi',
  },
];

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log(`${chalk.green('Yay! Correct Answer')}`);
    score += 1;
  } else {
    console.log(`${chalk.red('Oops! Incorrect Answer')}`);
  }
  console.log(`Your score is: ${score}`);
}

for (var i = 0; i < questionBank.length; i++) {
  quiz(questionBank[i].question, questionBank[i].answer);
}

console.log(`Your total score is: ${score}`);
