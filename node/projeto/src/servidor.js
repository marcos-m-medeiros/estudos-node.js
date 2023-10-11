// Definindo a porta em que o servidor irá ouvir
const porta = 3003;

// Importando o módulo Express
const express = require("express");

// Criando uma instância do Express
const app = express();

// Definindo uma rota HTTP GET para "/produtos"
app.get("/produtos", (req, res, next) => {
  // Enviando uma resposta JSON quando a rota é acessada
  res.send({ nome: "Notebook", preco: 123.45 }); // Converter para JSON
});

// Iniciando o servidor Express e fazendo-o ouvir na porta especificada
app.listen(porta, () => {
  console.log(`O servidor está executando na porta: ${porta}.`);
})