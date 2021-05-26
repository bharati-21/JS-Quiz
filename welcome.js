const chalk = require('chalk');
const readLineSync = require('readline-sync');
const boxen = require('boxen');
const log = console.log;


  // Title text
  const title = chalk.blue.bold("WELCOME TO THE HARRY POTTER TRIVIA QUIZ");

  // Adding box styles to the title
  const titleBox = {
    padding: 1,
    margin: 2,
    borderColor: '#4682b4',
    backgroundColor: '#fff',
    borderStyle: 'double'
  }

  // logging title to the screen
  log(boxen(title, titleBox));

  // Asking for user's name
  const userName = readLineSync.question('What is your name? ');

  let beginQuiz = "";

  while(beginQuiz!== "exit" && beginQuiz!=="start") {
     beginQuiz = readLineSync.question(`\nWelcome ${userName}. Enter "start" to play the quiz or "exit" to leave. `).toString().toLowerCase();
  }

  if(beginQuiz == 'exit') {
    console.log('\n\nSorry to see you go! Do come back and play.');
  }
  else {
    console.log('\n\nThank you for chossing to play!')
  }



module.exports = {
  userName: userName,
  beginQuiz: beginQuiz.toLowerCase()
};
