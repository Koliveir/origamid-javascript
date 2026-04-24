{
  var carro = "Fusca";
  const ano = 2018;
}
console.log(carro);
// console.log(ano);

/* Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.*/

/*for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i);*/

// Com o let evitamos que o número vaze
for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
//console.log(i);

// const
/* Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.*/

const mes = "Dezembro";
// mes = "Janeiro"; //erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29;

// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
let ano;
ano = 2018;
ano++;
console.log(ano);

//let ano = 2020;
