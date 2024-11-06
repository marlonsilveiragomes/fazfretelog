document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide'); // Seleciona todos os slides
    const totalSlides = slides.length;  // Conta o número total de slides
    let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.sliderSectionCarroselBloco');
        const offset = -index * 104.5; // Move para a esquerda pela largura de um slide
        slider.style.transform = `translateX(${offset}%)`; // Aplica a transformação
    }

    function nextSlide() {
        // Avança para o próximo slide ou volta para o primeiro slide
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Se chegou ao último slide, volta ao primeiro
        }
        showSlide(currentSlide);
    }

    // Inicia o slide automaticamente a cada 7 segundos
    setInterval(nextSlide, 7000);
});