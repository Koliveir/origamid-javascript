// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 28,
  parenteIdade = 36;

if (minhaIdade > parenteIdade) {
  console.log("É maior.");
} else if (minhaIdade === parenteIdade) {
  console.log("É igual.");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
//Verdadeiro

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "André",
  idade = 28,
  possuiDoutorado = false,
  empregoFuturo,
  dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta,
);

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("São Maiores");
} else {
  console.log("São Menores");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //sempre dá a última verdadeira
} else {
  console.log("Falso");
}
