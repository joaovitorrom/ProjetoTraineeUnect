// Início botões de navegação da página
let botaoInicio = document.getElementById("botaoinicio");
let botaoServicos = document.getElementById("botaosevico");
let botaoSobre = document.getElementById("botaosobre");
let botaoContato = document.getElementById("botaocontato");

botaoInicio.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// Fim botões de navegação da página

// Início botões de transição do carrossel
const flechaAnterior = document.getElementById("arrowBack");
const flechaSeguinte = document.getElementById("arrowForward");
const botao1 = document.getElementById("radio-btn1");
const botao2 = document.getElementById("radio-btn2");
const botao3 = document.getElementById("radio-btn3");
const botoes = document.querySelectorAll('input[type="radio"]');
const banners = document.querySelectorAll(".modelBanners");

let indexAtual = 0;


function hideBanner () { // Função para esconder os banners
    banners.forEach(banner => {
        banner.classList.remove('on');
    });
    botoes.forEach(button => { // Desmarca todos radio buttons
        button.checked = false;
    });
};

function showBanner () { // Função para mostrar os banners
    banners[indexAtual].classList.add('on');
    botoes[indexAtual].checked = true; // marca o radio button correspondente ao banner
};

/* function hideBannerButton () { // Função para desmarcar todos radio buttons
    botoes.forEach(button => {
        button.checked = false;
    });
}; */

/*function showBannerButton () { // Função para marcar o radio button correspondente ao banner
    botoes[indexAtual].checked = true;
}; */

function nextBanner () { // Função para avançar o banner
    hideBanner();
   //hideBannerButton();

    if (indexAtual === banners.length - 1) {
        indexAtual = 0;
    } else {
        indexAtual++;
    }

    showBanner();
    //showBannerButton();
};

function previousBanner () { // Função para retroceder o banner
    hideBanner();
    //hideBannerButton();

    if (indexAtual === 0) {
        indexAtual = banners.length - 1;
    } else {
        indexAtual--;
    }

    showBanner();
    //showBannerButton();
};

flechaAnterior.addEventListener("click", previousBanner); // Evento para retroceder o banner

flechaSeguinte.addEventListener("click", nextBanner); // Evento para avançar o banner

botao1.addEventListener("click", () => {
    hideBanner();       // Esconde todos os banners
    //hideBannerButton(); // Desmarca todos os radio buttons
    indexAtual = 0;     // Atualiza o índice para o primeiro slide
    showBanner();       // Exibe o banner correspondente
    //showBannerButton(); // Marca o radio button correspondente
});

botao2.addEventListener("click", () => {
    hideBanner();
    //hideBannerButton();
    indexAtual = 1;
    showBanner();
    //showBannerButton();
});

botao3.addEventListener("click", () => {
    hideBanner();
    //hideBannerButton();
    indexAtual = 2;
    showBanner();
    //showBannerButton();
});
// Fim botões de transição do carrossel