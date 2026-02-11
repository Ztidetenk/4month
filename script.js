const reasons = [
  "Because you try even when things are hard.",
  "Because you chose me when you could've chosen easier.",
  "Because even long distance feels close with you.",
  "Because your heart stays kind, even in chaos.",
  "Because your texts can reset my whole day.",
  "Because you make ordinary moments feel like memories.",
  "Because you listen past words and hear feelings.",
  "Because you keep growing, and it inspires me.",
  "Because your loyalty is louder than promises.",
  "Because you're soft without being weak.",
  "Because you care deeply, even when it's hard.",
  "Because you stay, especially on difficult days.",
  "Because you see beauty where others rush past.",
  "Because you make distance feel temporary.",
  "Because your love is patient and brave.",
  "Because you turn silence into comfort.",
  "Because you remember little things that matter.",
  "Because you're honest, even when it's scary.",
  "Because your presence feels like home.",
  "Because you believe in us with your whole heart.",
  "Because you make hard conversations gentle.",
  "Because your effort never goes unnoticed.",
  "Because your smile feels like sunrise.",
  "Because you're my peace and my spark.",
  "Because you never stop showing up.",
  "Because your voice calms every storm in me.",
  "Because you're both dreamer and doer.",
  "Because you love me in ways I didn't know I needed.",
  "Because your strength is quiet and real.",
  "Because you protect what we have.",
  "Because you're thoughtful in all the small ways.",
  "Because you're beautifully, fully you.",
  "Because you make waiting worth it.",
  "Because your affection feels sincere.",
  "Because you make forever feel possible.",
  "Because you choose understanding over ego.",
  "Because with you, time feels meaningful.",
  "Because your spirit makes love feel easy.",
  "Because no distance has ever changed my choice.",
  "Because my favorite future still has you in it."
];

const finalLine = "I choose you. Every version. Every distance.";
const postFourthLabel = "You still didn’t get the best one.";

let clickCount = 0;
let reasonIndex = 0;

const bubbles = document.getElementById("bubbles");
const reasonButton = document.getElementById("reasonButton");
const reasonOutput = document.getElementById("reasonOutput");
const finalMessage = document.getElementById("finalMessage");
const clickCountLabel = document.getElementById("clickCount");
const copyFinalBtn = document.getElementById("copyFinalBtn");

function animateText(node, text) {
  node.textContent = text;
  node.classList.remove("fade-in");
  void node.offsetWidth;
  node.classList.add("fade-in");
}

function createBubbles(count) {
  for (let i = 0; i < count; i += 1) {
    const bubble = document.createElement("span");
    const size = 6 + Math.random() * 18;
    bubble.className = "bubble";
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${5 + Math.random() * 8}s`;
    bubble.style.animationDelay = `${Math.random() * 4}s`;
    bubbles.appendChild(bubble);
  }
}

function getNextReason() {
  const reason = reasons[reasonIndex % reasons.length];
  reasonIndex += 1;
  return reason;
}

function updateClickCount() {
  clickCountLabel.textContent = `Clicks: ${clickCount}`;
}
async function copyFinalMessage() {
  if (!finalMessage.textContent) {
    animateText(finalMessage, "Generate the final line first 💙");
    return;
  }

  try {
    await navigator.clipboard.writeText(finalMessage.textContent);
    animateText(finalMessage, "Final message copied 💙");
    setTimeout(() => animateText(finalMessage, finalLine), 900);
  } catch {
    animateText(finalMessage, "Couldn't copy on this browser, but it's still yours 💙");
  }
}

reasonButton.addEventListener("click", () => {
  clickCount += 1;
  updateClickCount();

  if (reasonIndex < reasons.length) {
    animateText(reasonOutput, getNextReason());
    finalMessage.textContent = "";

    if (clickCount === 4) {
      reasonButton.textContent = postFourthLabel;
    }
    return;
  }

  animateText(finalMessage, finalLine);
});

copyFinalBtn.addEventListener("click", copyFinalMessage);

createBubbles(90);
updateClickCount();
