// Este código está fazendo uso de um módulo chamado "global" que não é um módulo padrão do Node.js.
// Certifique-se de que o módulo "global" foi definido corretamente antes de executar este código.

// O código requer o módulo "global" usando a função "require" para tornar seu conteúdo acessível neste arquivo.

require("./global");

// Chama a função "saudacao" do objeto "MinhaApp" definido no módulo "global" e imprime o resultado no console.
console.log(MinhaApp.saudacao());

// Modifica a propriedade "nome" do objeto "MinhaApp" para o valor "Eita!".
MinhaApp.nome = "Eita!";

// Imprime a propriedade "nome" do objeto "MinhaApp" no console, que agora terá o valor "Eita!".
console.log(MinhaApp.nome);
