const images = ["1.png", "2.png"]; // Adicione mais imagens aqui se necessário
let currentIndex = 0;

function changeImage(direction) {
    // Mover para a próxima imagem à direita
    if (direction === 1 && currentIndex < images.length - 1) {
        currentIndex++;
        document.getElementById("productImage").src = images[currentIndex];
    }
    // Voltar para a imagem anterior à esquerda
    else if (direction === -1 && currentIndex > 0) {
        currentIndex--;
        document.getElementById("productImage").src = images[currentIndex];
    }
}

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
