const question = document.getElementById('quizz'),
    quizContent = document.querySelector('.quiz-content'),
    trueBtn = document.querySelector('.true'),
    falseBtn = document.querySelector('.false'),
    nbrQuestion = document.querySelector('.curr-qst'),
    resultWindow = document.querySelector('.result'),
    restartGame = document.querySelector('.restart'),
    correctSound = new Audio('audio/mixkit-correct-answer-tone-2870.wav'),
    wrongSound = new Audio('audio/mixkit-cartoon-failure-piano-473.wav'),
    totalPoint = document.querySelector('.nbr-point');

const questionsCoding = [
   { quiz: "هل لوني المفضل هو الأزرق؟", answer: false },
  { quiz: "هل وزني يساوي 60 كغ؟", answer: false },
  { quiz: "هل أحب لولو أكثر من اكرام؟", answer: true },
  { quiz: "هل أنا من محبي السهر ليلًا؟", answer: false },
  { quiz: "هل الميستا فتاة احلامك؟", answer: true },
  { quiz: "هل أكره مشاهدة الأفلام؟", answer: true },
  { quiz: "هل املك قطة في المنزل؟", answer: false },
  { quiz: "هل طولي اكثر من 1.70 ؟", answer: true },
  { quiz: "هل أستطيع الجري لمسافة 100 كلم من اجل الميستا ؟", answer: false },
  { quiz: "هل أنا شخص منظم؟", answer: true }

];
let currObject,
    countQuiz = 1,
    currIndex = 0;
// Showcase Qusetion of app
function showQuestion() {
    if (currIndex < questionsCoding.length) {
        currObject = questionsCoding[currIndex];
        question.value = currObject.quiz;
        nbrQuestion.innerText = countQuiz;
        countQuiz++;
    } else {
        resultWindow.classList.add('show');
        totalPoint.innerHTML = countPoint;
    }
}
showQuestion();
// Checking Answer of user 
let countPoint = 0;
function checkAnswer(userAnswer) {
    if (userAnswer == currObject.answer) {
        correctSound.play();
        countPoint++;
        currIndex++;
        showQuestion();
    } else {
        wrongSound.play();
        countPoint = countPoint;
        currIndex++;
        showQuestion();
    }
}
// Pick Answer
trueBtn.addEventListener('click', () => {
    checkAnswer(true)
});
falseBtn.addEventListener('click', () => {
    checkAnswer(false);
});
// Restart Game
function restGame() {
    countPoint = 0;
    countQuiz = 1;
    currIndex = 0;
    resultWindow.classList.remove('show');

    showQuestion()
}
restartGame.addEventListener('click', restGame);

