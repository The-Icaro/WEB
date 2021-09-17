// Função Factory -> Função que produz Objetos
// Factory -> Desing Pattern

const  ProdutoFactory = function(/* Id por exemplo */) {
  
  // Pegar os Dados Do ID de uma API por Exemplo
  
  return {
    nomeProduto: "",
    precoProduto: "",
    tamanhoProduto: ""
  }
  
}

const produtoX = ProdutoFactory()
console.log(produtoX)

const produtoY = ProdutoFactory()
console.log(produtoY)