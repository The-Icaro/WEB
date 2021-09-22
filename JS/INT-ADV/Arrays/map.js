// O Map, tem os memso parametros do forEach, ou seja uma funçào
// e também os retornos do array -> item, index, array
// A Diferença é que o Map retorna um novo array e faz algum tipo de transofrmação com os dados
// Por exemplo, onverter para string

const nomes = ["João", "Ana", "Pedro"]

function toObject(item){
  return {nome: item}
}

const novoNomes = nomes.map(toObject)
console.log(novoNomes)

// Outro Exemplo 
const produtosDolar = [
  {
   produto: "Notebook" ,
   preco: 1200,
   moeda: "$" },
  {
   produto: "Celular",
   preco: 800,
   moeda: "$"
  }
]

// Dolar 1 -> 3
function dolarToReal(item){
  return {
    produto: item.produto,
    preco: item.preco * 3,
    moeda: "R$"
  }
}

const produtosReal = produtosDolar.map(dolarToReal)
console.log(produtosReal)

