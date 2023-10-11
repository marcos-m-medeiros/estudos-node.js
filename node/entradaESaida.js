// Verifica se o argumento "-a" foi passado ao executar o script
const anonimo = process.argv.indexOf("-a") !== -1;

// Se o argumento "-a" estiver presente, o usuário será tratado como anônimo
if (anonimo) {
  process.stdout.write("Fala Anônimo!\n");
  process.exit(); // Encerra o processo
} else {
  // Caso contrário, solicita que o usuário informe seu nome
  process.stdout.write("Informe o seu nome: ");

  // Escuta por entrada de dados do usuário (nome)
  process.stdin.on("data", (data) => {
    const nome = data.toString(); // Converte os dados de buffer para string

    // Exibe uma mensagem de saudação com o nome fornecido
    process.stdout.write(`Fala ${nome}!`);
    process.exit(); // Encerra o processo
  });
}
