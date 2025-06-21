// Cutom Text 360deg Round
const text = "mynameistarekhossain";
const circle = document.getElementById("circle-text");
const radius = 92; // Radius of the circle
const deg = 360 / text.length;

for (let i = 0; i < text.length; i++) {
    const char = document.createElement("span");
    char.innerText = text[i];
    const angle = deg * i;
    char.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(${angle * -1}deg)`;
    circle.appendChild(char);
}
