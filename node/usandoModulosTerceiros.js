// Importa a biblioteca "lodash" e a atribui a uma variável "_".
const _ = require("lodash");

// Cria um intervalo que executa uma função a cada 2000 milissegundos (2 segundos).
setInterval(() => console.log(_.random(500, 600)), 2000);
