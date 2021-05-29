/*
  This module has the instruction text that is imported by the "welcome" module
*/

// Importing required modules
const boxen = require('boxen');

// Instructions 
const instructionTitle = "HOW TO ATTEMPT THIS QUIZ?\n\n"
const instructionBody = `
    1. Questions are in the form of MCQ.\n
    2. There are 10 questions in the quiz on Harry Potter Trivia.\n
    3. Type "a", "b" or "c" to answer the question. To exit the quiz, type "exit".\n
    4. Correct answer for every question will be displayed after user attempts it.\n
    5. Every question is played for a score of 1. No negative score for incorrect answers\n
    6. Final score will be displayed at the end of the quiz.\n
    7. There are 4 levels: level 0, level 1, level 2, and level 3.
    8. Answer 2 questions correctly, you go to level 1.
    9. Answer 5 questions correctly, you go to level 2
    10. Answer 8 questions correctly, you go to level 3.\n
  `;

  // Instruction styles
  instructionBox = {
	  padding: 1,
	  margin: {top: 1, right: 0, bottom: 1, left:0},
	  borderColor: 'yellow',
  	backgroundColor: 'black',
	  borderStyle: {
		  topLeft: '+',
		  topRight: '+',
		  bottomLeft: '+',
		  bottomRight: '+',
		  horizontal: '-',
		  vertical: '|'
    }
  };

// exporting the instruction which is used by "welcome" module
module.exports = {
   instruction: (boxen(instructionTitle + instructionBody, instructionBox))
 };