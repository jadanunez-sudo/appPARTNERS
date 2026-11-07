
// ==========================================
// CONFIGURACIÓN
// ==========================================

const USERNAME = "partners";
const PASSWORD = "20141010";

const EXAM_SIZE = 40;
const EXAM_SECONDS = 40 * 60;
const LETTERS = ["a", "b", "c", "d"];
const approvalImage = document.getElementById("approvalImage");

// ==========================================
// PANTALLAS
// ==========================================

const screens = {
  login: document.getElementById("loginScreen"),
  dashboard: document.getElementById("dashboardScreen"),
  exam: document.getElementById("examScreen"),
  result: document.getElementById("resultScreen"),
  reading: document.getElementById("readingScreen"),
  approval: document.getElementById("approvalScreen"),
};

let examQuestions = [];
let answers = {};
let currentIndex = 0;
let secondsLeft = EXAM_SECONDS;
let timerInterval = null;
let submitted = false;

// ==========================================
// CAMBIAR DE PANTALLA
// ==========================================

function showScreen(name) {
  Object.values(screens).forEach(screen => {
    if (screen) screen.classList.add("hidden");
  });

  if (!screens[name]) {
    console.error(`No existe la pantalla: ${name}`);
    return;
  }

  screens[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
}


// ==========================================
// INICIAR SESIÓN
// ACEPTAR MAYÚSCULAS Y MINÚSCULAS
// ==========================================

document.getElementById("loginForm").addEventListener("submit", event => {

    event.preventDefault();

    const username = document.getElementById("username")
        .value.trim().toLowerCase();

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


// ==========================================
// CERRAR SESIÓN
// ==========================================

function logout() {
  stopTimer();
  submitted = false;
  showScreen("login");
}

document.getElementById("logoutButton").addEventListener("click", logout);
document.getElementById("logoutResultButton").addEventListener("click", logout);

// ==========================================
// BOTONES PRINCIPALES
// ==========================================

document.getElementById("startButton").addEventListener("click", startExam);
document.getElementById("newExamButton").addEventListener("click", startExam);

document.getElementById("backDashboardButton").addEventListener("click", () => {
  showScreen("dashboard");
});

// ==========================================
// BOTÓN Y PANTALLA DEL BALOTARIO
// ==========================================

document.getElementById("readingButton").addEventListener("click", () => {
  renderReadingQuestions();
  showScreen("reading");
});

document.getElementById("backReadingButton").addEventListener("click", () => {
  showScreen("dashboard");
});

document.getElementById("backReadingBottomButton").addEventListener("click", () => {
  showScreen("dashboard");
});

// ==========================================
// MOSTRAR LAS 200 PREGUNTAS DEL BALOTARIO
// ==========================================

function renderReadingQuestions() {
  const container = document.getElementById("readingQuestionsContainer");
  const count = document.getElementById("readingCount");

  if (!container) {
    console.error("No se encontró readingQuestionsContainer en el HTML.");
    return;
  }

  container.innerHTML = "";

  count.textContent = QUESTIONS.length;

  QUESTIONS.forEach((question, index) => {
    const card = document.createElement("article");
    card.className = "reading-question-card";

    // NÚMERO DE PREGUNTA
    const number = document.createElement("div");
    number.className = "reading-question-number";
    number.textContent = `PREGUNTA ${String(index + 1).padStart(3, "0")}`;

    // TEXTO DE LA PREGUNTA
    const title = document.createElement("h3");
    title.className = "reading-question-title";
    title.textContent = question.question;

    card.append(number, title);

    // ======================================
    // IMAGEN DE LA PREGUNTA
    // ======================================

    if (
      typeof question.image === "string" &&
      question.image.trim() !== ""
    ) {
      const img = document.createElement("img");
      const imagePath = question.image.trim();

      img.alt = `Imagen de la pregunta ${question.id || index + 1}`;
      img.className = "reading-question-image";
      img.loading = "eager";

      img.onload = () => {
        console.log(
          `Pregunta ${question.id || index + 1}: imagen cargada correctamente: ${imagePath}`
        );
      };

      img.onerror = () => {
        console.error(
          `ERROR en pregunta ${question.id || index + 1}. No se encuentra la imagen: ${imagePath}`
        );

        img.alt = `No se encontró la imagen: ${imagePath}`;
        img.style.display = "block";
        img.style.minHeight = "45px";
        img.style.border = "2px solid red";
        img.style.padding = "10px";
      };

      img.src = imagePath;
      card.appendChild(img);
    }

    // ======================================
    // ALTERNATIVAS A, B, C Y D
    // ======================================

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "reading-options";

    question.options.forEach((optionText, optionIndex) => {
      const letter = LETTERS[optionIndex];

      const option = document.createElement("div");
      option.className = "reading-option";

      // RESALTAR LA RESPUESTA CORRECTA
      if (letter === question.answer) {
        option.classList.add("correct");
      }

      const badge = document.createElement("span");
      badge.className = "reading-option-letter";
      badge.textContent = `${letter.toUpperCase()})`;

      const text = document.createElement("span");
      text.className = "reading-option-text";
      text.textContent = optionText;

      option.append(badge, text);
      optionsContainer.appendChild(option);
    });

    card.appendChild(optionsContainer);
    container.appendChild(card);
  });

  console.log(`BALOTARIO: se mostraron ${QUESTIONS.length} preguntas.`);
}

// ==========================================
// MEZCLAR PREGUNTAS ALEATORIAMENTE
// ==========================================

function shuffle(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

// ==========================================
// INICIAR SIMULACRO
// ==========================================

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

// ==========================================
// DETENER CRONÓMETRO
// ==========================================

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = null;
}

// ==========================================
// ACTUALIZAR CRONÓMETRO
// ==========================================

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

// ==========================================
// MOSTRAR PREGUNTA ACTUAL
// ==========================================

function renderQuestion() {
  const question = examQuestions[currentIndex];

  document.getElementById("questionNumber").textContent =
    `PREGUNTA ${String(currentIndex + 1).padStart(2, "0")} DE ${EXAM_SIZE}`;

  // MOSTRAR TEXTO DE LA PREGUNTA
  const questionText = document.getElementById("questionText");
  questionText.textContent = question.question;

  // ======================================
  // MOSTRAR IMAGEN DE LA PREGUNTA
  // ======================================

  let questionImage = document.getElementById("questionImage");

  if (!questionImage) {
    questionImage = document.createElement("img");
    questionImage.id = "questionImage";
    questionImage.className = "question-image";
    questionImage.alt = "Imagen de la pregunta";

    questionText.insertAdjacentElement("afterend", questionImage);
  }

  if (
    typeof question.image === "string" &&
    question.image.trim() !== ""
  ) {
    const imagePath = question.image.trim();

    questionImage.style.display = "block";

    questionImage.onload = () => {
      console.log(
        `Imagen cargada en el examen: ${imagePath}`
      );
    };

    questionImage.onerror = () => {
      console.error(
        `ERROR en pregunta ${question.id}: no se encontró ${imagePath}`
      );

      questionImage.style.display = "none";
    };

    questionImage.src = imagePath;
  } else {
    questionImage.removeAttribute("src");
    questionImage.style.display = "none";
  }

  // ======================================
  // MOSTRAR LAS ALTERNATIVAS
  // ======================================

  const selected = answers[question.id];
  const options = document.getElementById("optionsContainer");

  options.innerHTML = "";

  question.options.forEach((optionText, index) => {
    const letter = LETTERS[index];
    const label = document.createElement("label");

    label.className = "option";

    // MOSTRAR CORRECCIÓN INMEDIATA
    if (selected) {
      if (letter === selected && selected === question.answer) {
        label.classList.add("correct");
      } else if (letter === selected && selected !== question.answer) {
        label.classList.add("incorrect");
      } else if (letter === question.answer) {
        label.classList.add("correct-answer");
      }
    }

    const input = document.createElement("input");

    input.type = "radio";
    input.name = `question-${question.id}`;
    input.value = letter;
    input.checked = selected === letter;

    // EVITAR CAMBIAR LA RESPUESTA DESPUÉS DE MARCARLA
    input.disabled = Boolean(selected);

    input.addEventListener("change", () => {
      if (answers[question.id]) return;

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

  // MENSAJE DE CORRECCIÓN
  if (selected) {
    const feedback = document.createElement("div");
    feedback.className = "answer-feedback";

    if (selected === question.answer) {
      feedback.classList.add("feedback-correct");
      feedback.textContent = "¡Correcto! Muy bien.";
    } else {
      feedback.classList.add("feedback-incorrect");
      feedback.textContent =
        `Respuesta incorrecta. La respuesta correcta es ${question.answer.toUpperCase()}.`;
    }

    options.appendChild(feedback);
  }

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

// ==========================================
// MOSTRAR LOS NÚMEROS DE LAS PREGUNTAS
// ==========================================

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

// ==========================================
// ACTUALIZAR PROGRESO
// ==========================================

function updateProgress() {
  const count = Object.keys(answers).length;

  document.getElementById("answeredCount").textContent = count;

  document.getElementById("progressBar").style.width =
    `${(count / EXAM_SIZE) * 100}%`;
}

// ==========================================
// BOTÓN ANTERIOR
// ==========================================

document.getElementById("previousButton").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
    renderQuestionGrid();
  }
});

// ==========================================
// BOTÓN SIGUIENTE
// ==========================================

document.getElementById("nextButton").addEventListener("click", () => {
  if (currentIndex < EXAM_SIZE - 1) {
    currentIndex++;
    renderQuestion();
    renderQuestionGrid();
  }
});

// ==========================================
// FINALIZAR SIMULACRO
// ==========================================

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

// ==========================================
// CALIFICAR EXAMEN Y MOSTRAR RESULTADOS
// ==========================================

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
// ==========================================
// VENTANA DE APROBADO O DESAPROBADO
// ==========================================

const approvalScreen = document.getElementById("approvalScreen");
const approvalTitle = document.getElementById("approvalTitle");
const approvalMessage = document.getElementById("approvalMessage");
const approvalScore = document.getElementById("approvalScore");

function mostrarImagenAnimada(ruta) {
  approvalImage.classList.remove("animar");

  // Reinicia la animación
  void approvalImage.offsetWidth;

  approvalImage.src = ruta;

  approvalImage.onload = () => {
    approvalImage.classList.add("animar");
  };
}
// Condición: 35 a 40 respuestas correctas
if (correct >= 35) {
  approvalScreen.classList.remove("failed");
  approvalScreen.classList.add("approved");

  approvalTitle.textContent = "¡APROBASTE!";
  approvalMessage.textContent = "¡FELICITACIONES!";

 /*  approvalImage.src = "./imagen/aprobado.png";
  approvalMessage.alt = "Examen aprobado";*/
   mostrarImagenAnimada("imagen/aprobado.png");


} else {
  approvalScreen.classList.remove("approved");
  approvalScreen.classList.add("failed");

  approvalTitle.textContent = "¡DESAPROBASTE!";
  approvalMessage.textContent = "¡SIGUE INTENTANDO!";

  /* approvalImage.src = "./imagen/desaprobado.png";
  approvalMessage.alt = "Examen desaprobado";*/
   mostrarImagenAnimada("imagen/desaprobado.png");
}


// Mostrar puntaje
approvalScore.textContent = `${correct} / 40`;

// Mostrar ventana
showScreen("approval");
approvalScreen.classList.add(correct >= 35 ? "approved" : "failed");

// Esperar 10 segundos y mostrar resultados
setTimeout(() => {
  approvalScreen.classList.add("hidden");
  showScreen("result");
}, 5000);
}
