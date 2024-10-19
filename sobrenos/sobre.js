// COOKIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
const cookieBox = document.querySelector(".cookieWrapper"),
      acceptBtn = cookieBox.querySelector("button");

// Verifica se o cookie já foi aceito
let checkCookie = document.cookie.indexOf("CookieAccepted=true");

if (checkCookie !== -1) {
    cookieBox.classList.add("hide"); // Oculta o pop-up se o cookie estiver presente
} else {
    document.querySelector(".cookie-hidden").classList.remove("cookie-hidden"); // Mostra o pop-up se o cookie não estiver presente
}

// Ao clicar no botão de aceitar
acceptBtn.onclick = () => {
    document.cookie = "CookieAccepted=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/"; // Cria um cookie que expira em 30 dias e é válido para todas as páginas
    cookieBox.classList.add("hide"); // Oculta o pop-up
};
// COOKIEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE