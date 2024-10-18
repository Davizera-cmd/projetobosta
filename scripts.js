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

// Função para fechar o pop-up com animação
function closePopup() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.classList.remove('slide-up');
    popupContent.classList.add('slide-down');
    popupContent.addEventListener('animationend', function() {
        document.getElementById('popup-compra').style.display = 'none';
        popupContent.classList.remove('slide-down');
    }, { once: true });
}

// Função para abrir o pop-up com animação e selecionar o tamanho "P" por padrão
function openPopup(name, price, image) {
    const popup = document.getElementById('popup-compra');
    const popupContent = document.querySelector('.popup-content');
    popup.style.display = 'flex';
    document.querySelector('.popup-details h2').textContent = name;
    document.querySelector('.popup-details p').textContent = price;
    document.querySelector('.popup-image').src = image;
    selecionarTamanho('P'); // Seleciona o tamanho "P" por padrão
    popupContent.classList.add('slide-up');
}

// Função para selecionar um tamanho
function selecionarTamanho(tamanho) {
    // Remove a classe "selected" de todos os botões
    document.querySelectorAll('.tamanho-options button').forEach(btn => btn.classList.remove('selected'));
    // Adiciona a classe "selected" ao botão correspondente
    document.querySelectorAll('.tamanho-options button').forEach(btn => {
        if (btn.textContent === tamanho) {
            btn.classList.add('selected');
        }
    });
    // Atualiza o texto ao lado da palavra "Tamanho:"
    const tamanhoSelecionado = document.getElementById('tamanho-selecionado');
    tamanhoSelecionado.textContent = tamanho;
    tamanhoSelecionado.classList.add('bold'); // Adiciona a classe "bold" para negrito
}

// Fechar o pop-up ao carregar a página
window.addEventListener('load', function() {
    closePopup();
});

// Abrindo o pop-up ao clicar no botão "Comprar"
document.querySelectorAll('.secaobuy-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        const image = this.getAttribute('data-image');
        openPopup(name, price, image);
    });
});

// Fechando o pop-up ao clicar no botão de fechar
document.querySelector('.close').addEventListener('click', function() {
    closePopup();
});

// Fechando o pop-up ao clicar fora do conteúdo do pop-up
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popup-compra')) {
        closePopup();
    }
});

// Seleção de tamanhos
document.querySelectorAll('.tamanho-options button').forEach(button => {
    button.addEventListener('click', function() {
        selecionarTamanho(this.textContent);
    });
});

// Função para aumentar a quantidade
function aumentarQuantidade() {
    const quantidadeInput = document.querySelector('.qty-selector input');
    let quantidade = parseInt(quantidadeInput.value);
    quantidadeInput.value = quantidade + 1;
}

// Função para diminuir a quantidade
function diminuirQuantidade() {
    const quantidadeInput = document.querySelector('.qty-selector input');
    let quantidade = parseInt(quantidadeInput.value);
    if (quantidade > 1) {
        quantidadeInput.value = quantidade - 1;
    }
}

// Função para validar a quantidade
function validarQuantidade() {
    const quantidadeInput = document.querySelector('.qty-selector input');
    let quantidade = parseInt(quantidadeInput.value);
    if (isNaN(quantidade) || quantidade < 1) {
        quantidadeInput.value = 1;
    }
}

// Função para bloquear a inserção de caracteres não permitidos
function bloquearCaracteres(event) {
    const invalidChars = ['-', 'e', '+', '.'];
    if (invalidChars.includes(event.key)) {
        event.preventDefault();
    }
}

// Adicionando eventos aos botões + e -
document.querySelector('.qty-selector button:nth-child(1)').addEventListener('click', diminuirQuantidade);
document.querySelector('.qty-selector button:nth-child(3)').addEventListener('click', aumentarQuantidade);

// Adicionando evento de validação ao campo de quantidade
document.querySelector('.qty-selector input').addEventListener('input', function() {
    const quantidadeInput = document.querySelector('.qty-selector input');
    let quantidade = parseInt(quantidadeInput.value);
    if (isNaN(quantidade) || quantidade < 1) {
        quantidadeInput.value = '';
    }
});

// Adicionando evento para bloquear caracteres não permitidos
document.querySelector('.qty-selector input').addEventListener('keydown', bloquearCaracteres);

// Adicionando evento para validar a quantidade ao perder o foco
document.querySelector('.qty-selector input').addEventListener('blur', validarQuantidade);