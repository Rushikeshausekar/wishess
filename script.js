const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

// Set canvas to full screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

// Generate stars with random properties
function createStars(count) {
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.1,
    });
  }
}

// Animate the stars to create a falling effect
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  requestAnimationFrame(animateStars);
}

// Responsive canvas adjustment
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars.length = 0; // Clear stars
  createStars(200); // Recreate with adjusted size
});

// Initialize stars and start animation
createStars(200);
animateStars();

