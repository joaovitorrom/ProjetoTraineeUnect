// Início botões de navegação da página
let botaoInicio = document.getElementById("botaoinicio");
let botaoServicos = document.getElementById("botaosevico");
let botaoSobre = document.getElementById("botaosobre");
let botaoContato = document.getElementById("botaocontato");

botaoInicio.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// Fim botões de navegação da página