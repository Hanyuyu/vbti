let TYPES = {};
let QUESTION_BANK = [];

const BASE_RARITY_WEIGHT = {
  ARCX: 0.85,
  BLTZ: 1.15,
  PIXL: 0.95,
  SYNC: 1,
  GLCH: 0.97,
  MUSE: 1.08,
  WAVE: 1.2,
  VOID: 0.78,
};

const state = {
  current: 0,
  answers: [],
};

const homeSections = document.querySelectorAll(".hero-stage, .intro-grid");
const startBtn = document.getElementById("startBtn");
const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");
const questionTitle = document.getElementById("questionTitle");
const optionsWrap = document.getElementById("options");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const resultBadge = document.getElementById("resultBadge");
const resultCode = document.getElementById("resultCode");
const resultFlavor = document.getElementById("resultFlavor");
const resultRoast = document.getElementById("resultRoast");
const resultAvatar = document.getElementById("resultAvatar");

function setHomeVisibility(hidden) {
  homeSections.forEach((section) => section.classList.toggle("hidden", hidden));
}

function clearThemeClasses() {
  Object.values(TYPES).forEach((profile) => {
    resultPanel.classList.remove(profile.theme);
  });
}

function parseEmbeddedJson(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Missing embedded config: ${id}`);
  return JSON.parse(node.textContent);
}

async function loadJson(path, fallbackId) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }
    return await response.json();
  } catch {
    return parseEmbeddedJson(fallbackId);
  }
}

function openQuiz() {
  if (!QUESTION_BANK.length) return;
  setHomeVisibility(true);
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
  quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const q = QUESTION_BANK[state.current];
  progressText.textContent = `第 ${state.current + 1} / ${QUESTION_BANK.length} 题`;
  progressBar.style.width = `${((state.current + 1) / QUESTION_BANK.length) * 100}%`;
  questionTitle.textContent = q.title;

  optionsWrap.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.type = "button";
    btn.setAttribute("aria-pressed", state.answers[state.current] === idx ? "true" : "false");
    if (state.answers[state.current] === idx) btn.classList.add("selected");
    btn.textContent = opt.text;
    btn.onclick = () => {
      state.answers[state.current] = idx;
      renderQuestion();
    };
    optionsWrap.appendChild(btn);
  });

  prevBtn.disabled = state.current === 0;
  nextBtn.disabled = state.answers[state.current] === null;
  nextBtn.textContent = state.current === QUESTION_BANK.length - 1 ? "生成结果" : "下一题";
}

function computeResult() {
  const scores = Object.fromEntries(Object.keys(TYPES).map((key) => [key, 0]));

  state.answers.forEach((answerIdx, qIdx) => {
    const option = QUESTION_BANK[qIdx].options[answerIdx];
    Object.entries(option.weight).forEach(([type, val]) => {
      scores[type] += val;
    });
  });

  Object.keys(scores).forEach((type) => {
    scores[type] *= BASE_RARITY_WEIGHT[type];
  });

  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const distribution = Object.entries(scores)
    .map(([type, score]) => ({ type, prob: (score / total) * 100 }))
    .sort((a, b) => b.prob - a.prob);

  return { primary: distribution[0].type, distribution };
}

function renderResult() {
  const { primary, distribution } = computeResult();
  const profile = TYPES[primary];

  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");
  setHomeVisibility(true);

  document.getElementById("resultType").textContent = profile.name;
  document.getElementById("resultRarity").textContent = profile.rarity;
  document.getElementById("resultDesc").textContent = profile.desc;
  resultBadge.textContent = profile.badge;
  resultCode.textContent = primary;
  resultFlavor.textContent = profile.flavor;
  resultRoast.textContent = profile.roast;
  resultAvatar.src = profile.avatar;
  resultAvatar.alt = `${profile.name} 头像`;

  clearThemeClasses();
  resultPanel.classList.add(profile.theme);

  const traitChips = document.getElementById("traitChips");
  traitChips.innerHTML = profile.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");

  const probabilityList = document.getElementById("probabilityList");
  probabilityList.innerHTML = distribution
    .map(
      ({ type, prob }) => `
      <div class="probability-row">
        <span class="probability-label">${type}</span>
        <div class="probability-bar"><span style="width:${prob.toFixed(1)}%"></span></div>
        <strong class="probability-value">${prob.toFixed(1)}%</strong>
      </div>
    `
    )
    .join("");

  const encoded = btoa(JSON.stringify(state.answers));
  history.replaceState({}, "", `${location.pathname}#a=${encoded}`);
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetAll() {
  state.current = 0;
  state.answers = Array(QUESTION_BANK.length).fill(null);
  history.replaceState({}, "", location.pathname);
  setHomeVisibility(false);
  quizPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
  clearThemeClasses();
  document.getElementById("app").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function initApp() {
  try {
    const [types, questions] = await Promise.all([
      loadJson("data/types.json", "typesConfig"),
      loadJson("data/questions.json", "questionsConfig"),
    ]);

    if (!types || typeof types !== "object" || Array.isArray(types)) {
      throw new Error("Type config is invalid");
    }
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error("Question config is invalid");
    }

    TYPES = types;
    QUESTION_BANK = questions;
    state.answers = Array(QUESTION_BANK.length).fill(null);

    startBtn.disabled = false;
    startBtn.textContent = "开始暴露你的编码本性";

    const hash = location.hash;
    if (!hash.startsWith("#a=")) return;

    try {
      const answers = JSON.parse(atob(hash.replace("#a=", "")));
      if (Array.isArray(answers) && answers.length === QUESTION_BANK.length && answers.every((x) => Number.isInteger(x))) {
        state.answers = answers;
        renderResult();
      }
    } catch {
      // ignore malformed hash
    }
  } catch {
    startBtn.textContent = "加载失败，刷新重试";
    startBtn.disabled = false;
    startBtn.onclick = () => location.reload();
  }
}

startBtn.disabled = true;
startBtn.textContent = "题库加载中...";
startBtn.onclick = openQuiz;

prevBtn.onclick = () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
};

nextBtn.onclick = () => {
  if (state.answers[state.current] === null) return;
  if (state.current === QUESTION_BANK.length - 1) {
    renderResult();
  } else {
    state.current += 1;
    renderQuestion();
  }
};

retryBtn.onclick = resetAll;

initApp();
