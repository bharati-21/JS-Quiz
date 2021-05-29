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
const highScore = require('./highscores.js');

welcomeModule.welcome();

const userName = welcomeModule.userName;
const beginQuiz = welcomeModule.beginQuiz;


var score = 0;
var numLevels = 0;
var numQuesAttempted = 0;
var finishedAbruptly = false;

if(beginQuiz!== 'exit') {
  const generateQuestions = generateQuestionsModule.generateQuestions;
  const uniqueQues = generateQuestions(questionsModule.questions);

  
  const quiz = quizModule.quiz;  
  const quizResults = quiz(uniqueQues);
  score = quizResults.score;
  numQuesAttempted = quizResults.numQuesAttempted;
  numLevels = quizResults.numLevels;
  finishedAbruptly = quizResults.finishedAbruptly;
  calculateScore();


  setTimeout(() => {
      console.log(chalk.bold.yellow('\n\nPlease take a screenshot of your score card!\n\n'));

  }, 6000);


  setTimeout(() => {
    console.log(chalk.bgGray.whiteBright.bold.underline("\n\nRETURNING TO MAIN SCREEN...\n\n"));
  }, 10000);

  setTimeout(() => {
      clear();
      welcomeModule.welcome();


  }, 20000);
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
    backgroundColor: '#333'
  };

  levelTwoBox = {
    padding: 2,
    margin: 2,
    align: 'center',
    borderColor: 'yellow',
    backgroundColor: '#333'
  };

  levelThreeBox = {
    padding: 2,
    margin: 2,
    align: 'center',
    borderColor: 'green',
    backgroundColor: '#333'
  };

  exitBox = {
    padding: 2,
    margin: 2,
    align: 'center',
    borderColor: '#fff',
    backgroundColor: '#000'
  }

  setTimeout(() => {
    spinner.stop(true);
    clear();
    var text = chalk.bold.underline.blackBright.bgWhiteBright("SCORE CARD");
      
    if(finishedAbruptly === true) {
      text = chalk.bold.bgWhiteBright.blackBright('YOU ENDED THE QUIZ ABRUPTLY');
      text += printScoreCard('cyanBright');
      console.log(boxen(text, exitBox))
    }

    else {
        highScores = highScore.highScores;
        if(score >= highScores[0]) {

          
          console.log(chalk.bold.underline.magentaBright('\n\nCONGRATULATIONS! YOU ARE A HIGH SCORER!!\n'));
          console.log(chalk.bold.yellow('Please take a screenshot of your score card and send it to me!\n\n'));
        }

        if(numLevels <= 1) { 
          text += printScoreCard('redBright') +  "\n" + chalk.bold.bgRedBright.black('BETTER LUCK NEXT TIME!');

          console.log(boxen(text, levelOneBox));
        }
        
        else if(numLevels > 1 && numLevels <=2) {
        text += printScoreCard('yellowBright') +  "\n" + chalk.bold.bgYellowBright.black('GREAT JOB!');

          console.log(boxen(text, levelTwoBox));
        }

        else {
          text += printScoreCard('green') +  "\n" + chalk.bold.bgGreenBright.black('CONGRATULATIONS. YOU ARE A POTTERHEAD PRO!!');

          console.log(boxen(text, levelThreeBox));
        }
    }
    
    
  }, 4000);
}


function printScoreCard(color) {
  var text = chalk.bold `
        \nNUMBER OF QUESTIONS ATTEMPTED: {${color} ${numQuesAttempted}}
        \nFINAL LEVEL: {${color} ${numLevels}}
        \nFINAL SCORE: {${color} ${score}} 
    `;

    return text.toString();
}


