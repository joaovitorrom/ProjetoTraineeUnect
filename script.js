// Início botões de navegação da página
let botaoInicio = document.getElementById("botaoinicio");
let botaoServicos = document.getElementById("botaoservicos");
let botaoSobre = document.getElementById("botaosobre");
let botaoContato = document.getElementById("botaocontato");

botaoInicio.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

botaoServicos.addEventListener("click", (event) => {
    event.preventDefault(); // Evita qualquer comportamento padrão do botão

    let servicos = document.getElementById("servicos"); // Pega a div de serviços
    let headerHeight = 142.17; // Altura do cabeçalho

    window.scrollTo({
        top: servicos.offsetTop - headerHeight, // Move a div para logo abaixo do cabeçalho
        behavior: "smooth"
    });
});

botaoSobre.addEventListener("click", (event) => {
    event.preventDefault(); // Evita qualquer comportamento padrão do botão

    let sobre = document.getElementById("quem"); // Pega a div de Quem Somos
    let headerHeight = 142.17; // Altura do cabeçalho

    window.scrollTo({
        top: sobre.offsetTop - headerHeight, // Move a div para logo abaixo do cabeçalho
        behavior: "smooth"
    });
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
    botoes.forEach(button => { // desmarca todos radio buttons
        button.checked = false;
    });
};

function showBanner () { // Função para mostrar os banners
    banners[indexAtual].classList.add('on');
    botoes[indexAtual].checked = true; // marca o radio button correspondente ao banner
};

function nextBanner () { // Função para avançar o banner
    hideBanner();
    if (indexAtual === banners.length - 1) {
        indexAtual = 0;
    } else {
        indexAtual++;
    }
    showBanner();
};

function previousBanner () { // Função para retroceder o banner
    hideBanner();
    if (indexAtual === 0) {
        indexAtual = banners.length - 1;
    } else {
        indexAtual--;
    }
    showBanner();
};

flechaAnterior.addEventListener("click", previousBanner); // Evento para retroceder o banner

flechaSeguinte.addEventListener("click", nextBanner); // Evento para avançar o banner

botao1.addEventListener("click", () => {
    hideBanner();
    indexAtual = 0; // Atualiza o índice para o primeiro slide
    showBanner();      
});

botao2.addEventListener("click", () => {
    hideBanner();
    indexAtual = 1;
    showBanner();
});

botao3.addEventListener("click", () => {
    hideBanner();
    indexAtual = 2;
    showBanner();
});
// Fim botões de transição do carrossel
