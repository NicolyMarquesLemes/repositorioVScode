const titulo = document.querySelector("#titulo");
console.log("Titulo: ", titulo);

const texto = document.querySelector(".texto");
texto.textContent = "Texto alterado com sucesso!";

const Casa = document.querySelector("div");
Casa.style.backgroundColor = "blue";

const botao = document.getElementById("botao");
const frm = document.querySelector("#btn");

frm.addEventListener("submit", (e) => {
botao.outerText = "Clicado!";
e.preventDefault();
})

const dive = document.getElementById("caixa");
dive.innerHTML = "<strong>Conteúdo em negrito</strong>";

const big = document.querySelector ("p");
big.style.color = "green";
big.style.fontSize = "20px";
big.style.backgroundColor = "yellow";

const Pestilo = document.getElementById("estilo");
const Frm = document.querySelector("#BTN");

Frm.addEventListener("submit", (e) => {
    e.preventDefault();
    Pestilo.classList.add("estilizar");
})

const rmv = document.getElementById("Btn");
rmv.addEventListener("submit", (e) => {
    e.preventDefault();
    Pestilo.classList.remove("estilizar");
})

