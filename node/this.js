// Verifica se 'this' é igual a 'global' (no escopo global do Node.js).
console.log(this === global); // true

// Verifica se 'this' é igual a 'module' (um objeto especial do Node.js que representa o módulo atual).
console.log(this === module); // false

// Verifica se 'this' é igual a 'module.exports' (uma referência para o objeto exportado pelo módulo).
console.log(this === module.exports); // true

// Verifica se 'this' é igual a 'exports' (outra referência para o objeto exportado pelo módulo).
console.log(this === exports); // true

// Declara uma função chamada 'logThis'.
function logThis() {
  // Exibe mensagens dentro da função.
  console.log("Dentro de uma função...");

  // Verifica se 'this' é igual a 'exports' (dentro da função).
  console.log(this === exports); // false

  // Verifica se 'this' é igual a 'module.exports' (dentro da função).
  console.log(this === module.exports); // false

  // Verifica se 'this' é igual a 'global' (dentro da função).
  console.log(this === global); // true
}

// Chama a função 'logThis'.
logThis();
