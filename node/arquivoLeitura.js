// Importa o módulo 'fs' (File System) para lidar com operações de arquivo.
const fs = require("fs");

// Define o caminho do arquivo que será lido.
const caminho = __dirname + "/arquivo.json";

// Lê o conteúdo do arquivo de forma síncrona e o armazena na variável 'conteudo'.
const conteudo = fs.readFileSync(caminho, "utf-8");

// Imprime o conteúdo do arquivo no console.
console.log(conteudo);

// Lê o conteúdo do arquivo de forma assíncrona.
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  // Quando a leitura estiver concluída, analisa o conteúdo como JSON.
  const config = JSON.parse(conteudo);

  // Imprime o host e a porta do arquivo JSON.
  console.log(`${config.db.host}: ${config.db.port}`);
});

// Requer o módulo "arquivo.json" e o armazena na variável 'config'.
const config = require("./arquivo.json");

// Imprime o objeto 'db' do arquivo JSON.
console.log(config.db);

// Lista os arquivos no diretório atual de forma assíncrona.
fs.readdir(__dirname, (err, arquivos) => {
  console.log("Conteúdo da pasta...");
  console.log(arquivos);
});
