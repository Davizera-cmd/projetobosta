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

// COOKIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
const cookieBox = document.querySelector(".cookieWrapper"),
      acceptBtn = cookieBox.querySelector("button");

// Verifica se o cookie já foi aceito
let checkCookie = document.cookie.indexOf("CookieAccepted=true");

if (checkCookie !== -1) {
    cookieBox.classList.add("hide"); // Oculta o pop-up se o cookie estiver presente
}

// Ao clicar no botão de aceitar
acceptBtn.onclick = () => {
    document.cookie = "CookieAccepted=true; max-age=" + 60 * 60 * 24 * 30; // Cria um cookie que expira em 30 dias
    cookieBox.classList.add("hide"); // Oculta o pop-up
};
// COOKIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
