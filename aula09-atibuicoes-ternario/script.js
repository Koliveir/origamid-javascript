// Operadores de atribuição

var x = 5;
var y = 10;
console.log((x += y));
console.log((x -= y));
console.log((x *= y));
console.log((x %= y));
console.log((x **= y));
console.log((x /= y));

// Operador ternário
var idade = 17;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

// condição ? true : false
// Geralmente utilizado quando precisamos atribuir um valor
// para uma variável, dependendo de uma condição

// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui Faculdade");
else console.log("Não possui faculdade");

// ou

/*if (possuiFaculdade) 
  console.log("Possui faculdade");
else 
  console.log("Não possui faculdade");
*/
