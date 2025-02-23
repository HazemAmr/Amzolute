const slider = document.querySelector(".case-cards");
const cards = Array.from(document.querySelectorAll(".case-card"));

let speed = 2; // Speed of movement (pixels per frame)
let cardWidth = cards[0].offsetWidth + 64; // Card width + gap (64px = 4rem gap)
let totalWidth = cardWidth * cards.length; // Total width of all cards combined

// Clone cards virtually (without duplicating elements in DOM)
cards.forEach(card => {
    let clone = card.cloneNode(true);
    slider.appendChild(clone);
});

let position = 0;

function moveCards() {
    position -= speed;

    if (Math.abs(position) >= cardWidth) {
        position += cardWidth;
        slider.appendChild(slider.firstElementChild); // Move first card to end
    }

    slider.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(moveCards);
}

// Start animation
moveCards();
