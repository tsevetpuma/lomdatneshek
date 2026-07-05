
const questions = [
  {
    question: "ציין שלושה עקרונות לביצוע סחיטת הדק נכונה",
    answers: ["סחיטה אחידה", "סחיטה עקבית", "חידוש קשר", "מיקום האצבע"],
    correct: [0, 1, 2]
  },
  {
    question: "מהם היתרונות של מצב שכיבה",
    answers: ["חשוף יחסית למצבים אחרים", "לא חשוף", "יציב", "יציב ביחס למצב כריעה"],
    correct: [1, 2]
  },
  {
    question: "מהם החסרונות של מצב שכיבה",
    answers: ["כניסה ויציאה איטית מהמצב", "לא ניתן להיכנס בכל מצב שטח", "מתאים רק לחלק מהיורים", "לא יציב"],
    correct: [0, 1]
  },
   {
    question: "מהם היתרונות של מצב כריעה",
    answers: ["יותר יציב מעמידה", "יותר יציב משכיבה", "כניסה יותר מהירה למצב ביחס לעמידה", "פחות חשוף מעמידה"],
    correct: [0, 3]
  },
   {
    question: "מהם החסרונות של מצב כריעה",
    answers: ["פחות יציב משכיבה", "לא נוח", "יותר חשוף משכיבה", "מצב לא יציב ביחס לשאר המצבים"],
    correct: [0, 1, 2]
  },
   {
    question: "מהם היתרונות של מצב עמידה",
    answers: ["המצב הכי יציב", "יותר מהיר לכניסה ביחס לשכיבה", "כניסה ויציאה מהירים למצב", "ניתן להיכנס בכל תוואי שטח"],
    correct: [2, 3]
  },
   {
    question: "מהן החסרונות של מצב עמידה",
    answers: ["חשוף ביחס לעמידה", "לא מתאים לאנשים מתחת לגובה מסוים", "מצב לא יציב", "חשוף"],
    correct: [2, 3]
  },
   {
    question: "סמן את חמשת נקודות האחיזה עם הנשק",
    answers: ["קת בשקע כתף", "לחי סחוטה על הקת", "אחיזה בידית האחיזה (מגרעת למגרעת)", "יד אוחזת במתפסים","יד אוחזת בידית הנשיאה","אמה צמודה למחסנית","קת צמודה לבית החזה","מחסנית צמודה לאמה"],
    correct: [0, 1, 2, 3, 5]
  },
   {
    question: "סמן את כל המקרים בהם הנשק ימצא במצב לבן",
    answers: ["בזמן אימונים", "בשגרה", "בחופשה", "בזמן שמירה"],
    correct: [0, 1, 2]
  },
   {
    question: "מה זה מצב שחור ?",
    answers: ["מצב שבו אין מק פורק בנשק והמחסנית בהכנס", "מצב שבו יש מק פורק בנשק ואין מחסנית", "מצב שבו יש מק פורק בנשק ומהחסנית בהכנס", "מצב שבו יש לנו כדור בקנה או אין לנו מחסנית בנשק"],
    correct: [2]
  },
   {
    question: "מתי הנשק יהיה במצב טעון?",
    answers: ["בזמן אמת בלבד", "בזמן אמת או בירי במטווח", "בשמירה ובזמן אמת בלבד", "בזמן אמת ובמצב שהמפקד המוסמך הגדיר שכך צריך להיות"],
    correct: [1]
  },
   {
    question: "איזה הוראת בטיחות לשימוש בנשק לא נכונה ?",
    answers: ["בקבלה ובמסירה של הנשק בדוק ונצור אותו כשהוא מקביל לקרקע", "אין להישען על הנשק בכלל ועל קדח הקנה בפרט", "אין לכוון, להניף, לזרוק או לטעון נשק שלא לצורך", "נשק תמיד נצור"],
    correct: [2]
  },
   {
    question: "מהו השלב הראשון בסדר הפעולות של מצב ״0״?",
    answers: ["הסטת פלג גוף תחתון בהתאם לתזוזות המטרה", "עצימת עיניים", "כניסה למצב ירי ומציאת נקודת מכוון", "נשימת 2 נשימות"],
    correct: [2]
  },
   {
    question: "ציין שני מקרים בהם נצטרך לבצע בדיקה פיזית וויזואלית לנשק?",
    answers: ["לפני עליה/ ירידה משמירה", "בכל בוקר כחלק משגרת הבוקר", "לפני שיוצאים לפעילות מבצעית", "בכל פעם שקצין הבטיחות של היחידה הורה לנו על כך"],
    correct: [0, 1]
  },
   {
    question: "כיצד נזהה מעצור ראשון?",
    answers: ["מכלול באמצע", "אי אפשר לנצור את הנשק", "מכלול מקדימה", "עצר המחלק בולט"],
    correct: [2]
  },
   {
    question: "מהם הגורמים להיווצרות המעצור הראשון?",
    answers: ["מחסנית לא הוכנסה כראוי", "בעיה בשן הפולטת", "נעילה לא מושלמת של השיניים הגורפות", "כדור עקר"],
    correct: [0, 3]
  },
   {
    question: "כיצד נתפעל מעצור ראשון?",
    answers: ["מכה על עקב המחסנית+ השלמה", "מכה על עקב המחסנית+ דריכה", "הוצאת המחסנית+ נקירה", "החלפת המחסנית הפגומה במחסנית חדשה+ דריכה"],
    correct: [1]
  },
   {
    question: "באיזה מצב גוף נתפעל מעצור ראשון?",
    answers: ["עמידה וכריעה", "שכיבה וכריעה", "רק במצב כריעה", "במצב שבו נמצאים בעת היתקלות במעצור"],
    correct: [3]
  },
   {
    question: "כיצד נזהה מעצור שני?",
    answers: ["מכלול לפנים", " מכלול לאחור", "מכלול באמצע", "הנשק טעון"],
    correct: [2]
  },
   {
    question: "מהם הגורמים למעצור שני?",
    answers: ["בעיה בשן הימנית הגורפת", "בעיה בשן החולצת", "קפיץ המחסנית מתוח מידי", "שפתי המחסנית סגורות מידי"],
    correct: [1, 2]
  },
   {
    question: "כיצד נתפעל מעצור שני?",
    answers: ["מכה על עקב המחסנית ודריכה", "הוצאת המחסנית- דריכה פעמיים- הכנסת המחסנית- דריכה", "הוצאת המחסנית- דריכה- הכנסת המחסנית- העברת הנצרה לבודדת", " מכה על עקב המחסנית- דריכה פעמיים- העברת הנצרה לבודדת"],
    correct: [1]
  },
   {
    question: "כיצד נזהה מעצור שלישי?",
    answers: ["מכלול מאחור, עצר המחלק בולט", "מכלול מאחור", "מכלול לפנים, עצר המחלק בולט", "מכלול לפנים"],
    correct: [0]
  },
   {
    question: "מהו הגורם למעצור שלישי?",
    answers: ["מחסנית מלאה יתר על המידה", "תקלה במחסנית", "בעיה בשן החולמת", "גמר תחמושת"],
    correct: [3]
  },
   {
    question: "כיצד נתפעל מעצור שלישי?",
    answers: ["הוצאת מחסנית- הכנסת מחסנית חדשה- לחיצה על עצר המחלק", "הוצאת מחסנית-הכנסת מחסנית חדשה- דריכה-לחיצה על עצר המחלק", "מכה על עקב המחסנית- לחיצה על עצר המחלק", " הוצאת המחסנית- לחיצה על עצר המחלק- הכנסת מחסנית חדשה"],
    correct: [0]
  },
   {
    question: "מהם הסיבות לפירוק הנשק ?",
    answers: ["ניקוי, שימון, מניעת פחד מירי, הכרת הנשק", "ניקוי, שימון, מניעת מעצורים בעתיד, הכרת הנשק", "נעילת הנשק, שימוש נכון בנשק, מניעת פחד מירי, הכרת הנשק", "נעילת הנשק, שימוש נכון בנשק, מניעת פחד מירי, הכרת היורה"],
    correct: [0]
  }
];


let queue = questions.map(q => ({ ...q, wasWrong: false, attempted: false }));
let currentIndex = 0;
let attemptedCount = 0;
let wrongCount = 0;
let selectedAnswers = [];
let advanceTimer = null;
let quizStarted = false;

const startScreen = document.getElementById("startScreen");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizScreen = document.getElementById("quizScreen");
const quizHeader = document.getElementById("quizHeader");
const questionCard = document.getElementById("questionCard");
const endScreen = document.getElementById("endScreen");
const restartQuizBtn = document.getElementById("restartQuizBtn");

const els = {
  questionCounter: document.getElementById("questionCounter"),
  progressFill: document.getElementById("progressFill"),
  wrongCounter: document.getElementById("wrongCounter"),
  questionText: document.getElementById("questionText"),
  questionSubtext: document.getElementById("questionSubtext"),
  answers: document.getElementById("answers")
};

function setScreenTheme(screen) {
  const body = document.body;

  if (screen === "start") {
    body.style.backgroundColor = "#d3d2d2ff";
    startScreen.style.backgroundColor = "#d3d2d2ff";
    quizScreen.style.backgroundColor = "#d3d2d2ff";
    endScreen.style.backgroundColor = "#d3d2d2ff";
  } else if (screen === "quiz") {
    body.style.backgroundColor = "#f3f3f3";
    startScreen.style.backgroundColor = "#f3f3f3";
    quizScreen.style.backgroundColor = "#f3f3f3";
    endScreen.style.backgroundColor = "#f3f3f3";
  } else if (screen === "end") {
    body.style.backgroundColor = "#d3d2d2ff";
    startScreen.style.backgroundColor = "#d3d2d2ff";
    quizScreen.style.backgroundColor = "#d3d2d2ff";
    endScreen.style.backgroundColor = "#d3d2d2ff";
  }
}

function setOverflow(mode) {
  document.documentElement.style.overflowX = "auto";
  document.body.style.overflowX = "auto";
  // document.documentElement.style.overflowY = mode;
  // document.body.style.overflowY = mode;
}

startQuizBtn.addEventListener("click", () => {
  quizStarted = true;
  setScreenTheme("quiz");
  setOverflow("auto");

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  quizHeader.classList.remove("hidden");
  questionCard.classList.remove("hidden");
  endScreen.classList.add("hidden");

  renderQuestion();
});

restartQuizBtn.addEventListener("click", () => {
  queue = questions.map(q => ({ ...q, wasWrong: false, attempted: false }));
  currentIndex = 0;
  attemptedCount = 0;
  wrongCount = 0;
  selectedAnswers = [];
  clearTimeout(advanceTimer);
  quizStarted = false;

  setScreenTheme("start");
  setOverflow("hidden");

  endScreen.classList.add("hidden");
  quizHeader.classList.add("hidden");
  questionCard.classList.add("hidden");
  quizScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  updateHeader();
});

function updateHeader() {
  const total = questions.length;
  const progress = total === 0 ? 0 : Math.round((attemptedCount / total) * 100);
  els.questionCounter.textContent = `${attemptedCount}/${total}`;
  els.progressFill.style.width = `${progress}%`;
  els.wrongCounter.textContent = wrongCount;
}

function renderQuestion() {
  clearTimeout(advanceTimer);
  selectedAnswers = [];

  if (!quizStarted) return;

  if (queue.length === 0) {
    setScreenTheme("end");
    setOverflow("hidden");
    quizHeader.classList.add("hidden");
    questionCard.classList.add("hidden");
    endScreen.classList.remove("hidden");
    return;
  }

  setScreenTheme("quiz");
  setOverflow("auto");
  quizHeader.classList.remove("hidden");
  questionCard.classList.remove("hidden");
  endScreen.classList.add("hidden");

  if (currentIndex >= queue.length) currentIndex = 0;

  const q = queue[currentIndex];
  const needed = q.correct.length;

  els.questionText.textContent = q.question;
  els.questionSubtext.textContent = needed === 1 ? "בחר תשובה אחת" : `בחר ${needed} תשובות`;
  els.answers.innerHTML = "";

  q.answers.forEach((answerText, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answerText;
    btn.onclick = () => selectAnswer(index, btn);
    els.answers.appendChild(btn);
  });

  updateHeader();
}

function selectAnswer(index, btn) {
  const q = queue[currentIndex];
  const needed = q.correct.length;
  const buttons = [...document.querySelectorAll(".answer-btn")];

  if (!q.attempted) {
    q.attempted = true;
    attemptedCount++;
    updateHeader();
  }

  if (selectedAnswers.includes(index)) return;

  selectedAnswers.push(index);

  const isThisCorrect = q.correct.includes(index);
  btn.classList.add(isThisCorrect ? "correct" : "wrong");

  if (selectedAnswers.length < needed) return;

  buttons.forEach(b => b.classList.add("disabled"));

  const selectedSorted = [...selectedAnswers].sort((a, b) => a - b);
  const correctSorted = [...q.correct].sort((a, b) => a - b);
  const isFullyCorrect =
    selectedSorted.length === correctSorted.length &&
    selectedSorted.every((v, i) => v === correctSorted[i]);

  if (isFullyCorrect) {
    if (q.wasWrong) {
      wrongCount--;
      q.wasWrong = false;
    }

    advanceTimer = setTimeout(() => {
      queue.splice(currentIndex, 1);
      if (currentIndex >= queue.length) currentIndex = 0;
      updateHeader();
      renderQuestion();
    }, 700);
  } else {
    if (!q.wasWrong) {
      q.wasWrong = true;
      wrongCount++;
      updateHeader();
    }

    advanceTimer = setTimeout(() => {
      const [wrongQuestion] = queue.splice(currentIndex, 1);
      queue.push(wrongQuestion);
      if (currentIndex >= queue.length) currentIndex = 0;
      updateHeader();
      renderQuestion();
    }, 900);
  }
}

setScreenTheme("start");
setOverflow("auto");
updateHeader();
