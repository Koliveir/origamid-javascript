var nome = "André";

console.log(nome.length);
console.log(nome.charAt(3));
console.log(nome.replace("ré", "rei"));
console.log(nome.toUpperCase());

var altura = 1.86;

console.log(typeof altura);
console.log(typeof altura.toString());
console.log(altura.toFixed());

function areaQuadrada() {
  return lado * lado;
}

console.log(areaQuadrada.toString());
console.log(areaQuadrada.length);

var btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  return console.log("Clicado no link");
});

btn.classList.add("Aperte"); //adiciona a classe azul
console.log(btn.innerText);
