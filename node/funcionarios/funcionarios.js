// Importa a biblioteca Axios para fazer requisições HTTP.
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios");

// Define funções de filtro e redução para encontrar o funcionário com o menor salário.
const chineses = (f) => f.pais === "China";
const mulheres = (f) => f.genero === "F";
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

// Faz uma requisição HTTP para obter os dados dos funcionários.
axios.get(url).then((response) => {
  // Obtém os dados dos funcionários da resposta.
  const funcionarios = response.data;

  // Filtra os funcionários para encontrar os chineses e depois as mulheres.
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  // Exibe o funcionário com o menor salário no console.
  console.log(func);
});
