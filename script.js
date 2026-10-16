
const questions = [
  {
    question: "What is the output of print(2 ** 3 ** 2)?",
    options: ["64", "512", "36", "12"],
    answer: 1
  },
  {
    question: "Which of these data types is mutable?",
    options: ["tuple", "string", "list", "frozenset"],
    answer: 2
  },
  {
    question: 'What does bool("False") return?',
    options: ["False", "True", "Error", "None"],
    answer: 1
  },
  {
    question: "What is the output of [x*2 for x in range(3)]?",
    options: ["[0, 2, 4]", "[2, 4, 6]", "[0, 1, 2]", "Error"],
    answer: 0
  },
  {
    question: "Which block catches exceptions in Python?",
    options: ["finally", "except", "catch", "rescue"],
    answer: 1
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
