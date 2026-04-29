console.log(window.innerHeight);
//console.log(window);

//alert("teste de alerta");

console.log(window.location.href);

const href = window.location.href.length;
console.log(href);

//const h1Selecionado = document.querySelector("h1").innerText;
const h1Selecionado = document.querySelector("h1");

console.log(h1Selecionado);

console.log(h1Selecionado.classList);
console.log(h1Selecionado.classList[1]);
console.log(h1Selecionado.innerText);
// console.log(id); Retorna o ID
console.log(h1Selecionado.offsetHeight); // Retorna a altuta do elemento selecionado

function callbackh1() {
  console.log("clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);
