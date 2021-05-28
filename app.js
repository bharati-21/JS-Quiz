// Importing all the required modules.

const clear = require('clear');
const boxen = require('boxen');
const chalk = require('chalk');
const ora = require('ora');
const Spinner = require('cli-spinner').Spinner;

const welcomeModule = require('./welcome.js');
const questionsModule = require('./questions.js');
const generateQuestionsModule = require('./generate.js');
const quizModule = require('./quiz.js');

welcomeModule.welcome();

const userName = welcomeModule.userName;
const beginQuiz = welcomeModule.beginQuiz;


var score = 0;
var numLevels = 0;
var numQuesAttempted = 0;

if(beginQuiz!== 'exit') {
  const generateQuestions = generateQuestionsModule.generateQuestions;
  const uniqueQues = generateQuestions(questionsModule.questions);

  
  const quiz = quizModule.quiz;  
  const quizResults = quiz(uniqueQues);
  score = quizResults.score;
  numQuesAttempted = quizResults.numQuesAttempted;
  numLevels = quizResults.numLevels;
  calculateScore();
}


function calculateScore() {
  var spinner = new Spinner('Caclulating Your Score... %s');
  spinner.setSpinnerString("* -–—–- *");
  spinner.start();

  levelOneBox = {
    padding: 2,
    margin: 2,
    align: 'center',
    borderColor: 'red',
    backgroundColor: 'white'
  };

  levelTwoBox = {
    padding: 2,
    margin: 2,
    align: 'center',
    borderColor: 'yellow',
    backgroundColor: 'white'
  };

  levelThreeBox = {
    padding: 2,
    margin: 2,
    align: 'center',
    borderColor: 'green',
    backgroundColor: 'white'
  };

  exitBox = {
    padding: 2,
    margin: 2,
    align: 'center',
    borderColor: 'white',
    backgroundColor: 'black'
  }

  setTimeout(() => {
    spinner.stop(true);
    clear();
    if(numQuesAttempted === 'exit') {
      text = `
        chalk.bold.blueBright.bgYellowBright.underline('SCORE CARD');
      `
        console.log(boxen(exitBox, printScoreCard('white')));          
    }
    if(numLevels <= 1) {
      console.log(
        boxen(levelOneBox, printScoreCard('red') + `\n
        BETTER LUCK NEXT TIME!`));
    }
    else if(numLevels > 1 && numLevels <=2) {
      console.log(
        boxen(levelTwoBox, printScoreCard(levelTwoBox, 'yellow') + `\n
        GREAT JOB!`));
    }
    else {
      console.log(
        boxen(levelThreeBox,printScoreCard('green') + `\n
        CONGRATULATIONS!\n
        YOU ARE A POTTERHEAD PRO!
      `));
    }
  }, 4000);
}


function printScoreCard(color) {
  var text = 
    if(numQuesAttempted === 'exit') {
      text+='\nYOU ENDED THE QUIZ ABRUPTLY.\n';
      text+='NUMBER OF QUESTIONS YOU ATTEMPTED:', chalk.bold.color(numQuesAttempted);
    }

    
    text+='\nYOU REACHED LEVEL:',chalk.bold.color(numLevels) +'\n';
    test+='YOUR SCORE:',chalk.bold.color(score);

    return text;
}


