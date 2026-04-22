var videoGames = ["switch", "ps4", "xbox"];
console.log(videoGames[1]);

videoGames.pop(); // Remove o último item e retorna ele
console.log(videoGames);

videoGames.push("3DS"); // Adiciona ao fnal da array
console.log(videoGames);
videoGames.push("Xbox");
// For loop

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}
// o for loop possui 3 partes, início, condiçãi e incremento

// while loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// O loop irá parar caso encontre a palavra 'break'

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "ps4") {
    break;
  }
}

/* forEach é um método que executa uma função para cada item da Array.
É uma forma simples de utilizarmos um loop com arrays (ou array-like);*/

videoGames.forEach(function (i, index, array) {
  console.log(i, index, array);
});
