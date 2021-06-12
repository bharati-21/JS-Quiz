# HARRY POTTER QUIZ
A CLI fun quiz app using node.js that tests how much of a potterhead you are!

[Take the quiz here](https://replit.com/@bhaaratii/how-well-do-you-know-me?embed=1&output=1#README.md)


## USER DEFINED MODULES IN THE APPLICATION
1. [app.js](https://github.com/bharati-21/JS-Quiz/blob/main/app.js)
   * This is the ***main module*** that connects all modules and makes calls to functions in other modules.
   * This module calls the `welcome()` method in the `welcome.js` module, which welcomes the user to the game.
   * The `questions.js` module contains 50 questions in the form of an array of object
   * The module then calls the `generateQuestions()` method in the `generate.js` module, which generates 10 random unique questions and exports it.
   * The `quiz.js` module displays the 10 uniquely generated questions, allows user to enter their choice, checks the answer and also updates score.
   * This module also displays the final score card for the user, along with high scorers, and then exits the game.
   * It also checks if the user is one of the high scorer by comparing the final score with that of the high scorers from the `highScore.js` module.

1. [welcome.js](https://github.com/bharati-21/JS-Quiz/blob/main/welcome.js)
   * This module has a `welcome()` method that asks for the user's name and then displays instructions after importing them from the `instructions.js` module.
   * The user is also asked whether they want to start the quiz or exit the game.
   * The `welcome()` returns the user name and the answer to whether the user wants to begin the quiz or not.
   * Finally the module ***exports*** the `welcome()` method, which is invoked by the `app.js` module.

1. [instructions.js](https://github.com/bharati-21/JS-Quiz/main/instructions.js)
   * This module only exports the instructions text, which is used by the `welcome()` in the `welcome.js` module.
   * The instructions use [`CHALK`](https://www.npmjs.com/package/chalk) and [`boxen`](https://www.npmjs.com/package/boxen) to style and add colors to the text.

1. [questions.js](https://github.com/bharati-21/JS-Quiz/main/questions.js)
   * The module stores 50 questions in the form of `array of object` which are exported to the `app.js` module. 

1. [generate.js](https://github.com/bharati-21/JS-Quiz/blob/main/instructions.js)
   * This module randomly generates 10 numbers from 0-49 (inclusive) and selects those indices of objects from questions array of objects. 
   * Then exports these 10 questions as an array of object to `app.js` module

1. [quiz.js](https://github.com/bharati-21/JS-Quiz/main/quiz.js)
   * This module has `quiz()` method that imports the 10 questions in the form of array of object from the `questions.js` module.
   * These questions are displayed to the user, and then user enters the choice of answer.
   * This answer is checked with the original answer and the score is updated.
   * The final score is returned to the `app.js` module where the final score is displayed using various styles from [`CHALK`](https://www.npmjs.com/package/chalk) and [`boxen`](https://www.npmjs.com/package/boxen).
   * The module also returns the number of questions user attempted, the final level of the user at the end of the game, and whether the user ended the quiz abruptly.

1. [highScore.js](https://github.com/bharati-21/JS-Quiz/main/highScore.js)
   * This module holds the high scores in the form of an array of object
   * It then exports it to the `app.js` module, where the high scorers are displayed after the user ends the quiz.



## EXTERNAL PACKAGES AND MODULES USED
1. [`CHALK`](https://www.npmjs.com/package/chalk)
   * This package is used to add colors, styles and weights to plain console.log displays
 
1. [`boxen`](https://www.npmjs.com/package/boxen)
   * This package provides box like styles with padding, borders, margins, colors and backgrounds

1. [`readline-sync`](https://www.npmjs.com/package/readline-sync)
   * This package provides interactivity to have a conversation with the user via a console.

1. [`cli-spinner`](https://www.npmjs.com/package/cli-spinner)
   * This package provides spinners and loading objects to indicate a loading process.

1. [`clear`](https://www.npmjs.com/package/clear)
   * This package is used to clear the terminal screen or move the cursor position to the topmost left of the terminal (0,0).

## MAIN FEATURES
* This is an MCQ based quiz on Harry Potter Books Trivia. 
* Every question is played for 1 score, and there are no negative marks for incorrect answer.
* Correct answer is displayed after user attempts each question.
* There are 3 levels to this game: level 0, level 1, level 2, and level 3.
  * Answer 2 questions correctly, user goes to level 1.
  * Answer 5 questions correctly, user goes to level 2.
  * Answer 8 questions correctly, user goes to level 3.
* Final score is displayed at the end of the quiz, along with the result if user is a high scorer or not.
