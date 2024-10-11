let bannerIndex = 0;
const banners = document.querySelectorAll('#banner-slides img');
const carouselSlides = document.querySelector('.banner-carousel .carousel-slides');

function showBanner(index) {
    // Ajusta o índice se estiver fora do limite
    if (index >= banners.length) bannerIndex = 0;
    if (index < 0) bannerIndex = banners.length - 1;

    // Aplica a transformação
    const offset = -bannerIndex * 100; // Ajusta a posição baseada no índice
    carouselSlides.style.transform = `translateX(${offset}vw)`; // Use vw em vez de % para precisão
}

// Funções de navegação
function nextBanner() {
    bannerIndex++;
    showBanner(bannerIndex);
}

function prevBanner() {
    bannerIndex--;
    showBanner(bannerIndex);
}

// Inicializa o primeiro banner
showBanner(bannerIndex);

// Arrasto do carrossel
let isDown = false;
let startX;
let scrollLeft;

carouselSlides.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carouselSlides.offsetLeft;
    scrollLeft = carouselSlides.scrollLeft;
});

carouselSlides.addEventListener('mouseleave', () => {
    isDown = false;
});

carouselSlides.addEventListener('mouseup', () => {
    isDown = false;
});

carouselSlides.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Se não estiver pressionado, não faz nada
    e.preventDefault(); // Impede a seleção de texto
    const x = e.pageX - carouselSlides.offsetLeft;
    const walk = (x - startX); // Ajuste a sensibilidade conforme necessário
    carouselSlides.scrollLeft = scrollLeft - walk;

    // Navegação baseado no movimento
    if (Math.abs(walk) > 50) {
        if (walk < 0) {
            nextBanner();
        } else {
            prevBanner();
        }
    }
});

// Para dispositivos de toque (mobile)
carouselSlides.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carouselSlides.offsetLeft;
    scrollLeft = carouselSlides.scrollLeft;
});

carouselSlides.addEventListener('touchend', () => {
    isDown = false;
});

carouselSlides.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault(); // Impede a seleção de texto
    const x = e.touches[0].pageX - carouselSlides.offsetLeft;
    const walk = (x - startX);
    carouselSlides.scrollLeft = scrollLeft - walk;

    // Navegação baseado no movimento
    if (Math.abs(walk) > 50) {
        if (walk < 0) {
            nextBanner();
        } else {
            prevBanner();
        }
    }
});
