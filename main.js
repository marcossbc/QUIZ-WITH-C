// Su'aalaha C Programming basics
let questions = [
  {
    question: "Which symbol is used to end a statement in C?",
    options: [";", ":", "."],
    correct: ";",
  },
  {
    question: "Which function is used to print output in C?",
    options: ["printf()", "cout<<", "print()"],
    correct: "printf()",
  },
  {
    question: "Which data type is used to store decimal numbers in C?",
    options: ["int", "float", "char"],
    correct: "float",
  },
  {
    question: "Which keyword is used to declare a variable in C?",
    options: ["var", "let", "int"],
    correct: "int",
  },
  {
    question: "Which function is used to read input from user in C?",
    options: ["scanf()", "input()", "prompt"],
    correct: "scanf()",
  },

  {
    question:
      "How do you correctly declare and assign the value 8 to a variable in C?",
    options: ["int x = 8;", "int x == 8;", "x int = 8;", "int = x 8;"],
    correct: "int x = 8;",
  },

  {
    question: "Which of the following is a valid variable name in C?",
    options: ["2variable", "variable_2", "var-iable", "var iable"],
    correct: "variable_2",
  },
  {
    question: "What is the output of the expression (5 > 3 && 2 < 4) in C?",
    options: ["0", "1", "Error", "Depends on compiler"],
    correct: "1",
  },
  {
    question: "Which operator is the logical AND operator in C?",
    options: ["&", "&&", "|", "||"],
    correct: "&&",
  },
  {
    question: "Which operator is the logical OR operator in C?",
    options: ["|", "||", "&", "&&"],
    correct: "||",
  },
  {
  question: "Which operator is used for logical NOT in C?",
  options: ["!", "~", "&&", "||"],
  correct: "!"
},

  {
    question: "What will be the value of the expression !(0) in C?",
    options: ["0", "1", "-1", "Error"],
    correct: "1",
  },
  {
    question: "Which of the following is NOT a valid variable type in C?",
    options: ["int", "float", "boolean", "char"],
    correct: "boolean",
  },
  {
    question:
      "What data type is used to store the value 8 in this statement: int x = 8;",
    options: ["float", "int", "char", "double"],
    correct: "int",
  },

  {
    question:
      "Which line in C assigns the value 8 to an integer variable named x?",
    options: ["int x = 8;", "x = 8;", "int 8 = x;", "x := 8;"],
    correct: "int x = 8;",
  },

  {
    question:
      'What is the output of the following C code?\n\nint x = 8;\nprintf("%d", x);',
    options: ["8", "0", "x", "Error"],
    correct: "8",
  },
  {
  question: "What is the output of this code?\n\nint x = 10;\nprintf(\"%d\", x--);",
  options: ["10", "9", "Error", "Undefined behavior"],
  correct: "10"
},

  {
    question: "What will happen if you write this in C: int x; x = 8;",
    options: [
      "Variable x is assigned the value 8",
      "Syntax error",
      "Variable x is declared but not assigned",
      "Program will crash",
    ],
    correct: "Variable x is assigned the value 8",
  },
  {
    question:
      "Which format specifier is used in printf to display the value of integer variable x?",
    options: ["%d", "%f", "%c", "%s"],
    correct: "%d",
  },
  {
    question: 'What will this code print?\n\nint x = 8;\nprintf("%d", x + 2);',
    options: ["10", "8", "2", "Error"],
    correct: "10",
  },
  {
  question: "What is the difference between --x and x-- in C?",
  options: [
    "--x decrements before use, x-- decrements after use",
    "No difference",
    "x-- decrements before use, --x decrements after use",
    "Both increment the variable"
  ],
  correct: "--x decrements before use, x-- decrements after use"
},

];

// Variables for progress
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

// DOM elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");

const resultContainer = document.getElementById("result-container");
const totalQuestionsSpan = document.getElementById("total-questions");
const correctAnswersSpan = document.getElementById("correct-answers");
const wrongAnswersSpan = document.getElementById("wrong-answers");

const scoreCircle = document.getElementById("score-circle");
const scorePercent = document.getElementById("score-percent");
const scoreLabel = document.getElementById("score-label");
const resultMessage = document.getElementById("result-message");

// Keydinta xogta quiz-ka localStorage
function saveQuizData() {
  const quizData = {
    currentQuestionIndex,
    correctCount,
    wrongCount,
  };
  localStorage.setItem("quizDataSave", JSON.stringify(quizData));
}

// Soo celinta xogta quiz-ka haddii localStorage-ku jiro
function loadQuizData() {
  const savedData = localStorage.getItem("quizDataSave");
  if (savedData) {
    const data = JSON.parse(savedData);
    currentQuestionIndex = data.currentQuestionIndex;
    correctCount = data.correctCount;
    wrongCount = data.wrongCount;
  }
}

function startQuiz() {
  loadQuizData(); // Markii la bilaabayo quiz-ka, xogtii hore ku soo celi
  showQuestion();
  updateProgress();
  // Haddii quiz-ka la dhameystiray hore, isla natiijada muuji
  if (currentQuestionIndex >= questions.length) {
    showResults();
  }
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResults();
    return;
  }
  let currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  nextBtn.style.display = "none";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.disabled = false;
    button.addEventListener("click", () => selectAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedOption) {
  let correctAnswer = questions[currentQuestionIndex].correct;
  if (selectedOption === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    correctCount++;
  } else {
    feedback.textContent = "❌ Incorrect!";
    feedback.style.color = "red";
    wrongCount++;
  }
  // Disable all buttons after answer
  Array.from(optionsContainer.children).forEach((btn) => (btn.disabled = true));
  nextBtn.style.display = "block";

  saveQuizData(); // Keydi xogta markasta jawaab la bixiyo
}

function nextQuestion() {
  currentQuestionIndex++;
  saveQuizData(); // Keydi xogta mar kale
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    updateProgress();
  } else {
    showResults();
  }
}

function updateProgress() {
  let progressPercent = (currentQuestionIndex / questions.length) * 100;
//   progressPercent.Math.max(progressPercent, 100)
  progressBar.style.width = progressPercent + "%";
}

function showResults() {
  document.getElementById("question-container").style.display = "none";
  feedback.style.display = "none";
  nextBtn.style.display = "none";
  resultContainer.style.display = "block";
  progressBar.style.width = "100%";

  let percentScore = Math.round((correctCount / questions.length) * 100);
  scorePercent.textContent = percentScore + "%";

  // Change colors based on score
  scoreCircle.classList.remove("green-border", "yellow-border", "red-border");
  if (percentScore >= 80) {
    scoreCircle.classList.add("green-border");
    scoreLabel.textContent = "Perfect Score! 🎉";
    resultMessage.textContent = "Excellent job HOYADAABA KUU DUCEYSEY😁🥰.";
  } else if (percentScore >= 50) {
    scoreCircle.classList.add("yellow-border");
    scoreLabel.textContent = "Good Try!";
    resultMessage.textContent = "Not bad, lkin waxabaa wili kamaqan taliye🙄";
  } else {
    scoreCircle.classList.add("red-border");
    scoreLabel.textContent = "Better Luck Next Time";
    resultMessage.textContent = "WAXAA UBAAHANTHY PRITIACL BADAN 😭.";
  }

  totalQuestionsSpan.textContent = questions.length;
  correctAnswersSpan.textContent = correctCount;
  wrongAnswersSpan.textContent = wrongCount;

  // Haddii quiz-ka la dhammeeyey, xogta localStorage ka nadiifi
  localStorage.removeItem("quizDataSave");
}

nextBtn.addEventListener("click", () => {
  nextQuestion();
});

startQuiz();
