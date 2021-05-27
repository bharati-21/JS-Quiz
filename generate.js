
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