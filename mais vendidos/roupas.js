const sizeButtons = document.querySelectorAll('.size-option');
const selectedSizeDisplay = document.getElementById('selected-size');

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'selected' de todos os botões
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Adiciona a classe 'selected' ao botão clicado
        button.classList.add('selected');
        
        // Atualiza o texto do elemento selecionado
        selectedSizeDisplay.textContent = button.textContent;
    });
});
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'selected' de todos os botões
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Adiciona a classe 'selected' ao botão clicado
        button.classList.add('selected');
        
        // Atualiza o texto do elemento selecionado
        selectedSizeDisplay.textContent = button.textContent;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const incrementButton = document.querySelector('.increment');
    const decrementButton = document.querySelector('.decrement');
    const quantityInput = document.querySelector('.quantity-input');

    incrementButton.addEventListener('click', () => {
        // Incrementa o valor do input
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decrementButton.addEventListener('click', () => {
        // Decrementa o valor do input, mas não deixa ficar menor que 1
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    quantityInput.addEventListener('input', () => {
        // Garante que o valor não seja menor que 1
        if (parseInt(quantityInput.value) < 1) {
            quantityInput.value = 1;
        }
    });
});

// Função para abrir a imagem em tela cheia
const modal = document.getElementById("fullscreenModal");
const fullscreenImage = document.getElementById("fullscreenImage");
const modalContent = document.querySelector('.modal-content'); // Supondo que o modalContent é a classe da imagem no modal

// Função para abrir a imagem em tela cheia
function openFullscreen(src) {
    fullscreenImage.src = src;
    modal.style.display = "block";

    // Adiciona um pequeno delay para ativar a animação de centro
    setTimeout(() => {
        modal.classList.add("show");
        fullscreenImage.classList.add("zoom-center"); // Adiciona a classe de animação
        document.body.style.overflow = 'hidden'; // Desabilita a rolagem do corpo

        // Adiciona a classe de cursor para todo o modal
        modal.style.cursor = 'grab'; // Altera o cursor ao abrir o modal
    }, 10);
}

// Função para fechar o modal
function closeFullscreen() {
    modal.classList.remove("show"); // Esconde o modal
    fullscreenImage.classList.remove("zoom-center"); // Remove a animação de zoom

    // Restaura a rolagem do corpo após um pequeno delay
    setTimeout(() => {
        modal.style.display = "none"; // Oculta o modal completamente
        document.body.style.overflow = ''; // Reabilita a rolagem
    }, 300); // Tempo igual ao da animação de saída
}

// Adiciona evento de clique para fechar o modal
modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.classList.contains("close")) {
        closeFullscreen(); // Chama a função de fechar
    }
});

// Supondo que suas imagens têm a classe .product-image
const images = document.querySelectorAll('.product-image');
images.forEach(image => {
    image.addEventListener('click', () => {
        openFullscreen(image.src); // Chama a função de abrir com a imagem clicada
    });
});

// Adiciona eventos para alterar o cursor na imagem
fullscreenImage.addEventListener('mouseenter', () => {
    modal.style.cursor = 'grab'; // Altera o cursor ao passar o mouse
});

fullscreenImage.addEventListener('mousedown', () => {
    modal.style.cursor = 'grabbing'; // Altera o cursor ao clicar
});

fullscreenImage.addEventListener('mouseup', () => {
    modal.style.cursor = 'grab'; // Altera o cursor ao soltar o clique
});

// Adiciona evento para manter o cursor 'grab' fora da imagem
modal.addEventListener('mouseenter', () => {
    modal.style.cursor = 'grab'; // Mantém o cursor 'grab' ao passar sobre o modal
});
