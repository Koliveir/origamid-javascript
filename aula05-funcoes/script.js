function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(9));
//
function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);
//
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(102, 1.86));
//
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}

console.log(corFavorita());
//
addEventListener("click", function () {
  console.log("clicou");
});
/* Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {} */

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("texto"));

// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa idéia.

// Escopo

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam vistar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(28));
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dela

var profissao = "Designer";
function dados() {
  var nome = "André",
    idade = 28;
  function outroDados() {
    var endereco = "Rio de Janeiro",
      idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outroDados();
}

console.log(dados());

/* Hoisting
Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.*/
