const openBtn = document.getElementById("openBtn");
const startCard = document.getElementById("startCard");
const letterCard = document.getElementById("letterCard");

openBtn.addEventListener("click", () => {
  startCard.style.display = "none";
  letterCard.style.display = "block";
  startHearts();
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "float-heart";
    heart.textContent = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 28 + 14 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 350);
}