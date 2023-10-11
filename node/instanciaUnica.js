// Este módulo exporta um objeto com uma propriedade "valor" e um método "inc".

// O objeto exportado possui uma propriedade "valor" inicializada com o valor 1.
// Essa propriedade armazena um número que pode ser incrementado posteriormente.

// O objeto também inclui um método "inc" que incrementa o valor da propriedade "valor" em 1.
// O método é chamado quando você deseja aumentar o valor em 1.

module.exports = {
  valor: 1,
  inc() {
    this.valor++;
  },
};
