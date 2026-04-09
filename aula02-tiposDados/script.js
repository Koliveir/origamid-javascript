// Ver que tipo de dado é a variável
var nome = "André";
var idade = 28;
console.log(typeof nome, typeof idade);

// Srings
var meuNome = "André";
var sobrenome = "Rafael";
var nomeCompleto = meuNome + sobrenome;
console.log(nomeCompleto);
console.log(meuNome + " " + sobrenome);

// Quando está concatenado numa frase String e Number vira String
var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(typeof frase);

var ano = "2018";
var mes = 9;
console.log(ano + mes);

// Aspas Duplas usa aspas simples e aspas simples usa aspas duplas dentro da String

// Existe uma forma de usar um escape e usar as aspas
var frase1 = 'Este é o \"melhor\" jogo';
console.log(frase1);

// Template String
var frase2 = `Romário fez ${gols} gols`;
console.log(frase2);
