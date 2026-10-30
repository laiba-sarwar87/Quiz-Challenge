const questions = [
  {
    question: "Inside a class method, what does 'self' refer to?",
    options: ["The class itself", "The instance of the class", "The parent class", "A global variable"],
    answer: 1
  },
  {
    question: "Which of these data types is immutable?",
    options: ["list", "dictionary", "tuple", "set"],
    answer: 2
  },
  {
    question: "What is the output of print(10 % 3)?",
    options: ["3", "1", "0", "3.33"],
    answer: 1
  },
  {
    question: "What is the output of print('hello'.upper())?",
    options: ["HELLO", "hello", "Hello", "Error"],
    answer: 0
  },
  {
    question: "Which statement is used to exit a loop immediately in Python?",
    options: ["stop", "exit", "return", "break"],
    answer: 3
  }
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
let currentQuestion = 0;
let score = 0;

startBtn.onclick = function () {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
};

restartBtn.onclick = function () {
  currentQuestion = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
};
function showQuestion() {
  let q = questions[currentQuestion];
  progressEl.textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  for (let i = 0; i < q.options.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = q.options[i];
    btn.onclick = function () {
      checkAnswer(i, btn);
    };
    optionsEl.appendChild(btn);
  }
}

function checkAnswer(selected, btn) {
  let q = questions[currentQuestion];
  let allBtns = optionsEl.querySelectorAll("button");

  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].disabled = true;
  }

  if (selected === q.answer) {
    score++;
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
    allBtns[q.answer].classList.add("correct");
  }

  setTimeout(nextQuestion, 1200);
}


function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreEl.textContent = "You scored " + score + " out of " + questions.length + "! 🐍";
}
