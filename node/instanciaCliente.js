// Importa a instância única do módulo "instanciaUnica" para os contadores A e B.
const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

// Importa novas instâncias do módulo "instanciaNova" para os contadores C e D.
const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

// Incrementa o contador A duas vezes.
contadorA.inc();
contadorA.inc();

// Exibe o valor dos contadores A e B (que compartilham a mesma instância).
console.log(contadorA.valor, contadorB.valor);

// Incrementa o contador C duas vezes.
contadorC.inc();
contadorC.inc();

// Exibe o valor dos contadores C e D (que são instâncias separadas).
console.log(contadorC.valor, contadorD.valor);
