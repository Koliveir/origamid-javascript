// nomeie 3 propriedades ou métodos de string
var exemplo = "Texto";
console.log(exemplo.repeat(55));
console.log(exemplo.charAt(2));
console.log(exemplo.length);
console.log(exemplo.replace("x", ""));
// nomeie 5 propriedades ou métodos de elementos do DOM
var teste = document.querySelector("a");
console.log(teste);
document.querySelector(body);
document.getElementById("#id");
document.getElementsByClassName(".class");
teste.innerHTML("Texto Inner");
teste.setAttribute("color", "black");

// busque na web um objeto (método) capaz de interagir com o clipboard
// clipboard é a parte do seu navegador que lida com o CTRL + C e CTRL + V
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert(`Copiado o texto: ${copyText.value}`);
}
