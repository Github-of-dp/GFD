// 1. PAGE NAVIGATION LOGIC
function nextPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  const nextPageEl = document.getElementById(`page-${pageNumber}`);
  nextPageEl.classList.add('active');
  window.scrollTo(0,0);
}

// 2. START EXPERIENCE & BACKGROUND MUSIC
function startExperience() {
  const music = document.getElementById('bg-music');
  if (music) {
    music.volume = 0.5;
    music.play().catch(error => {
      console.log("Autoplay prevention bypass log:", error);
    });
  }
  nextPage(2);
}

// 3. TYPING EFFECT FOR TITLE
const titleText = "Happy Girlfriend's Day ❤️";
let charIndex = 0;

function typeTitle() {
  if (charIndex < titleText.length) {
    document.getElementById('typing-title').innerHTML += titleText.charAt(charIndex);
    charIndex++;
    setTimeout(typeTitle, 100);
  }
}
window.onload = typeTitle;

// 4. LIVE COUNTDOWN TIMER
const startDate = new Date(2022, 6, 7); 

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}
setInterval(updateTimer, 1000);

// 5. COMPLIMENTS GENERATOR
const compliments = [
  "Your smile is my absolute favorite thing in the world.",
  "You make long distance feel so effortless and worth it.",
  "I love the way your eyes light up when you're excited.",
  "You're not just my girlfriend, you're my best friend.",
  "Every single day with you is better than the last."
];

function nextCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  document.getElementById('compliment-text').innerText = compliments[randomIndex];
}

// 6. DODGING "NO" BUTTON
function dodgeNoButton() {
  const noBtn = document.getElementById('no-btn');
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 60);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 60);
  
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.zIndex = '9999';
}

// 7. ACCEPT INVITATION & TRANSITION TO LETTER
function acceptInvite() {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });

  // Notify Formspree inbox
  fetch("https://formspree.io/f/xojgbzze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: "She accepted the Girlfriend's Day Special Request! 🎉" })
  });

  setTimeout(() => {
    nextPage(5);
  }, 1200);
}