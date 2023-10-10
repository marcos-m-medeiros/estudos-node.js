// Importa o módulo A do arquivo "moduloA.js" (assumindo que este arquivo existe na mesma pasta)
const moduloA = require("./moduloA");

// Importa o módulo B do arquivo "moduloB.js" (assumindo que este arquivo existe na mesma pasta)
const moduloB = require("./moduloB");

// Exibe no console a propriedade 'ola' do objeto 'moduloA'
console.log(moduloA.ola);

// Tentativa de exibir uma propriedade inexistente 'bemVindobemVindo' do objeto 'moduloA'
// Isso gerará um erro, pois a propriedade está escrita incorretamente.
console.log(moduloA.bemVindobemVindo);

// Exibe no console a propriedade 'ateLogo' do objeto 'moduloA'
console.log(moduloA.ateLogo);

// Exibe no console o objeto 'moduloA' completo, incluindo todas as suas propriedades
console.log(moduloA);

// Exibe no console a propriedade 'bomDia' do objeto 'moduloB'
console.log(moduloB.bomDia);

// Chama a função 'boaNoite' do objeto 'moduloB' e exibe o resultado no console
console.log(moduloB.boaNoite());

// Exibe no console o objeto 'moduloB' completo, incluindo todas as suas propriedades
console.log(moduloB);
