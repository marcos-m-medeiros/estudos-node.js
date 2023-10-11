// Definindo a porta em que o servidor irá ouvir
const porta = 3002;

// Importando o módulo Express
const express = require("express");
const app = express();

// Importando o módulo body-parser para análise de dados no corpo das solicitações
const bodyParser = require("body-parser");

// Importando o módulo de banco de dados (suponho que exista um arquivo "bancoDeDados.js" com funções relacionadas ao banco de dados)
const bancoDeDados = require("./bancoDeDados");

// Configurando o body-parser para analisar dados no corpo das solicitações
app.use(bodyParser.urlencoded({ extended: true }));

// Definindo uma rota HTTP GET para "/produtos"
app.get("/produtos", (req, res, next) => {
  // Enviando uma resposta JSON quando a rota é acessada, obtendo os produtos do banco de dados
  res.send(bancoDeDados.getProdutos());
});

// Definindo uma rota HTTP GET para "/produtos/:id", onde :id é um parâmetro dinâmico na URL
app.get("/produtos/:id", (req, res, next) => {
  // Enviando uma resposta JSON quando a rota é acessada, obtendo um produto específico com base no ID fornecido
  res.send(bancoDeDados.getProduto(req.params.id));
});

// Definindo uma rota HTTP POST para "/produtos" para adicionar um novo produto
app.post("/produtos", (req, res, next) => {
  // Salvando um novo produto no banco de dados com base nos dados enviados no corpo da solicitação
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

// Definindo uma rota HTTP PUT para "/produtos/:id" para atualizar um produto existente
app.put("/produtos/:id", (req, res, next) => {
  // Atualizando um produto no banco de dados com base no ID fornecido e nos dados enviados no corpo da solicitação
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

// Definindo uma rota HTTP DELETE para "/produtos/:id" para excluir um produto com base no ID fornecido
app.delete("/produtos/:id", (req, res, next) => {
  // Excluindo um produto do banco de dados com base no ID fornecido
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto);
});

// Iniciando o servidor Express e fazendo-o ouvir na porta especificada
app.listen(porta, () => {
  console.log(`O servidor está executando na porta: ${porta}.`);
});
