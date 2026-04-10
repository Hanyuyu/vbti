const TYPES = {
  ARCX: {
    name: "ARCX · 架构吟游者",
    rarity: "稀缺度：5.1%（传奇型）",
    tags: ["系统感", "长期主义", "审美洁癖"],
    desc: "你重视结构完整性与可维护性，像在写一首可执行的交响乐。你会先定义边界，再追求效率，团队会把你当成“技术主心骨”。热点潜力来自：你做的 demo 往往能从一页原型进化成产品雏形。",
  },
  BLTZ: {
    name: "BLTZ · 爆改冲刺者",
    rarity: "稀缺度：17.8%（常见型）",
    tags: ["速度", "行动派", "增长感知"],
    desc: "你擅长在模糊里抢时间，用最短路径做出第一版。你会优先“先跑起来”，再倒推工程化。你的魅力在于让团队看到可能性。热点潜力来自：你很容易做出一夜爆火的小工具。",
  },
  PIXL: {
    name: "PIXL · 像素咒术师",
    rarity: "稀缺度：9.6%（稀有型）",
    tags: ["体验细节", "动效敏感", "品牌感"],
    desc: "你能把冰冷功能变成有记忆点的交互，尤其在视觉、信息层级、微动效上有直觉。你讨厌“能用但难看”。热点潜力来自：结果页、分享图、Landing Page 非常出圈。",
  },
  SYNC: {
    name: "SYNC · 协作指挥官",
    rarity: "稀缺度：12.2%（少见型）",
    tags: ["组织力", "跨角色沟通", "节奏管理"],
    desc: "你是把 PM、设计、开发和 AI 工具串联起来的人。你不仅写代码，还设计协作协议。热点潜力来自：你擅长把零散灵感拉成连续迭代。",
  },
  GLCH: {
    name: "GLCH · 漏洞赏金猎人",
    rarity: "稀缺度：11.4%（少见型）",
    tags: ["边界意识", "可靠性", "风险控制"],
    desc: "你天然会思考“哪里会坏”，在异常流程、权限、输入校验上格外敏感。你是团队的安全垫。热点潜力来自：别人上线后救火，你上线前就避免翻车。",
  },
  MUSE: {
    name: "MUSE · 提示炼金术士",
    rarity: "稀缺度：14.7%（常见型）",
    tags: ["Prompt 设计", "实验精神", "跨模型迁移"],
    desc: "你会把需求翻译成可执行 prompt，懂得如何让模型给出更稳定输出。你很会搭“人+AI”工作流。热点潜力来自：同样时间，你总能产出更多版本。",
  },
  WAVE: {
    name: "WAVE · 社区造浪者",
    rarity: "稀缺度：21.3%（高频型）",
    tags: ["叙事能力", "传播感", "用户洞察"],
    desc: "你非常关注“可分享性”，在命名、文案、梗感上天赋突出。你做产品总想着如何让用户愿意转发。热点潜力来自：你会主动把功能包装成话题。",
  },
  VOID: {
    name: "VOID · 极客黑箱体",
    rarity: "稀缺度：7.9%（史诗型）",
    tags: ["深度钻研", "底层掌控", "少社交高产出"],
    desc: "你享受和系统深度对话，会把难题拆到极细。你不追热点，但经常做出别人看不懂却很强的东西。热点潜力来自：偶尔一次公开分享，直接封神。",
  },
};

const QUESTION_BANK = [
  {
    title: "面对一个新点子，你第一步通常是？",
    options: [
      { text: "先搭最小可用 demo，马上跑起来", weight: { BLTZ: 3, WAVE: 1 } },
      { text: "先梳理架构边界和关键模块", weight: { ARCX: 3, VOID: 1 } },
      { text: "先画体验流程和视觉感觉板", weight: { PIXL: 3, WAVE: 1 } },
      { text: "先写协作分工，让团队进入状态", weight: { SYNC: 3, MUSE: 1 } },
    ],
  },
  {
    title: "AI 给了你一段“能跑但一般”的代码，你会？",
    options: [
      { text: "直接改几处，继续推进功能", weight: { BLTZ: 2, MUSE: 1 } },
      { text: "重构成我认可的结构", weight: { ARCX: 3 } },
      { text: "先加测试和边界校验", weight: { GLCH: 3 } },
      { text: "反复优化 prompt 直到更优输出", weight: { MUSE: 3, VOID: 1 } },
    ],
  },
  {
    title: "你最在意项目的哪种反馈？",
    options: [
      { text: "留存与复用率", weight: { ARCX: 2, SYNC: 1 } },
      { text: "社媒传播和讨论热度", weight: { WAVE: 3 } },
      { text: "视觉口碑和“好看好用”", weight: { PIXL: 3 } },
      { text: "故障率和线上稳定性", weight: { GLCH: 3 } },
    ],
  },
  {
    title: "上线前最后 2 小时，你最可能在做什么？",
    options: [
      { text: "抠细节动效和文案措辞", weight: { PIXL: 2, WAVE: 1 } },
      { text: "检查监控、容错和回滚方案", weight: { GLCH: 3 } },
      { text: "协调大家收尾、统一节奏", weight: { SYNC: 3 } },
      { text: "再塞一个高价值新功能", weight: { BLTZ: 2, MUSE: 1 } },
    ],
  },
  {
    title: "你理想的工作状态是？",
    options: [
      { text: "高频试错，快速发布", weight: { BLTZ: 2, WAVE: 1 } },
      { text: "深度沉浸，一次做透", weight: { VOID: 3, ARCX: 1 } },
      { text: "边做边和 AI 共创", weight: { MUSE: 3 } },
      { text: "团队并行推进，我做中枢", weight: { SYNC: 3 } },
    ],
  },
  {
    title: "别人评价你写代码时的 vibe，最像：",
    options: [
      { text: "冷静、克制、像工程师诗人", weight: { ARCX: 2, VOID: 1 } },
      { text: "快、猛、敢，像黑客冲浪", weight: { BLTZ: 3 } },
      { text: "精致、细腻、懂审美", weight: { PIXL: 3 } },
      { text: "会讲故事，懂用户心理", weight: { WAVE: 2, SYNC: 1 } },
    ],
  },
  {
    title: "遇到复杂 bug 时，你的本能是？",
    options: [
      { text: "从日志和边界条件逆推", weight: { GLCH: 3 } },
      { text: "快速隔离模块，先让功能恢复", weight: { BLTZ: 2, SYNC: 1 } },
      { text: "让 AI 辅助生成多种排查方案", weight: { MUSE: 3 } },
      { text: "彻底复盘，把系统模型重建一遍", weight: { VOID: 2, ARCX: 1 } },
    ],
  },
  {
    title: "如果要做一个“可传播”的产品功能，你会优先？",
    options: [
      { text: "结果可视化 + 一键分享", weight: { WAVE: 3, PIXL: 1 } },
      { text: "可组合模板，便于二创", weight: { MUSE: 2, SYNC: 1 } },
      { text: "把基础体验做到几乎无摩擦", weight: { ARCX: 2, PIXL: 1 } },
      { text: "加反作弊和稳定保障", weight: { GLCH: 2, VOID: 1 } },
    ],
  },
  {
    title: "你在团队里的天然位置更像？",
    options: [
      { text: "主程/架构", weight: { ARCX: 3 } },
      { text: "增长黑客/实验 PM", weight: { BLTZ: 2, WAVE: 1 } },
      { text: "设计工程师/体验 owner", weight: { PIXL: 3 } },
      { text: "技术 PM/项目驱动者", weight: { SYNC: 3 } },
    ],
  },
  {
    title: "哪句话最能代表你？",
    options: [
      { text: "“代码是长期资产，不是一次性文档。”", weight: { ARCX: 2, GLCH: 1 } },
      { text: "“先发出去，真实反馈才是答案。”", weight: { BLTZ: 2, WAVE: 1 } },
      { text: "“体验本身就是功能的一部分。”", weight: { PIXL: 2, MUSE: 1 } },
      { text: "“把 AI 调成我的第二大脑。”", weight: { MUSE: 2, VOID: 1 } },
    ],
  },
];

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
  answers: Array(QUESTION_BANK.length).fill(null),
};

const startBtn = document.getElementById("startBtn");
const howBtn = document.getElementById("howBtn");
const howDialog = document.getElementById("howDialog");
const closeHow = document.getElementById("closeHow");
const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");
const questionTitle = document.getElementById("questionTitle");
const optionsWrap = document.getElementById("options");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const copyBtn = document.getElementById("copyBtn");
const linkBtn = document.getElementById("linkBtn");

function openQuiz() {
  document.querySelector(".hero").classList.add("hidden");
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
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
  const scores = Object.fromEntries(Object.keys(TYPES).map((k) => [k, 0]));

  state.answers.forEach((answerIdx, qIdx) => {
    const option = QUESTION_BANK[qIdx].options[answerIdx];
    Object.entries(option.weight).forEach(([type, val]) => {
      scores[type] += val;
    });
  });

  Object.keys(scores).forEach((type) => {
    scores[type] *= BASE_RARITY_WEIGHT[type];
  });

  const total = Object.values(scores).reduce((s, n) => s + n, 0);
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

  document.getElementById("resultType").textContent = profile.name;
  document.getElementById("resultRarity").textContent = profile.rarity;
  document.getElementById("resultDesc").textContent = profile.desc;

  const traitChips = document.getElementById("traitChips");
  traitChips.innerHTML = profile.tags.map((tag) => `<span class="chip">${tag}</span>`).join("");

  const probabilityList = document.getElementById("probabilityList");
  probabilityList.innerHTML = distribution
    .map(
      ({ type, prob }) => `
      <div class="probability-row">
        <span>${type}</span>
        <div class="probability-bar"><span style="width:${prob.toFixed(1)}%"></span></div>
        <strong>${prob.toFixed(1)}%</strong>
      </div>
    `
    )
    .join("");

  const shareText = `我的 VBTI 是 ${profile.name} ｜${profile.rarity}。\n${profile.desc}\n来测你的 vibe coding 人格：${location.origin}${location.pathname}`;
  document.getElementById("shareText").textContent = shareText;

  const encoded = btoa(JSON.stringify(state.answers));
  history.replaceState({}, "", `${location.pathname}#a=${encoded}`);
}

function resetAll() {
  state.current = 0;
  state.answers = Array(QUESTION_BANK.length).fill(null);
  history.replaceState({}, "", location.pathname);
  document.querySelector(".hero").classList.remove("hidden");
  quizPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
}

startBtn.onclick = openQuiz;
howBtn.onclick = () => howDialog.showModal();
closeHow.onclick = () => howDialog.close();
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

copyBtn.onclick = async () => {
  const text = document.getElementById("shareText").textContent;
  await navigator.clipboard.writeText(text);
  copyBtn.textContent = "已复制 ✅";
  setTimeout(() => (copyBtn.textContent = "复制结果文案"), 1500);
};

linkBtn.onclick = async () => {
  await navigator.clipboard.writeText(location.href);
  linkBtn.textContent = "链接已复制 ✅";
  setTimeout(() => (linkBtn.textContent = "复制结果链接"), 1500);
};

(function initFromHash() {
  const hash = location.hash;
  if (!hash.startsWith("#a=")) return;
  try {
    const ans = JSON.parse(atob(hash.replace("#a=", "")));
    if (Array.isArray(ans) && ans.length === QUESTION_BANK.length && ans.every((x) => Number.isInteger(x))) {
      state.answers = ans;
      renderResult();
    }
  } catch {
    // ignore
  }
})();
