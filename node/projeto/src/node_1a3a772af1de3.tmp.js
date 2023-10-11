// Definindo a porta em que o servidor irá ouvir
const porta = 3003;

// Importando o módulo Express
const express = require("express");

// Criando uma instância do Express
const app = express();
const bancoDeDados = require("./bancoDeDados");

// Definindo uma rota HTTP GET para "/produtos"
app.get("/produtos", (req, res, next) => {
  // Enviando uma resposta JSON quando a rota é acessada
  res.send(bancoDeDados.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco,
  });
  res.send(produto); // JSON
});

// Iniciando o servidor Express e fazendo-o ouvir na porta especificada
app.listen(porta, () => {
  console.log(`O servidor está executando na porta: ${porta}.`);
});
