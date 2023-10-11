// Importa o módulo "moduloA.js" de um caminho relativo (subindo duas pastas e acessando o arquivo)
const moduloA = require("../../../moduloA.js");

// Exibe no console a propriedade "ola" do módulo importado de "moduloA.js"
console.log(moduloA.ola);

// Importa um módulo ou diretório local chamado "pastaC" (provavelmente um arquivo "index.js" dentro desse diretório)
const c = require("./pastaC/");

// O código a seguir está atualmente comentado, mas se descomentado, criaria um servidor HTTP
// usando o módulo "http" do Node.js para responder a solicitações com "Boa tarde!" na porta 8080.
// O servidor não está em execução no momento.

// const http = require("http");
// http.createServer((req, res) => {
//    res.write("Boa tarde!");
//    res.end();
// }).listen(8080);

// Exibe no console o que foi importado do diretório "pastaC"
console.log(c);
