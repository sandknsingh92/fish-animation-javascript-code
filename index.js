
const bubblesContainer = document.getElementById("bubbles");

// Create bubbles automatically
function createBubble() {
    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    const size = Math.random() * 20 + 8;
    const position = Math.random() * 100;
    const duration = Math.random() * 5 + 4;
    const delay = Math.random() * 2;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = position + "%";
    bubble.style.animationDuration = duration + "s";
    bubble.style.animationDelay = delay + "s";

    bubblesContainer.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, (duration + delay) * 1000);
}

// Create bubbles continuously
setInterval(createBubble, 350);

// Create initial bubbles
for (let i = 0; i < 20; i++) {
    createBubble();
}
