// Variáveis evitam a repetição
// DRY (Don't repeat yourself)

console.log("Olá");

var nome = "Erick";
var idade = 35;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);

var sobrenome = "Oliveira",
  cidade = "São Paulo";
console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);

/* comentario
com 
várias
linha */

// Mudar valor atribuído
let idade2 = 35;
console.log(idade2);
idade2 = 36;
console.log(idade2);

// ----- Exercícios -----

// Declarar uma variável com o seu nome
var meuNome = "Erick";

// Declarar uma variável com a sua idade
var minhaIdade = 22;

/* Declarar uma variável com a sua comida
favorita e não atribuir valor*/
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = "Lasanha";

// Declarar 5 variáveis diferentes sem valores
var minhaVariave1, minhaVariave2, minhaVariave3, minhaVariave4, minhaVariave5;

console.log(meuNome, minhaIdade, comidaFavorita);
