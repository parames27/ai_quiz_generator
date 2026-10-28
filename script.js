/* AI Quiz Generator for Teachers - demo version.
   All questions come from the built-in DEMO question bank below.
   No AI model, API key, or server is used. */

// ---------- 1. DEMO QUESTION BANK ----------
// Order matters: more specific topics come first when matching.
const QUESTION_BANK = {
  prompt: {
    label: "Prompt Engineering",
    keywords: ["prompt", "prompts", "prompting", "prompt engineering"],
    questions: [
      { level: "Beginner", q: "What is a prompt?", options: ["The instruction or input you give an AI model", "A type of computer chip", "A password for an AI tool", "The final answer an AI gives"], answer: 0, explanation: "A prompt is the text (or other input) you give an AI model to tell it what you want." },
      { level: "Beginner", q: "Which prompt is clearest?", options: ["Write something about plants", "Plants", "Write a 100-word summary of photosynthesis for Grade 6 students", "Tell me stuff"], answer: 2, explanation: "Clear prompts state the task, length, topic, and audience." },
      { level: "Intermediate", q: "What is few-shot prompting?", options: ["Asking the same question few times", "Including a few examples in the prompt", "Using very short prompts", "Limiting the AI to a few words"], answer: 1, explanation: "Few-shot prompting shows the model a handful of examples so it can copy the pattern." },
      { level: "Intermediate", q: "Why might you write \"You are a science teacher\" in a prompt?", options: ["It gives the model context about role and tone", "It makes the AI faster", "It unlocks hidden features", "It stops the AI making mistakes"], answer: 0, explanation: "Assigning a role sets context and tone. It does not guarantee accuracy." },
      { level: "Advanced", q: "What does chain-of-thought prompting encourage?", options: ["Linking several chatbots together", "Reasoning step by step before answering", "Using the shortest possible answer", "Repeating the prompt many times"], answer: 1, explanation: "Asking for step-by-step reasoning can improve results on multi-step problems." },
      { level: "Advanced", q: "Your prompt gives inconsistent output. What is the best first fix?", options: ["Make the prompt shorter", "Switch tools immediately", "Add format rules, constraints and examples, then test again", "Type it in capital letters"], answer: 2, explanation: "Prompt design is iterative: add specifics, test, compare, and refine." }
    ]
  },
  genai: {
    label: "Generative AI",
    keywords: ["generative", "genai", "llm", "llms", "chatgpt", "gpt", "large language model"],
    questions: [
      { level: "Beginner", q: "What can generative AI do?", options: ["Only sort spreadsheets", "Create new content such as text or images", "Only translate sounds", "Only store data"], answer: 1, explanation: "Generative AI produces new content based on patterns learned from training data." },
      { level: "Beginner", q: "Which is an example of generative AI use?", options: ["A calculator adding numbers", "A chatbot drafting an email", "A clock showing time", "A printer printing a page"], answer: 1, explanation: "Drafting new text from a request is a typical generative AI task." },
      { level: "Intermediate", q: "What does LLM stand for?", options: ["Large Language Model", "Limited Learning Machine", "Linked Logic Module", "Long Loop Memory"], answer: 0, explanation: "An LLM is a Large Language Model, trained on huge amounts of text." },
      { level: "Intermediate", q: "What is an AI \"hallucination\"?", options: ["The AI turning itself off", "A confident but incorrect or made-up answer", "A slow response", "A picture with low resolution"], answer: 1, explanation: "Models can produce fluent text that is wrong, so outputs should be checked." },
      { level: "Advanced", q: "In language models, what is a token?", options: ["A security key", "A piece of text such as a word or word part", "A payment unit for students", "A type of image file"], answer: 1, explanation: "Models read and write text in tokens, which may be whole words or fragments." },
      { level: "Advanced", q: "What does retrieval-augmented generation (RAG) do?", options: ["Deletes old training data", "Fetches relevant documents and gives them to the model before it answers", "Makes images larger", "Trains a model from scratch each time"], answer: 1, explanation: "RAG grounds answers in retrieved documents, which can reduce made-up content." }
    ]
  },
  ml: {
    label: "Machine Learning",
    keywords: ["machine learning", "ml", "deep learning", "neural network", "neural networks", "supervised"],
    questions: [
      { level: "Beginner", q: "What is machine learning?", options: ["Computers learning patterns from data", "Building physical machines", "Typing faster on a keyboard", "Fixing broken computers"], answer: 0, explanation: "Machine learning lets systems find patterns in data instead of following only hand-written rules." },
      { level: "Beginner", q: "What is training data?", options: ["The manual for a program", "Examples a model learns from", "A list of passwords", "The model's final score"], answer: 1, explanation: "Training data is the set of examples the model uses to learn." },
      { level: "Intermediate", q: "What does supervised learning use?", options: ["Labelled examples", "No data at all", "Only images", "Random numbers only"], answer: 0, explanation: "Supervised learning learns from examples that already have correct labels." },
      { level: "Intermediate", q: "What is overfitting?", options: ["Using too little computer memory", "Memorising training data and performing poorly on new data", "Training for too short a time", "Using too many labels"], answer: 1, explanation: "An overfitted model looks great on training data but fails to generalise." },
      { level: "Advanced", q: "Why keep a separate test set?", options: ["To make training faster", "To evaluate the model on data it has not seen", "To store extra labels", "To avoid collecting more data"], answer: 1, explanation: "Unseen test data gives an honest estimate of real-world performance." },
      { level: "Advanced", q: "Which task is an example of unsupervised learning?", options: ["Predicting house prices from labelled sales", "Grouping customers by behaviour without labels", "Spam detection with labelled emails", "Recognising digits with known labels"], answer: 1, explanation: "Clustering finds structure in unlabelled data, which is unsupervised learning." }
    ]
  },
  ai: {
    label: "Artificial Intelligence",
    keywords: ["ai", "artificial intelligence"],
    questions: [
      { level: "Beginner", q: "What does AI stand for?", options: ["Automatic Internet", "Artificial Intelligence", "Advanced Input", "Applied Information"], answer: 1, explanation: "AI means Artificial Intelligence: computer systems that perform tasks that normally need human intelligence." },
      { level: "Beginner", q: "Which is an everyday example of AI?", options: ["A voice assistant answering spoken questions", "A paper notebook", "A light switch", "A basic ruler"], answer: 0, explanation: "Voice assistants use AI to understand speech and respond." },
      { level: "Intermediate", q: "What describes \"narrow AI\"?", options: ["AI that thinks like a human in every area", "AI built for one specific task", "AI with a small screen", "AI that works only offline"], answer: 1, explanation: "Almost all AI today is narrow: designed for specific tasks like translation or recommendations." },
      { level: "Intermediate", q: "What was the Turing Test designed to explore?", options: ["Battery life", "Whether a machine can converse indistinguishably from a human", "Internet speed", "How fast a computer calculates"], answer: 1, explanation: "Alan Turing proposed it as a way to think about machine intelligence." },
      { level: "Advanced", q: "Which is a major ethical concern in AI?", options: ["Bias in training data causing unfair outcomes", "Computers needing electricity", "Screens being too bright", "Keyboards being noisy"], answer: 0, explanation: "If training data is biased, AI decisions can be unfair to some groups." },
      { level: "Advanced", q: "What is the \"alignment problem\"?", options: ["Lining up text on a page", "Making sure AI goals match human intentions and values", "Connecting devices to Wi-Fi", "Sorting data alphabetically"], answer: 1, explanation: "Alignment research aims to make AI systems behave in ways people actually intend." }
    ]
  }
};

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

// ---------- 2. PAGE ELEMENTS ----------
const $ = (id) => document.getElementById(id);
const setupForm = $("setup-form"), topicInput = $("topic"), setupMsg = $("setup-message");
const quizSection = $("quiz-section"), quizForm = $("quiz-form"), quizMsg = $("quiz-message");
const questionsBox = $("questions"), resultBox = $("result"), submitBtn = $("submit-btn");

let currentQuiz = [];

// ---------- 3. HELPER FUNCTIONS ----------
function showMessage(el, text) { el.textContent = text; el.hidden = false; }
function hideMessage(el) { el.hidden = true; el.textContent = ""; }

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Finds which demo topic the teacher's text matches (or null).
function findTopic(text) {
  const t = text.toLowerCase();
  for (const key of Object.keys(QUESTION_BANK)) {
    const hit = QUESTION_BANK[key].keywords.some((k) => new RegExp("\\b" + k + "\\b").test(t));
    if (hit) return key;
  }
  return null;
}

// Picks questions closest to the chosen difficulty, then shuffles questions and answers.
function buildQuiz(key, level, count) {
  const want = LEVELS.indexOf(level);
  const picked = shuffle(QUESTION_BANK[key].questions)
    .sort((a, b) => Math.abs(LEVELS.indexOf(a.level) - want) - Math.abs(LEVELS.indexOf(b.level) - want))
    .slice(0, count);
  return shuffle(picked).map((item) => {
    const options = shuffle(item.options.map((text, i) => ({ text, correct: i === item.answer })));
    return { q: item.q, level: item.level, explanation: item.explanation, options };
  });
}

function renderQuiz() {
  questionsBox.innerHTML = "";
  currentQuiz.forEach((item, i) => {
    const fs = document.createElement("fieldset");
    fs.className = "question";
    const lg = document.createElement("legend");
    lg.textContent = `Q${i + 1}. ${item.q}`;
    fs.appendChild(lg);
    item.options.forEach((opt, j) => {
      const label = document.createElement("label");
      label.className = "option";
      const input = document.createElement("input");
      input.type = "radio"; input.name = "q" + i; input.value = j;
      const span = document.createElement("span");
      span.textContent = opt.text;
      label.append(input, span);
      fs.appendChild(label);
    });
    questionsBox.appendChild(fs);
  });
}

// ---------- 4. EVENTS ----------
// Generate Quiz
setupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  hideMessage(setupMsg);
  const topic = topicInput.value.trim();

  if (!topic) {
    showMessage(setupMsg, "Please enter a topic before generating a quiz.");
    topicInput.focus();
    return;
  }
  const key = findTopic(topic);
  if (!key) {
    const names = Object.values(QUESTION_BANK).map((t) => t.label).join(", ");
    showMessage(setupMsg, `The demo has no questions for "${topic}". Try one of these topics: ${names}.`);
    return;
  }

  const level = $("difficulty").value;
  const count = parseInt($("count").value, 10);
  currentQuiz = buildQuiz(key, level, count);

  $("quiz-title").textContent = `${QUESTION_BANK[key].label} Quiz`;
  $("quiz-meta").textContent = `Demo question bank \u00b7 ${level} \u00b7 ${currentQuiz.length} questions`;
  hideMessage(quizMsg);
  resultBox.hidden = true;
  submitBtn.disabled = false;
  renderQuiz();
  quizSection.hidden = false;
  quizSection.scrollIntoView({ behavior: "smooth" });
});

// Submit Quiz
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  hideMessage(quizMsg);

  const unanswered = currentQuiz.filter((_, i) => !quizForm.querySelector(`input[name="q${i}"]:checked`)).length;
  if (unanswered > 0) {
    showMessage(quizMsg, `Please answer every question. ${unanswered} still unanswered.`);
    return;
  }

  let score = 0;
  const fieldsets = questionsBox.querySelectorAll(".question");
  resultBox.innerHTML = "";

  currentQuiz.forEach((item, i) => {
    const chosen = parseInt(quizForm.querySelector(`input[name="q${i}"]:checked`).value, 10);
    const correct = item.options.findIndex((o) => o.correct);
    const labels = fieldsets[i].querySelectorAll(".option");
    labels.forEach((l) => (l.querySelector("input").disabled = true));
    labels[correct].classList.add("correct");
    if (chosen === correct) score++; else labels[chosen].classList.add("wrong");

    const fb = document.createElement("p");
    fb.className = "feedback " + (chosen === correct ? "good" : "bad");
    fb.textContent = (chosen === correct ? "Correct. " : `Incorrect. Correct answer: ${item.options[correct].text}. `) + item.explanation;
    fieldsets[i].appendChild(fb);
  });

  const percent = Math.round((score / currentQuiz.length) * 100);
  const title = document.createElement("p");
  title.className = "score";
  title.textContent = `Score: ${score} / ${currentQuiz.length} (${percent}%)`;
  const note = document.createElement("p");
  note.textContent = "Review the explanations under each question. Green marks the correct answer; red marks your incorrect choice.";
  resultBox.append(title, note);
  resultBox.hidden = false;
  submitBtn.disabled = true;
  resultBox.focus();
  resultBox.scrollIntoView({ behavior: "smooth" });
});

// Reset Quiz
$("reset-btn").addEventListener("click", () => {
  quizForm.reset();
  questionsBox.innerHTML = "";
  resultBox.innerHTML = "";
  resultBox.hidden = true;
  hideMessage(quizMsg);
  hideMessage(setupMsg);
  quizSection.hidden = true;
  currentQuiz = [];
  topicInput.value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
  topicInput.focus();
});

// Clickable topic suggestions
Object.values(QUESTION_BANK).forEach((t) => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "chip"; b.textContent = t.label;
  b.addEventListener("click", () => { topicInput.value = t.label; hideMessage(setupMsg); topicInput.focus(); });
  $("topic-chips").appendChild(b);
});
