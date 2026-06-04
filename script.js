// ── Custom cursor ──
// const cursor = document.getElementById('cursor');
// document.addEventListener('mousemove', e => {
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top  = e.clientY + 'px';
// });
// document.querySelectorAll('a, button, input').forEach(el => {
//   el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
//   el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
// });

// ── Bubbles ──
const bubbleContainer = document.getElementById("bubbles");
for (let i = 0; i < 28; i++) {
  const b = document.createElement("div");
  b.className = "bubble";
  const size = Math.random() * 22 + 8;
  b.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random() * 100}%;
    animation-duration:${Math.random() * 12 + 8}s;
    animation-delay:${Math.random() * 12}s;
  `;
  bubbleContainer.appendChild(b);
}

// ── Fish ──
const fishGroup = document.getElementById("fish");
const fishEmojis = ["🐟", "🐠", "🐡", "🦈", "🐙"];
for (let i = 0; i < 8; i++) {
  const f = document.createElement("div");
  f.className = "fish";
  const top = 10 + Math.random() * 55;
  const dur = Math.random() * 20 + 18;
  const size = Math.random() * 1.2 + 0.6;
  f.style.cssText = `
    top:${top}%; font-size:${size * 1.4}rem;
    animation-duration:${dur}s;
    animation-delay:${Math.random() * -20}s;
  `;
  f.textContent = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
  fishGroup.appendChild(f);
}

// ── Ticker ──
const tickerItems = [
  "🐙 Angry Octo",
  "✦ Collect Them All",
  "🌊 100 Unique Designs",
  "⭐ Common · 💜 Rare · ✨ Legendary",
  "🇦🇲 Handmade in Armenia",
  "🎲 Blind Box Surprise",
  "❤️ Every Octo is Unique",
];
const track = document.getElementById("ticker");
[...tickerItems, ...tickerItems].forEach((txt) => {
  const item = document.createElement("div");
  item.className = "ticker-item";
  item.textContent = txt;
  track.appendChild(item);
});

// ── Scroll reveal ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ── Notify form ──
function handleNotify() {
  const val = document.getElementById("emailInput").value.trim();
  const msg = document.getElementById("notifyMsg");
  if (!val || !val.includes("@")) {
    msg.textContent = "⚠️ Please enter a valid email address!";
    msg.style.color = "#e07060";
  } else {
    msg.textContent =
      "🎉 You're on the list! We'll send you a splash when we launch.";
    msg.style.color = "var(--mint-deep)";
    document.getElementById("emailInput").value = "";
  }
}
document.getElementById("emailInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleNotify();
});

// ── Language switcher (placeholder) ──

const switcher = document.getElementById("languageSwitcher");

const path = window.location.pathname;
if (path.startsWith("/en")) switcher.value = "en";
else if (path.startsWith("/ru")) switcher.value = "ru";
else switcher.value = "hy";

const newSwitcher = switcher.cloneNode(true);
switcher.parentNode.replaceChild(newSwitcher, switcher);

newSwitcher.addEventListener("change", (e) => {
  const lang = e.target.value;
  if (lang === "hy") {
    window.location.replace("/");
  } else {
    window.location.replace(`/${lang}/`);
  }
});