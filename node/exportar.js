// Exibe o objeto "module.exports" no console, que é um objeto vazio por padrão.
console.log(module.exports);

// Compara se "module.exports" é estritamente igual a "this" (o objeto atual).
console.log(module.exports === this);

// Compara se "module.exports" é estritamente igual a "exports" (outro objeto).
console.log(module.exports === exports);

// Define propriedades no objeto "module.exports".
this.a = 1;
exports.b = 2;
module.exports.c = 3;

// Atribui "null" à variável "exports", mas isso não afeta "module.exports".
exports = null;

// Exibe o objeto "module.exports" no console, que ainda contém as propriedades a, b e c.
console.log(module.exports);

// Tenta atribuir um novo objeto a "exports", mas isso também não afeta "module.exports".
exports = {
  nome: "Teste",
};

// Exibe o objeto "module.exports" no console, que ainda mantém as propriedades a, b e c.
console.log(module.exports);

// Finalmente, reatribui o objeto "module.exports" para um novo objeto com a propriedade "publico".
module.exports = { publico: true };
