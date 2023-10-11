// Este módulo exporta uma função que atua como uma fábrica (factory) para criar novos objetos.
module.exports = () => {
  // A função factory retorna um novo objeto com uma propriedade "valor" inicializada com 1.
  // Além disso, o objeto possui um método "inc" que incrementa o valor em 1.
  return {
    valor: 1,
    inc() {
      this.valor++;
    },
  };
};
