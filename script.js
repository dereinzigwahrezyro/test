// CLICK TO ENTER
const enter = document.getElementById("enter");
const app = document.getElementById("app");
const music = document.getElementById("music");

enter.onclick = () => {
  enter.style.display = "none";
  app.classList.remove("hidden");
  music.play();
};

// 👁 FAKE VIEWS
let views = localStorage.getItem("views") || 0;
views++;
localStorage.setItem("views", views);
document.getElementById("views").innerText = views;

// 🌌 PARTICLES
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    vx: Math.random()*1-0.5,
    vy: Math.random()*1-0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.fillRect(p.x,p.y,2,2);
  });

  requestAnimationFrame(animate);
}
animate();

// 🖱️ HOVER TILT EFFECT
const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  card.style.transform =
    `translate(-50%, -50%) rotateY(${x}deg) rotateX(${y}deg)`;
});
