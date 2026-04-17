var pessoa = {
  nome: "André",
  idade: 28,
};

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(7));
console.log(quadrado.perimetro(5));

// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado2.lados);
console.log(quadrado2.area(7));
console.log(quadrado2.perimetro(5));
console.log(quadrado2.cinco());

// Objetos nativos do JS
console.log(Math.random());
