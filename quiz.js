const readLineSync = require('readline-sync');
const chalk = require('chalk');
const boxen = require('boxen');


var score = 0;
var i = 0;
var numLevels = 0;
var numQuesAttempted = 0;

function quiz(questions) {
  
  for(; i<questions.length; i++) {
    var question = questions[i];
    var flag = displayQuestion(i+1, question.question, question.answer);
    if(!flag) {
      return {
        score,
        numQuesAttempted: i,
        numLevels,
        finishedAbruptly: true
      };
    }
  }
    
  return {score, numQuesAttempted, numLevels, finishedAbruptly: false};
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

    
    if(userAns === "exit") {
      return false;
    }
  
    else if(userAns !== 'a' && userAns!== 'b' && userAns!== "c") {
      console.log('Invalid Input. Please attempt the question again.');
    }
  }

  checkAnswer(userAns, answer);
  return true;
}

function checkAnswer(userAns, answer) {
  numQuesAttempted++;
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

  const levelBox = {
    padding: 1,
    margin: 2,
    borderColor: 'cyan',
    backgroundColor: 'yellow'
  }


  if(userAns === answer) {
    console.log(`You answered: ${userAns}`);
    console.log(boxen(chalk.bold.black('Correct Answer'),corAnsBox));
    score++;
    if(score === 2) {
      numLevels = 1;
      console.log(boxen(chalk.bold.blueBright('Congratulations, You have passed level 0!\nProceding to level 1...')));
    }
    else if(score === 5) {
      numLevels = 2;
      console.log(boxen(chalk.bold.blueBright('Congratulations, You have passed level 1!\nProceding to level 2...')));
    }
    else if(score === 8) {
      numLevels = 3;
      console.log(boxen(chalk.bold.blueBright('Congratulations, You have passed level 2!\nProceding to final level 3...')));
    }
  }

  else if(userAns !== answer) {
    console.log(`You answered: ${userAns}`);
    console.log(boxen(chalk.bold.black(`Wrong Answer.\nThe correct answer is: ${answer}`), wrongAnsBox));
  }

}

module.exports = {
  score,
  i,
  quiz,
  numLevels,
  numQuesAttempted
}