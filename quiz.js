const readLineSync = require('readline-sync');
const chalk = require('chalk');
const boxen = require('boxen');


var score = 0;
var index = 0;
function quiz(questions) {
  questions.forEach((question, index) => {
    index  = index;
    displayQuestion(index+1, question.question, question.answer);
  });

  return score;
}

function displayQuestion(index, question, answer) {
  var userAns = "";
  while(userAns !== 'a' && userAns!== 'b' && userAns!== "c" && userAns!== "exit") {
    

    const ques = chalk.bold.black(`${index}. ${question}`);

    const quesBox = {
      padding: 1,
      margin: {left:0, top:1, right:0, bottom:1},
      borderColor: '#fff',
      backgroundColor: '#fff',
    }

    userAns = (readLineSync.question(boxen(ques, quesBox))).toLowerCase();

    if(userAns !== 'a' && userAns!== 'b' && userAns!== "c" && userAns!== "exit") {
      console.log('Invalid Input. Please attempt the question again.');
    }
    
  }
  checkAnswer(userAns, answer);
}

function checkAnswer(userAns, answer) {
  const wrongAnsBox = {
      padding: 1,
      margin: {bottom: 1},
      borderColor: '#FF0000',
      backgroundColor: '#FFE4B5',
  }

  const corAnsBox = {
      padding: 1,
      margin: {bottom: 1},
      borderColor: 'green',
      backgroundColor: '#b3ffb3'
  }

  if(userAns === "exit") process.exit(0);
  if(userAns === answer) {
    console.log(`You answered: ${userAns}`);
    console.log(boxen(chalk.bold.black('Correct Answer'),corAnsBox));
    score++;
  }
  else if(userAns !== answer) {
    console.log(`You answered: ${userAns}`);
    console.log(boxen(chalk.bold.black(`Wrong Answer.\nThe correct answer is: ${answer}`), wrongAnsBox));
  }

}

module.exports = {
  score,
  index,
  quiz
}