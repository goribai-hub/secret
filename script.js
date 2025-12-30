const title = document.getElementById("title");
const text = document.getElementById("text");
const btn = document.getElementById("escapeBtn");
const glitchMsg = document.getElementById("glitchMsg");
const beast = document.getElementById("beast");

let glitchStarted = false;
let allowClick = false;

const messages = [
  "ACCESS DENIED",
  "REALITY COLLAPSING",
  "NO ESCAPE",
  "STOP TRYING",
  "CONTROL LOST"
];

/* Trigger glitch only after interaction */
function startGlitch() {
  if (glitchStarted) return;
  glitchStarted = true;
  showGlitch("REALITY BREACHED");

  setTimeout(() => {
    allowClick = true;
    showGlitch("CONTINUE ENABLED");
  }, 3500);
}

/* Button escape */
function escapeButton() {
  startGlitch();
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 90 + "%";
  btn.style.top = Math.random() * 90 + "%";
}

/* Mouse & touch */
btn.addEventListener("mouseenter", escapeButton);
btn.addEventListener("touchstart", escapeButton);

/* Click logic */
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!allowClick) {
    showGlitch("NOT YET");
    return;
  }
  unleashBeast();
});

/* Glitch loop */
setInterval(() => {
  if (!glitchStarted) return;

  title.textContent = "!!! REALITY ERROR !!!";
  text.textContent = "You were warned.";
  document.body.classList.add("shake");

  setTimeout(() => {
    title.textContent = "Reality is Stable.";
    text.textContent = "Everything is under control.";
    document.body.classList.remove("shake");
  }, 180);
}, 700);

/* Glitch messages */
setInterval(() => {
  if (!glitchStarted) return;
  showGlitch(messages[Math.floor(Math.random() * messages.length)]);
}, 600);

function showGlitch(msg) {
  glitchMsg.textContent = msg;
  glitchMsg.style.opacity = 1;
  setTimeout(() => {
    glitchMsg.style.opacity = 0;
  }, 400);
}

/* Beast attack */
function unleashBeast() {
  document.body.classList.add("shake");
  beast.classList.add("show");

  setTimeout(() => {
    title.textContent = "YOU SHOULDN'T HAVE CONTINUED";
    text.textContent = "It saw you.";
    glitchMsg.textContent = "NO ESCAPE";
    glitchMsg.style.opacity = 1;
  }, 500);
}
