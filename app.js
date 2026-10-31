
// Credenciales de demostración.
// Para un uso público, implementar autenticación en servidor.
const USERNAME = "partners";
const PASSWORD = "20141010";

const EXAM_SIZE = 40;
const EXAM_SECONDS = 40 * 60;
const LETTERS = ["a", "b", "c", "d"];

const screens = {
  login: document.getElementById("loginScreen"),
  dashboard: document.getElementById("dashboardScreen"),
  exam: document.getElementById("examScreen"),
  result: document.getElementById("resultScreen")
};

let examQuestions = [];
let answers = {};
let currentIndex = 0;
let secondsLeft = EXAM_SECONDS;
let timerInterval = null;
let submitted = false;

// CAMBIAR DE PANTALLA
function showScreen(name) {
  Object.values(screens).forEach(screen => {
    screen.classList.add("hidden");
  });

  screens[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
}

// INICIAR SESIÓN
document.getElementById("loginForm").addEventListener("submit", event => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const error = document.getElementById("loginError");

  if (username === USERNAME && password === PASSWORD) {
    error.textContent = "";
    document.getElementById("loginForm").reset();
    showScreen("dashboard");
  } else {
    error.textContent =
      "Usuario o contraseña incorrectos. Inténtalo nuevamente.";
  }
});

// CERRAR SESIÓN
function logout() {
  stopTimer();
  submitted = false;
  showScreen("login");
}

document.getElementById("logoutButton").addEventListener("click", logout);
document.getElementById("logoutResultButton").addEventListener("click", logout);

// BOTONES PRINCIPALES
document.getElementById("startButton").addEventListener("click", startExam);
document.getElementById("newExamButton").addEventListener("click", startExam);

document.getElementById("backDashboardButton").addEventListener("click", () => {
  showScreen("dashboard");
});

// MEZCLAR PREGUNTAS ALEATORIAMENTE
function shuffle(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

// INICIAR SIMULACRO
function startExam() {
  stopTimer();

  submitted = false;
  answers = {};
  currentIndex = 0;
  secondsLeft = EXAM_SECONDS;

  // Selecciona 40 preguntas aleatorias de las 200.
  examQuestions = shuffle(QUESTIONS).slice(0, EXAM_SIZE);

  showScreen("exam");
  renderQuestion();
  renderQuestionGrid();
  updateTimer();

  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimer();

    if (secondsLeft <= 0) {
      finishExam(true);
    }
  }, 1000);
}

// DETENER CRONÓMETRO
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = null;
}

// ACTUALIZAR CRONÓMETRO
function updateTimer() {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  const timer = document.getElementById("timer");

  timer.textContent =
    `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  timer.parentElement.classList.toggle(
    "warning",
    secondsLeft <= 300
  );
}

// MOSTRAR PREGUNTA ACTUAL
function renderQuestion() {
  const question = examQuestions[currentIndex];

  document.getElementById("questionNumber").textContent =
    `PREGUNTA ${String(currentIndex + 1).padStart(2, "0")} DE ${EXAM_SIZE}`;

  document.getElementById("questionText").textContent =
    question.question;

  const selected = answers[question.id];
  const options = document.getElementById("optionsContainer");

  options.innerHTML = "";

  question.options.forEach((optionText, index) => {
    const letter = LETTERS[index];

    const label = document.createElement("label");

    label.className =
      `option${selected === letter ? " selected" : ""}`;

    const input = document.createElement("input");

    input.type = "radio";
    input.name = `question-${question.id}`;
    input.value = letter;
    input.checked = selected === letter;

    input.addEventListener("change", () => {
      answers[question.id] = letter;

      renderQuestion();
      renderQuestionGrid();
      updateProgress();
    });

    const letterBadge = document.createElement("span");

    letterBadge.className = "option-letter";
    letterBadge.textContent = letter.toUpperCase();

    const text = document.createElement("span");

    text.className = "option-text";
    text.textContent = optionText;

    label.append(input, letterBadge, text);
    options.appendChild(label);
  });

  document.getElementById("previousButton").disabled =
    currentIndex === 0;

  document.getElementById("previousButton").style.opacity =
    currentIndex === 0 ? ".45" : "1";

  document.getElementById("nextButton").textContent =
    currentIndex === EXAM_SIZE - 1
      ? "Última pregunta"
      : "Siguiente →";

  updateProgress();
}

// MOSTRAR LOS NÚMEROS DE LAS PREGUNTAS
function renderQuestionGrid() {
  const grid = document.getElementById("questionGrid");

  grid.innerHTML = "";

  examQuestions.forEach((question, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = index + 1;

    if (index === currentIndex) {
      button.classList.add("current");
    }

    if (answers[question.id]) {
      button.classList.add("answered");
    }

    button.setAttribute(
      "aria-label",
      `Ir a la pregunta ${index + 1}`
    );

    button.addEventListener("click", () => {
      currentIndex = index;
      renderQuestion();
      renderQuestionGrid();
    });

    grid.appendChild(button);
  });
}

// ACTUALIZAR PROGRESO
function updateProgress() {
  const count = Object.keys(answers).length;

  document.getElementById("answeredCount").textContent = count;

  document.getElementById("progressBar").style.width =
    `${(count / EXAM_SIZE) * 100}%`;
}

// BOTÓN ANTERIOR
document.getElementById("previousButton").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
    renderQuestionGrid();
  }
});

// BOTÓN SIGUIENTE
document.getElementById("nextButton").addEventListener("click", () => {
  if (currentIndex < EXAM_SIZE - 1) {
    currentIndex++;
    renderQuestion();
    renderQuestionGrid();
  }
});

// FINALIZAR SIMULACRO
document.getElementById("finishButton").addEventListener("click", () => {
  const unanswered = EXAM_SIZE - Object.keys(answers).length;

  const message = unanswered
    ? `Te faltan ${unanswered} pregunta(s) por responder. ¿Deseas entregar el simulacro de todas maneras?`
    : "¿Deseas entregar tu simulacro y ver tu resultado?";

  if (window.confirm(message)) {
    finishExam(false);
  }
});

document.getElementById("finishTopButton").addEventListener("click", () => {
  if (window.confirm("¿Deseas finalizar el simulacro ahora?")) {
    finishExam(false);
  }
});

// CALIFICAR EXAMEN Y MOSTRAR RESULTADOS
function finishExam(timeExpired) {
  if (submitted) return;

  submitted = true;
  stopTimer();

  let correct = 0;
  let wrong = 0;
  let blank = 0;

  const mistakes = [];

  examQuestions.forEach((question, index) => {
    const chosen = answers[question.id];

    if (!chosen) {
      blank++;
    } else if (chosen === question.answer) {
      correct++;
    } else {
      wrong++;

      mistakes.push({
        question,
        chosen,
        index
      });
    }
  });

  const percent = Math.round((correct / EXAM_SIZE) * 100);

  document.getElementById("scoreValue").textContent =
    `${correct}/${EXAM_SIZE}`;

  document.getElementById("scorePercent").textContent =
    `${percent}% de respuestas correctas`;

  document.getElementById("correctValue").textContent = correct;
  document.getElementById("wrongValue").textContent = wrong;
  document.getElementById("blankValue").textContent = blank;

  document.getElementById("resultMessage").textContent =
    timeExpired
      ? "El tiempo terminó. Se registraron tus respuestas."
      : "Tu simulacro ha sido calificado automáticamente.";

  document.getElementById("wrongBadge").textContent =
    `${wrong} ${wrong === 1 ? "error" : "errores"}`;

  const wrongContainer = document.getElementById("wrongAnswers");

  wrongContainer.innerHTML = "";

  // SI NO HAY ERRORES
  if (mistakes.length === 0) {
    const success = document.createElement("div");

    success.className = "no-errors";

    success.textContent =
      "¡Excelente! No tienes respuestas incorrectas entre las preguntas que respondiste.";

    wrongContainer.appendChild(success);

  } else {

    // MOSTRAR RESPUESTAS INCORRECTAS
    mistakes.forEach(({ question, chosen, index }) => {
      const card = document.createElement("article");

      card.className = "wrong-card";

      const title = document.createElement("h3");

      title.textContent =
        `Pregunta ${index + 1}. ${question.question}`;

      const your = document.createElement("p");

      your.className = "your-answer";

      const yourLabel = document.createElement("span");

      yourLabel.className = "review-label";
      yourLabel.textContent = "Tu respuesta: ";

      your.append(
        yourLabel,
        document.createTextNode(
          `${chosen.toUpperCase()}) ${question.options[LETTERS.indexOf(chosen)]}`
        )
      );

      const correctAnswer = document.createElement("p");

      correctAnswer.className = "correct-answer";

      const correctLabel = document.createElement("span");

      correctLabel.className = "review-label";
      correctLabel.textContent = "Respuesta correcta: ";

      correctAnswer.append(
        correctLabel,
        document.createTextNode(
          `${question.answer.toUpperCase()}) ${question.options[LETTERS.indexOf(question.answer)]}`
        )
      );

      card.append(title, your, correctAnswer);

      wrongContainer.appendChild(card);
    });
  }

  showScreen("result");
}
