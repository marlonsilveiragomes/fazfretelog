const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

function showSlide(index) {
    const slider = document.querySelector('.sliderSectionCarroselBloco');
    const offset = -index * 100; // Move para a esquerda pela largura de um slide
    slider.style.transform = `translateX(${offset}%)`; // Aplica a transformação
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Inicia o slide
setInterval(nextSlide, 7000); // Troca a cada 3 segundos