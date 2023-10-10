// Define propriedade 'ola' no objeto 'this', que é uma referência ao módulo atual.
this.ola = "Hello world!";

// Exporta a propriedade 'bemVindo' diretamente, tornando-a acessível a outros módulos.
exports.bemVindo = "Bem vindo ao node!";

// Exporta a propriedade 'ateLogo' diretamente usando 'module.exports'.
module.exports.ateLogo = "Até o próximo exemplo.";
