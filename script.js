const circle = document.getElementById("circle");
const message = document.getElementById("message");

let clickCount = 0;

circle.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 1) {
    // 🔴 → ❤️
    circle.classList.add("heart");
    circle.classList.remove("crane");
    message.textContent = "Du er klog, smuk og talentfuld";
    message.classList.add("visible");
  } else if (clickCount === 2) {
    // ❤️ → 🕊️
    circle.classList.remove("heart");
    circle.classList.add("crane");
    message.textContent = "Søde dig";
  } else if (clickCount === 3) {
    // 🕊️ → 🔴
    circle.classList.remove("crane");
    circle.style.backgroundImage = "none";
    circle.style.backgroundColor = "#ff6b6b";
    message.textContent = "";
    message.classList.remove("visible");
    clickCount = 0;
  }
});