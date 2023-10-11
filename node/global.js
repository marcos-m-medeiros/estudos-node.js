// O código define um objeto chamado "MinhaApp" e o torna imutável (não pode ser modificado) usando "Object.freeze".

global.MinhaApp = Object.freeze({
  // Define um método "saudacao" que retorna a string "Estou em todos os lugares."
  saudacao() {
    return "Estou em todos os lugares.";
  },
  // Define a propriedade "nome" com o valor "Sistema Legal."
  nome: "Sistema Legal.",
});
