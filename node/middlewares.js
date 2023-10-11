// middleware pattern (chain of responsibility)

// Definindo o primeiro middleware (passo1)
const passo1 = (ctx, next) => {
  ctx.valor1 = "mid1"; // Define um valor no contexto
  next(); // Chama a função 'next' para passar para o próximo middleware
};

// Definindo o segundo middleware (passo2)
const passo2 = (ctx, next) => {
  ctx.valor2 = "mid2"; // Define outro valor no contexto
  next(); // Chama a função 'next' para passar para o próximo middleware
};

// Definindo o terceiro middleware (passo3)
const passo3 = (ctx) => {
  ctx.valor3 = "mid3"; // Define um terceiro valor no contexto
};

// Função 'exec' que executa os middlewares em ordem
const exec = (ctx, ...middlewares) => {
  const execPasso = (indice) => {
    // Verifica se há middlewares disponíveis e se o índice é válido
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](ctx, () => execPasso(indice + 1)); // Chama o middleware atual e fornece a função 'next' como argumento
  };
  execPasso(0); // Inicia a execução com o primeiro middleware
};

const ctx = {}; // Cria um contexto vazio

// Executa os middlewares passados como argumentos para a função 'exec'
exec(ctx, passo1, passo2, passo3);

// Após a execução dos middlewares, o contexto 'ctx' contém os valores definidos pelos middlewares
console.log(ctx); // Exibe o contexto atualizado no console
