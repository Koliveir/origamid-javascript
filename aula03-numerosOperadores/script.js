var idade = 2e10;
console.log(idade);

var modulo = 16 % 2;
console.log(modulo);

var soma = "100" + 50;
console.log(soma);

var subtracao = "100" - 50;
console.log(subtracao);

var multiplicacao = "100" * "2";
console.log(multiplicacao);

var divisao = "Comprei 10" / 2;
console.log(isNaN(divisao));
// É possível verificar se uma variável é NaN ou não com a função isNaN()

/* A ordem importa
Começa por multiplicação e divisão, depois por soma e subtração*/

var total = 10 + 20 * 2 + 20 / 2;
console.log(total);
// Você pode priorizar o que está dentro de parênteses
var total1 = (20 + 5) * 2;
console.log(total1);
