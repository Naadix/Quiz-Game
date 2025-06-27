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
 { quiz: " هل HTML  تُستخدم لإنشاء هيكل صفحات الويب ؟", answer: true },
    { quiz: "JavaScript يمكنها التحكم في تصميم الصفحة مثل CSS ", answer: false },
    { quiz: "هل HTML تُعتبر لغة برمجة؟ ", answer: false },
    { quiz: "هل يمكن استخدام JavaScript في الواجهة الخلفية ؟ ", answer: true },
    { quiz: "هل CSS تتحكم في منطق الصفحة؟ ", answer: false },
    { quiz: "هل JavaScript تعمل في المتصفح فقط؟", answer: false },
    { quiz: "يمكننا استخدام جملة if في JavaScript لاتخاذ قرارات.", answer: true },
    { quiz: "الكود console.log() يُستخدم لطباعة شيء في الصفحة.", answer: false },
    { quiz: "لغة Python تُستخدم فقط في الذكاء الاصطناعي ", answer: false },
    { quiz: "يمكن وضع ملف CSS داخل ملف HTML ", answer: true }


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

