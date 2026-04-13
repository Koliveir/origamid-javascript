var possuiGraduacao = false;
var possuiDoutorado = true;

/*if (possuiGraduacao) {
  console.log("Possui graduação.");
} else {
  console.log("Não possui.");
}*/

if (possuiGraduacao) {
  console.log("Possui Graduação");
} else if (!!possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nenhum dos dois");
}

if (5 >= 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 5 || (5 + 5 && 10 - 5);

if (condicional) {
  console.log(condicional);
}

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Vermelho":
    console.log("qualquer texto");
    break;
  default:
    console.log("Feche os olhos");
}
