const chalk = require('chalk');
const readLineSync = require('readline-sync');
const boxen = require('boxen');
const instructions = require('./instructions.js');
const log = console.log;

var userName = '';
var beginQuiz = '';

function welcome() {
  // Title text
  const title = chalk.blue.bold("WELCOME TO THE HARRY POTTER TRIVIA QUIZ");

  // Adding box styles to the title
  const titleBox = {
    padding: 1,
    margin: 2,
    borderColor: '#4682b4',
    backgroundColor: '#fff',
    borderStyle: 'double',
    align: 'center'
  }

  // logging title to the screen
  log(boxen(title, titleBox));

  // Asking for user's name
  userName = readLineSync.question('What is your name? ');

  let beginQuiz = "";

  

  while(beginQuiz!== "exit" && beginQuiz!=="start") {
     log(`\nWelcome`, chalk.bold.blueBright(userName));

    log(instructions.instruction);

     beginQuiz = readLineSync.question(`Enter "start" to play the quiz or "exit" to leave. `).toLowerCase();

     log(instructions.instruction);
  }

  if(beginQuiz === 'exit') {
    const sorryBox = {
      padding: 1,
      margin: {top: 1, bottom: 1, left:0, right: 0},
      borderStyle: 'round',
      borderColor: 'red',
    }
    console.log(boxen('Sorry to see you go! Do come back and play.', sorryBox));
  }
  else {
    const welcomeBox = {
      padding: 1,
      margin: {top: 1, bottom: 0, left:0, right: 0},
      borderStyle: 'round',
      borderColor: 'green',
    }
    console.log(boxen('Thank you for chossing to play!',welcomeBox));
  }
}


module.exports = {
  welcome,
  userName,
  beginQuiz: beginQuiz.toLowerCase()
};
