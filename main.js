// Su'aalaha C Programming basics
let questions = [
  {
    question:
      'What will the program print?\n\nint x = 10;\nif(x > 5){\n   printf("Greater");\n}else{\n   printf("Smaller");\n}',
    options: ["Greater", "Smaller", "Error", "Nothing"],
    correct: "Greater",
  },

  {
    question:
      'What will be printed?\n\nint age = 18;\nif(age > 18){\n   printf("Adult");\n}else if(age == 18){\n   printf("Just Adult");\n}else{\n   printf("Minor");\n}',
    options: ["Adult", "Just Adult", "Minor", "Error"],
    correct: "Just Adult",
  },

  {
    question:
      'What will happen?\n\nint age = 18;\nif(age > 18){\n   printf("Adult");\n}else if(age == 18){\n   printf("Just 18");\n}else{\n   printf("Minor");\n}',
    options: ["Adult", "Just 18", "Minor", "Error"],
    correct: "Just 18",
  },
  {
    question:
      'What will be the output?\n\nint num = -3;\nif(num >= 0){\n   printf("Positive");\n}else{\n   printf("Negative");\n}',
    options: ["Positive", "Negative", "Error", "Nothing"],
    correct: "Negative",
  },

  {
    question:
      'What will the program print?\n\nint num = 12;\nif(num % 2 == 0){\n   printf("Even");\n}else{\n   printf("Odd");\n}',
    options: ["Even", "Odd", "Error", "Nothing"],
    correct: "Even",
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
    question:
      'User gives 15, what is printed?\n\nint number;\nscanf("%d", &number);\nif(number < 10){\n   printf("Small");\n}else if(number < 20){\n   printf("Medium");\n}else{\n   printf("Large");\n}',
    options: ["Small", "Medium", "Large", "Error"],
    correct: "Medium",
  },
  {
    question:
      'What will be the output?\n\nint temp = 25;\nif(temp > 30){\n   printf("Hot");\n}else{\n   printf("Cool");\n}',
    options: ["Hot", "Cool", "Error", "Nothing"],
    correct: "Cool",
  },
  {
    question:
      'What will be printed?\n\nint marks = 45;\nif(marks >= 50){\n   printf("Pass");\n}else{\n   printf("Fail");\n}',
    options: ["Pass", "Fail", "Error", "Nothing"],
    correct: "Fail",
  },

  {
    question: "What will be the value of the expression !(0) in C?",
    options: ["0", "1", "-1", "Error"],
    correct: "1",
  },
  {
    question:
      'Output?\n\nint score = 75;\nif(score >= 90){\n   printf("Grade A");\n}else if(score >= 60){\n   printf("Grade B");\n}else{\n   printf("Grade C");\n}',
    options: ["Grade A", "Grade B", "Grade C", "Error"],
    correct: "Grade B",
  },
  {
    question:
      'If user inputs 100, what will program display?\n\nint score;\nscanf("%d", &score);\nif(score >= 90){\n   printf("Excellent");\n}else{\n   printf("Keep Trying");\n}',
    options: ["Excellent", "Keep Trying", "Error", "Nothing"],
    correct: "Excellent",
  },

  {
    question:
      "Which line in C assigns the value 8 to an integer variable named x?",
    options: ["int x = 8;", "x = 8;", "int 8 = x;", "x := 8;"],
    correct: "int x = 8;",
  },

 {
  question: "What will be the output if user enters 7?\n\nint x;\nscanf(\"%d\", &x);\nif(x % 2 == 0){\n   printf(\"Even\");\n}else{\n   printf(\"Odd\");\n}",
  options: ["Even", "Odd", "Error", "Nothing"],
  correct: "Odd"
},
  {
    question:
      'What is the output of this code?\n\nint x = 10;\nprintf("%d", x--);',
    options: ["10", "9", "Error", "Undefined behavior"],
    correct: "10",
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
      'What is the result if user types 0?\n\nint n;\nscanf("%d", &n);\nif(n){\n   printf("True");\n}else{\n   printf("False");\n}',
    options: ["True", "False", "Error", "Nothing"],
    correct: "False",
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
      "Both increment the variable",
    ],
    correct: "--x decrements before use, x-- decrements after use",
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
