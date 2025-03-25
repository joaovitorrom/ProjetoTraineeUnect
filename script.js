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
const botao1 = document.getElementById("radio-bt1");
const botao2 = document.getElementById("radio-bt2");
const botao3 = document.getElementById("radio-bt3");
const banners = document.querySelectorAll(".modelBanners");

let indexAtual = 0;

function hideBanner () { // Função para esconder os banners
    banners.forEach((banner) => {
        banner.classList.remove("on");
});

function showBanner () { // Função para mostrar os banners
    banners.forEach((banner) => {
        banner[indexAtual].classList.add("on");
});



// Fim botões de transição do carrossel