/*
  This module randomly generates 10 numbers from 0-49 (inclusive) and selects those indices of objects from questions array of objects. Exports these 10 questions as an array of object to "app" module
 */

function generateQuestions(questions) {
  var uniqueQues = [];
  var randomNum = 0;
  for(var i = 1; i<=10; i++) {
    randomNum = Math.floor(Math.random() * 50);

    while(uniqueQues.includes(questions[randomNum])) {
      randomNum = Math.floor(Math.random() * 50);
    } 
    uniqueQues.push(questions[randomNum]);
  }

  return uniqueQues;
}

module.exports = {generateQuestions};