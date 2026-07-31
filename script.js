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

// 4. ACCURATE LIVE COUNTDOWN TIMER (YEARS, MONTHS, DAYS, HOURS, MINS, SECS)
// Change this exact start date & time: Year, Month (0 = Jan, 6 = July), Day, Hour, Minute, Second
const startDate = new Date(2022, 6, 7, 0, 0, 0); 

function updateTimer() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById('years').innerText = years < 10 ? '0' + years : years;
  document.getElementById('months').innerText = months < 10 ? '0' + months : months;
  document.getElementById('days').innerText = days < 10 ? '0' + days : days;
  document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}
setInterval(updateTimer, 1000);

// 5. COMPLIMENTS GENERATOR
const compliments = [
  "Your smile is my absolute favorite thing in the universe.",
  "You are genuinely the most gorgeous person I have ever seen.",
  "I love how your eyes light up whenever you laugh.",
  "You are not just my girlfriend, you are my world.",
  "Every single day with you is my absolute favorite day."
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

  fetch("https://formspree.io/f/xojgbzze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: "She accepted the Girlfriend's Day Special Request! 🎉" })
  });

  setTimeout(() => {
    nextPage(5);
  }, 1200);
}