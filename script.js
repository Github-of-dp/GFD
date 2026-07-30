// 1. REASON GENERATOR (Customize these with your inside jokes!)
const reasons = [
  "Your beautiful laugh that brightens up my whole day.",
  "How we can talk for hours without noticing time fly.",
  "Your constant support, warmth, and sweetness.",
  "The way you make long distance feel so easy.",
  "All our cute inside jokes that nobody else gets!"
];

function generateReason() {
  const randomIndex = Math.floor(Math.random() * reasons.length);
  document.getElementById('reason-text').innerText = reasons[randomIndex];
}

// 2. FLOATING "NO" BUTTON (DODGE EFFECT)
function dodgeNoButton() {
  const noBtn = document.getElementById('no-btn');
  // Calculate random coordinates on screen so she can never click it
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40);
  
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// 3. ACCEPT VIRTUAL DATE & CONFETTI
function acceptInvite() {
  // Trigger Confetti Celebration
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });

  // Automatically send an alert to your Formspree inbox that she said YES!
  fetch("https://formspree.io/f/xojgbzze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "She clicked YES to the Virtual Date! 🎉" })
  });

  // Smooth scroll down to the Love Letter
  document.getElementById('letter-section').scrollIntoView({ behavior: 'smooth' });
}