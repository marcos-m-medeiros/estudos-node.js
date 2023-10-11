// Importa o módulo 'fs' (File System) para lidar com operações de arquivo.
const fs = require("fs");

// Define um objeto 'produto' que representa informações sobre um produto.
const produto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.15,
};

// Escreve o objeto 'produto' como uma string JSON em um arquivo chamado "arquivoGerado.json".
fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(produto),
  (err) => {
    // Quando a escrita estiver concluída ou se ocorrer um erro, esta função de callback será executada.

    // Verifica se há um erro. Se 'err' for nulo, não houve erro na escrita.
    console.log(err || "Arquivo salvo!");
  }
);
