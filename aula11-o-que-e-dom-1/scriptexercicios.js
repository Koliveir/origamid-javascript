// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
let primeiraClasse = document.querySelector(".ativo").innerText;

console.log(primeiraClasse);

// Retorne a linguagem do navegador
console.log(navigator.languages);

// Retorne a largura da janela
console.log(window.innerWidth);
