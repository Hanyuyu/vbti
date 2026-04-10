const TYPES = {
  ARCX: {
    name: "ARCX · 架构吟游者",
    rarity: "稀缺度：5.1%（传奇型）",
    tags: ["系统感", "长期主义", "审美洁癖"],
    desc: "你重视结构完整性与可维护性，像在写一首可执行的交响乐。你会先定义边界，再追求效率，团队会把你当成“技术主心骨”。热点潜力来自：你做的 demo 往往能从一页原型进化成产品雏形。",
    badge: "系统先于速度",
    flavor: "你会先把边界、命名和依赖关系摆平，再决定什么值得快。你不是在写 demo，你是在给未来的团队预埋秩序。",
    theme: "theme-arcx",
    avatar: "assets/avatars/arcx.svg",
  },
  BLTZ: {
    name: "BLTZ · 爆改冲刺者",
    rarity: "稀缺度：17.8%（常见型）",
    tags: ["速度", "行动派", "增长感知"],
    desc: "你擅长在模糊里抢时间，用最短路径做出第一版。你会优先“先跑起来”，再倒推工程化。你的魅力在于让团队看到可能性。热点潜力来自：你很容易做出一夜爆火的小工具。",
    badge: "先打穿，再打磨",
    flavor: "你最强的不是稳，而是冲。你习惯用真实结果换判断权，只要能把想法抬上台面，后面的结构账你愿意慢慢补。",
    theme: "theme-bltz",
    avatar: "assets/avatars/bltz.svg",
  },
  PIXL: {
    name: "PIXL · 像素咒术师",
    rarity: "稀缺度：9.6%（稀有型）",
    tags: ["体验细节", "动效敏感", "品牌感"],
    desc: "你能把冰冷功能变成有记忆点的交互，尤其在视觉、信息层级、微动效上有直觉。你讨厌“能用但难看”。热点潜力来自：结果页、分享图、Landing Page 非常出圈。",
    badge: "体验也是功能",
    flavor: "你对粗糙感异常敏感。别人觉得能用就行的页面，在你眼里只是半成品，直到节奏、情绪和品牌感都站住为止。",
    theme: "theme-pixl",
    avatar: "assets/avatars/pixl.svg",
  },
  SYNC: {
    name: "SYNC · 协作指挥官",
    rarity: "稀缺度：12.2%（少见型）",
    tags: ["组织力", "跨角色沟通", "节奏管理"],
    desc: "你是把 PM、设计、开发和 AI 工具串联起来的人。你不仅写代码，还设计协作协议。热点潜力来自：你擅长把零散灵感拉成连续迭代。",
    badge: "复杂度调度中心",
    flavor: "你天然会思考谁该先动、哪里会卡住、信息怎样对齐。你做的不只是交付，而是把混乱变成可推进的节奏。",
    theme: "theme-sync",
    avatar: "assets/avatars/sync.svg",
  },
  GLCH: {
    name: "GLCH · 漏洞赏金猎人",
    rarity: "稀缺度：11.4%（少见型）",
    tags: ["边界意识", "可靠性", "风险控制"],
    desc: "你天然会思考“哪里会坏”，在异常流程、权限、输入校验上格外敏感。你是团队的安全垫。热点潜力来自：别人上线后救火，你上线前就避免翻车。",
    badge: "上线前先拆炸弹",
    flavor: "你看到的不是 happy path，而是系统最可能翻车的裂缝。你未必最显眼，但你经常决定一个产品能不能活过第一波流量。",
    theme: "theme-glch",
    avatar: "assets/avatars/glch.svg",
  },
  MUSE: {
    name: "MUSE · 提示炼金术士",
    rarity: "稀缺度：14.7%（常见型）",
    tags: ["Prompt 设计", "实验精神", "跨模型迁移"],
    desc: "你会把需求翻译成可执行 prompt，懂得如何让模型给出更稳定输出。你很会搭“人+AI”工作流。热点潜力来自：同样时间，你总能产出更多版本。",
    badge: "把模型变成外脑",
    flavor: "你不迷信某个工具，但很会设计人和模型之间的分工。你关注输入方式、反馈回路和版本迭代，像在调一台会思考的机器。",
    theme: "theme-muse",
    avatar: "assets/avatars/muse.svg",
  },
  WAVE: {
    name: "WAVE · 社区造浪者",
    rarity: "稀缺度：21.3%（高频型）",
    tags: ["叙事能力", "传播感", "用户洞察"],
    desc: "你非常关注“可分享性”，在命名、文案、梗感上天赋突出。你做产品总想着如何让用户愿意转发。热点潜力来自：你会主动把功能包装成话题。",
    badge: "产品先形成话题",
    flavor: "你对传播链路有天然直觉。你会主动想标题、梗点、截图位和分享场景，因为你知道被看见本身也是产品的一部分。",
    theme: "theme-wave",
    avatar: "assets/avatars/wave.svg",
  },
  VOID: {
    name: "VOID · 极客黑箱体",
    rarity: "稀缺度：7.9%（史诗型）",
    tags: ["深度钻研", "底层掌控", "少社交高产出"],
    desc: "你享受和系统深度对话，会把难题拆到极细。你不追热点，但经常做出别人看不懂却很强的东西。热点潜力来自：偶尔一次公开分享，直接封神。",
    badge: "深潜到底层",
    flavor: "你不爱吵，也不急着展示。你会默默把问题拆开、下潜、复原，再带着一套别人没想到的解决方案浮上来。",
    theme: "theme-void",
    avatar: "assets/avatars/void.svg",
  },
};

const QUESTION_BANK = [
  {
    title: "群里突然冒出一个“今晚就能爆”的点子，你第一反应是？",
    options: [
      { text: "直接起一个最小 demo，把想法先变成能点的东西", weight: { BLTZ: 3, WAVE: 1 } },
      { text: "先画系统边界，确认这个点子会牵动哪些模块", weight: { ARCX: 3, VOID: 1 } },
      { text: "先想首屏体验、视觉记忆点和用户第一眼会不会停留", weight: { PIXL: 3, WAVE: 1 } },
      { text: "先拉齐目标、角色分工和交付节奏，避免大家冲成四个方向", weight: { SYNC: 3, MUSE: 1 } },
    ],
  },
  {
    title: "AI 丢给你一段“能跑但味道不对”的代码，你会怎么处理？",
    options: [
      { text: "先修到够用，别让它挡住主流程推进", weight: { BLTZ: 2, MUSE: 1 } },
      { text: "宁可多花一轮，也要改成自己能长期维护的结构", weight: { ARCX: 3 } },
      { text: "先补边界校验和失败场景，不然这段代码不算可上线", weight: { GLCH: 3 } },
      { text: "回头继续调 prompt 或换模型，让下一版从源头更像样", weight: { MUSE: 3, VOID: 1 } },
    ],
  },
  {
    title: "一个新功能上线后，你最想先看到哪类反馈？",
    options: [
      { text: "它有没有被真正留下来，后面还能不能复用放大", weight: { ARCX: 2, SYNC: 1 } },
      { text: "有没有人主动截图、转发、二创，形成讨论热度", weight: { WAVE: 3 } },
      { text: "用户会不会说“这个页面真顺，真想继续点下去”", weight: { PIXL: 3 } },
      { text: "错误率、报警和异常链路是否稳定，没有留下隐患", weight: { GLCH: 3 } },
    ],
  },
  {
    title: "离上线还有 2 小时，你最可能卡在哪一步？",
    options: [
      { text: "还在抠动效、排版和那句决定转化率的文案", weight: { PIXL: 2, WAVE: 1 } },
      { text: "还在排查监控、容错、权限和回滚方案有没有漏", weight: { GLCH: 3 } },
      { text: "还在催收尾、补上下游沟通，让所有人同步在一个节奏里", weight: { SYNC: 3 } },
      { text: "还想趁热再塞一个会让 demo 更炸的新点", weight: { BLTZ: 2, MUSE: 1 } },
    ],
  },
  {
    title: "哪种工作状态最让你觉得自己在发光？",
    options: [
      { text: "高频试错、快速发布，用真实反馈不断修方向", weight: { BLTZ: 2, WAVE: 1 } },
      { text: "深度沉浸很久，把问题一次性做透做干净", weight: { VOID: 3, ARCX: 1 } },
      { text: "和 AI 持续对话，像在带着第二大脑并肩工作", weight: { MUSE: 3 } },
      { text: "多人并行推进，而我刚好能做那个中枢节点", weight: { SYNC: 3 } },
    ],
  },
  {
    title: "同事最可能怎么形容你写代码时的气场？",
    options: [
      { text: "冷静、克制、写每一层都像在安排结构秩序", weight: { ARCX: 2, VOID: 1 } },
      { text: "快、猛、敢，像在浪头上直接把东西劈出来", weight: { BLTZ: 3 } },
      { text: "细，太细了，连按钮停顿 100ms 都会被你抓出来", weight: { PIXL: 3 } },
      { text: "很会讲用户故事，知道什么东西一发就有人讨论", weight: { WAVE: 2, SYNC: 1 } },
    ],
  },
  {
    title: "线上突然冒出一个复杂 bug，你的本能是？",
    options: [
      { text: "先抓日志、边界条件和复现路径，把事故面压小", weight: { GLCH: 3 } },
      { text: "先切降级或隔离模块，让主要功能活下来再说", weight: { BLTZ: 2, SYNC: 1 } },
      { text: "让 AI 帮我快速列出排查树和可能漏掉的原因", weight: { MUSE: 3 } },
      { text: "从底层模型重新理解一遍，直到 bug 的根因彻底说得通", weight: { VOID: 2, ARCX: 1 } },
    ],
  },
  {
    title: "如果要做一个天生适合传播的功能，你会优先打磨哪一层？",
    options: [
      { text: "结果可视化、标题、截图位和一键分享链路", weight: { WAVE: 3, PIXL: 1 } },
      { text: "模板化和可组合能力，让用户自然愿意二创", weight: { MUSE: 2, SYNC: 1 } },
      { text: "交互摩擦必须足够低，传播前先保证体验没有阻力", weight: { ARCX: 2, PIXL: 1 } },
      { text: "先补风控和稳定性，不然火了反而会更危险", weight: { GLCH: 2, VOID: 1 } },
    ],
  },
  {
    title: "放进一个小团队里，你最自然会站到哪个位置？",
    options: [
      { text: "主程或架构位，负责让系统从一开始就站得住", weight: { ARCX: 3 } },
      { text: "实验驱动位，边冲边测，负责把机会快速打穿", weight: { BLTZ: 2, WAVE: 1 } },
      { text: "设计工程师或体验 owner，负责把产品做出记忆点", weight: { PIXL: 3 } },
      { text: "项目中枢位，负责把人、需求和资源编排成闭环", weight: { SYNC: 3 } },
    ],
  },
  {
    title: "下面哪句话最像你会认真说出口的话？",
    options: [
      { text: "“代码是长期资产，不是一次性的交差文本。”", weight: { ARCX: 2, GLCH: 1 } },
      { text: "“先发出去，真实世界会比会议室更快给答案。”", weight: { BLTZ: 2, WAVE: 1 } },
      { text: "“体验不是包装，它本来就是功能的一部分。”", weight: { PIXL: 2, MUSE: 1 } },
      { text: "“我想把 AI 调成稳定、可复用的第二大脑。”", weight: { MUSE: 2, VOID: 1 } },
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

const PRODUCT_LINK = "vbti.site";
const TYPE_THEME_COLORS = {
  ARCX: { main: "#c4b5fd", alt: "#ffffff", ink: "#000000" },
  BLTZ: { main: "#ff6b6b", alt: "#ffd93d", ink: "#000000" },
  PIXL: { main: "#ffd93d", alt: "#ffffff", ink: "#000000" },
  SYNC: { main: "#c4b5fd", alt: "#ff6b6b", ink: "#000000" },
  GLCH: { main: "#000000", alt: "#ff6b6b", ink: "#000000" },
  MUSE: { main: "#ff6b6b", alt: "#c4b5fd", ink: "#000000" },
  WAVE: { main: "#ffd93d", alt: "#ff6b6b", ink: "#000000" },
  VOID: { main: "#000000", alt: "#ffffff", ink: "#000000" },
};

const state = {
  current: 0,
  answers: Array(QUESTION_BANK.length).fill(null),
};

const homeSections = document.querySelectorAll(".hero-stage, .intro-grid");
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
const savePosterBtn = document.getElementById("savePosterBtn");
const resultBadge = document.getElementById("resultBadge");
const resultCode = document.getElementById("resultCode");
const resultFlavor = document.getElementById("resultFlavor");
const resultAvatar = document.getElementById("resultAvatar");

function setHomeVisibility(hidden) {
  homeSections.forEach((section) => section.classList.toggle("hidden", hidden));
}

function clearThemeClasses() {
  Object.values(TYPES).forEach((profile) => {
    resultPanel.classList.remove(profile.theme);
  });
}

function openQuiz() {
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

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = Array.from(text);
  let line = "";
  let currentY = y;

  chars.forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = char;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });

  if (line) {
    ctx.fillText(line, x, currentY);
  }

  return currentY;
}

function loadCanvasSafeImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = `${src}${src.includes("?") ? "&" : "?"}v=${Date.now()}`;
  });
}

function paintPoster(ctx, primary, profile, palette, avatarImage) {
  const canvas = ctx.canvas;

  ctx.fillStyle = "#fffdf5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 4;
  for (let x = 0; x < canvas.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.08)";
    ctx.stroke();
  }

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(72, 72, 936, 1296);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 8;
  ctx.strokeRect(72, 72, 936, 1296);

  if (avatarImage) {
    ctx.drawImage(avatarImage, 120, 120, 150, 150);
  } else {
    ctx.fillStyle = palette.alt;
    ctx.fillRect(120, 120, 150, 150);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 8;
    ctx.strokeRect(120, 120, 150, 150);
    ctx.fillStyle = "#000000";
    ctx.font = "900 28px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(primary, 195, 195);
  }
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 8;
  ctx.strokeRect(120, 120, 150, 150);

  ctx.fillStyle = "#000000";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.font = "900 32px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  ctx.fillText("DOMINANT TYPE", 310, 122);

  ctx.fillStyle = palette.main;
  ctx.fillRect(310, 174, 300, 70);
  ctx.strokeRect(310, 174, 300, 70);
  ctx.fillStyle = primary === "VOID" ? "#ffffff" : "#000000";
  ctx.font = "900 28px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  ctx.fillText(profile.badge, 336, 196);

  ctx.fillStyle = primary === "VOID" ? "#000000" : palette.main;
  ctx.fillRect(742, 120, 150, 150);
  ctx.strokeRect(742, 120, 150, 150);
  ctx.fillStyle = primary === "VOID" ? "#ffffff" : "#000000";
  ctx.font = "900 60px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(primary, 817, 196);

  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#000000";
  ctx.font = "900 72px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  let lastY = wrapText(ctx, profile.name, 120, 328, 770, 82);

  ctx.fillStyle = "#FFD93D";
  ctx.fillRect(120, lastY + 42, 360, 74);
  ctx.strokeRect(120, lastY + 42, 360, 74);
  ctx.fillStyle = "#000000";
  ctx.font = "900 30px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  ctx.fillText(profile.rarity, 146, lastY + 64);

  ctx.font = "700 31px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  lastY = wrapText(ctx, profile.desc, 120, lastY + 156, 800, 48);

  let tagX = 120;
  let tagY = lastY + 62;
  profile.tags.forEach((tag) => {
    const width = Math.ceil(ctx.measureText(tag).width) + 56;
    if (tagX + width > 920) {
      tagX = 120;
      tagY += 66;
    }
    ctx.fillStyle = palette.alt;
    ctx.fillRect(tagX, tagY, width, 48);
    ctx.strokeRect(tagX, tagY, width, 48);
    ctx.fillStyle = "#000000";
    ctx.font = "900 24px 'Space Grotesk', 'Noto Sans SC', sans-serif";
    ctx.fillText(tag, tagX + 20, tagY + 31);
    tagX += width + 16;
  });

  const flavorY = tagY + 86;
  ctx.fillStyle = palette.main;
  ctx.fillRect(120, flavorY, 772, 250);
  ctx.strokeRect(120, flavorY, 772, 250);
  ctx.fillStyle = primary === "VOID" ? "#ffffff" : "#000000";
  ctx.font = "900 28px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  ctx.fillText("典型行为", 150, flavorY + 28);
  ctx.font = "700 31px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  wrapText(ctx, profile.flavor, 150, flavorY + 82, 710, 48);

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(120, 1250);
  ctx.lineTo(892, 1250);
  ctx.stroke();

  ctx.fillStyle = "#000000";
  ctx.font = "900 28px 'Space Grotesk', 'Noto Sans SC', sans-serif";
  ctx.fillText(`测测你的 Vibe Coding 人格 · ${PRODUCT_LINK}`, 120, 1280);
}

async function downloadPoster(primary, profile) {
  const palette = TYPE_THEME_COLORS[primary];
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1440;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let avatarImage = null;
  try {
    avatarImage = await loadCanvasSafeImage(profile.avatar);
  } catch {
    avatarImage = null;
  }
  paintPoster(ctx, primary, profile, palette, avatarImage);

  const link = document.createElement("a");
  link.download = `vbti-${primary.toLowerCase()}.png`;
  try {
    link.href = canvas.toDataURL("image/png");
  } catch {
    paintPoster(ctx, primary, profile, palette, null);
    link.href = canvas.toDataURL("image/png");
  }
  document.body.appendChild(link);
  link.click();
  link.remove();
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
  resultAvatar.src = profile.avatar;
  resultAvatar.alt = `${profile.name} 头像`;

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
  savePosterBtn.textContent = "一键保存分享图";
  document.getElementById("app").scrollIntoView({ behavior: "smooth", block: "start" });
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
savePosterBtn.onclick = async () => {
  try {
    const { primary } = computeResult();
    const profile = TYPES[primary];
    await downloadPoster(primary, profile);
    savePosterBtn.textContent = "分享图已保存";
    setTimeout(() => (savePosterBtn.textContent = "一键保存分享图"), 1500);
  } catch {
    savePosterBtn.textContent = "保存失败，请重试";
    setTimeout(() => (savePosterBtn.textContent = "一键保存分享图"), 1800);
  }
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
