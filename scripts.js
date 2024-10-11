let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0; // Volta para o primeiro slide
    if (index < 0) currentSlide = slides.length - 1; // Vai para o último slide

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Inicializa o carrossel
showSlide(currentSlide);
