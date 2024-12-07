const slider = document.querySelector('.card-sliding');
const cards = document.querySelectorAll('.slider-card');
let currentIndex = 0;

function updateSlider() {
  // Remove "active" class from all cards
  cards.forEach(card => card.classList.remove('active'));

  // Add "active" class to the current card
  cards[currentIndex].classList.add('active');

  // Calculate the transform value
  const cardWidth = cards[currentIndex].offsetWidth + 20; // Width + gap
  const offset = (slider.offsetWidth / 2) - (cardWidth / 2);
  const transformValue = -currentIndex * cardWidth + offset;

  slider.style.transform = `translateX(${transformValue}px)`;
}

function autoPlaySlider() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
}

// Initial setup
updateSlider();
setInterval(autoPlaySlider, 2000); // Change slide every 3 seconds
