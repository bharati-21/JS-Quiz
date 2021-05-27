const welcomeModule = require('./welcome.js');
const quizModule = require('./quiz.js');
const questionsModule = require('./questions.js');
const generateQuestionsModule = require('./generate.js');

const userName = welcomeModule.userName;
const beginQuiz = welcomeModule.beginQuiz;

if(beginQuiz!== 'exit') {
  const generateQuestions = generateQuestionsModule.generateQuestions;

  const uniqueQues = generateQuestions(questionsModule.questions);

  const quiz = quizModule.quiz;

  const score = quiz(uniqueQues);
  console.log(`CONGRATULATIONS ${userName}! YOU SCORED: ${score}`);
}



