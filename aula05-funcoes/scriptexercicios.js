// Crie uma função para verificar se um valor é Truthy

function verificaValor(dados) {
  return !!dados;
}
console.log(verificaValor("Texto"));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  if (typeof lado === "number") {
    return console.log(lado * 4);
  } else {
    return console.log("Digite um número.");
  }
}

perimetro(5);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  if (typeof nome !== "string" || typeof sobrenome !== "string") {
    return console.log("Digite o seu nome.");
  } else {
    return console.log(`Seu nome completo é: ${nome} ${sobrenome}`);
  }
}

nomeCompleto("Erick", 5);

// Crie uma função que verifica se um número é par

function verificaPar(numero) {
  if (typeof numero === "number") {
    if (numero % 2 === 0) {
      return "É par";
    } else {
      return "É impar";
    }
  }
}

console.log(verificaPar(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  return console.log(typeof dado);
}

tipoDado(true);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Erick Oliveira");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
