const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselWidth = carousel.clientWidth;
const totalSlides = carouselItems.length;
let currentIndex = 0;

// Clona os primeiros slides e os adiciona ao final
for (let i = 0; i < totalSlides; i++) {
  const clone = carouselItems[i].cloneNode(true);
  carouselInner.appendChild(clone);
}

function slideCarousel() {
  currentIndex++;
  carouselInner.style.transition = 'transform 0.5s ease-in-out';
  carouselInner.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
}

// Inicialização do carrossel
setInterval(() => {
  slideCarousel();
  if (currentIndex >= totalSlides) {
    setTimeout(() => {
      carouselInner.style.transition = 'none';
      carouselInner.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 500);
  }
}, 3000);
