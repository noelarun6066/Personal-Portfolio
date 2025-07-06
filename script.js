// DARK / LIGHT MODE TOGGLE
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeIcon.textContent = "🌙";
} else {
  themeIcon.textContent = "☀️";
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeIcon.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// TYPEWRITER EFFECT
const typewriter = document.getElementById('typewriter');
const text = "B Tech Student";
let idx = 0;
function typeEffect() {
  if (idx <= text.length) {
    typewriter.textContent = text.substring(0, idx) + (idx % 2 === 0 ? "|" : "");
    idx++;
    setTimeout(typeEffect, 80);
  } else {
    typewriter.textContent = text;
  }
}
typeEffect();

// Highlight active nav link based on scroll (improved logic)
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

function activateNavByScroll() {
  let scrollPos = window.scrollY + 75; 
  let currentSectionId = null;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + currentSectionId
    );
  });
}

window.addEventListener("scroll", activateNavByScroll);
window.addEventListener("load", activateNavByScroll);