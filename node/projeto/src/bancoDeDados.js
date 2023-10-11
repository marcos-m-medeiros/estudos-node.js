// Um objeto que é usado para gerar IDs sequenciais para produtos
const sequence = {
  _id: 1, // Inicializa o _id em 1
  get id() {
    // Define um getter para obter o próximo ID
    return this._id++; // Retorna o valor atual de _id e depois incrementa
  },
};

// Um objeto que representa uma lista de produtos, onde as chaves são os IDs dos produtos
const produtos = {};

// Função para salvar um produto no banco de dados
function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id; // Se o produto não tiver um ID, atribui um usando o objeto sequence
  produtos[produto.id] = produto; // Armazena o produto no objeto produtos com a chave sendo o ID
  return produto; // Retorna o produto salvo
}

// Função para obter um produto com base em seu ID
function getProduto(id) {
  return produtos[id] || {}; // Retorna o produto correspondente ao ID ou um objeto vazio se não encontrado
}

// Função para obter todos os produtos
function getProdutos() {
  return Object.values(produtos); // Retorna um array com todos os produtos no objeto produtos
}

// Função para excluir um produto com base em seu ID
function excluirProduto(id) {
  const produto = produtos[id]; // Armazena o produto a ser excluído
  delete produtos[id]; // Remove o produto do objeto produtos
  return produto; // Retorna o produto excluído
}

// Exporta as funções para uso em outros arquivos
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto };
