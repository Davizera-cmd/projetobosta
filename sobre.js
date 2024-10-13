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
