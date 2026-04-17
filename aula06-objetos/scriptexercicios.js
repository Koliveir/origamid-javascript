// Crie um objeto com os seus dados pessoais

var infoPessoais = {
  nome: "Erick",
  sobrenome: "Oliveira",
  idade: 25,
  genero: "Masculino",
  pais: "Brasil",
  estado: "SP",
  cidade: "São Paulo",
};

console.table(infoPessoais);

// Crie um método no objeto anterior que mostre o seu nome completo
infoPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(infoPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

console.log(carro.preco);
carro.preco = 3000;
console.log(carro.preco);

/* Crie um objeto de um cachorro que represente um labrador
preto com 10 anos, que late ao ver um homem*/

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(genero) {
    if (genero === "Masculino") {
      return console.log("Latindo");
    } else {
      return false;
    }
  },
};

cachorro.latir(infoPessoais.genero);
