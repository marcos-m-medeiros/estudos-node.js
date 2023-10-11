// O código exporta uma função que recebe uma lista de nomes como argumentos usando o operador spread '...nomes'.
module.exports = function (...nomes) {
  // A função mapeia os nomes recebidos e retorna uma nova lista com mensagens de saudação.
  return nomes.map((nome) => `Boa semana, ${nome}!`);
};
