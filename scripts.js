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

// Remover eventos de arrasto
// Não há necessidade de lidar com eventos de mouse ou toque

// Pausar a animação ao passar o mouse
const marquee = document.getElementById('marquee');

marquee.addEventListener('mouseover', () => {
    const spans = marquee.querySelectorAll('span');
    spans.forEach(span => {
        span.style.animationPlayState = 'paused';
    });
});

marquee.addEventListener('mouseout', () => {
    const spans = marquee.querySelectorAll('span');
    spans.forEach(span => {
        span.style.animationPlayState = 'running';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    // Verificar se o usuário já aceitou os cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    }

    // Ao clicar em "CONTINUAR E FECHAR", esconda o banner e salve a preferência
    acceptCookiesButton.addEventListener('click', function() {
        cookieConsent.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });
});
