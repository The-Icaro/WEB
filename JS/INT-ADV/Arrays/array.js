// Maneiras de Criar um Array
// Literal
let lista = ["item1", "item2", "item3"]

// Instancia
const lista2 = new Array("item1", "item2")

// Qual o tipo do Array?
typeof [] // objeto
typeof Array // Função
typeof new Array // objeto


// Metodos Utéis
// Removendo 
lista.pop() // Remover o Ultimo elemento
lista.shift() // remover o Primeiro elemento

// Adicionar
lista.push("item4") // Adiciona ao Final
lista.unshift("item0") // Adiciona ao Início

// Retorna um Novo Array
lista.splice(0, 2, "novoItem1", "novoItem2")
console.log(lista)

// .splice()  -> Ele recebe vários parametros, Retorna a lista original modificada
// .splice(0, 1) -> 1 - Começo ; 2 - Quantos ele vai deletar ; Nesse Exemplo ele começa pelo indice 0 e remove até o quantidade de itens 1
// .splice(0, 1, "novoItem") -> Aqui ele remove o primeiro item e adiciona no lugar o "novoItem"

const novaLista = lista.slice(0, 2)
console.log(novaLista)

// ,slice() -> Retorna um novo Array com os elementos selecionados peolos parametros
// .slice(2, 5) -> pega os elementos começando da posição 2 até a posição anterior ao definido, nesse caso 4

// Convertendo em um String, Retornando para um Array
let texto = lista.join() // Convertendo para um string, com os elementos juntos por ,
let arrayLista = texto.split(",") // Retornando para um array

console.log(texto)
console.log(arrayLista)

