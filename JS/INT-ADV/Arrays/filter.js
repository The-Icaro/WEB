// O Filter trabalha também retornando um novo array (array original não é alterado), só que com base em True ou False
// Ele recebe 2 parametros, o primeirocomo os outros é uma função e o segundo é um filtro (normalmente um objeto)
// Esse filtro, temos acesso dentro do array filtrado

//Obs: Por padrão a função que é passada no filter retorna false, ou seja, se a função não retornar nada, o novo array filtrado vai ser vazio

// Exemplo
const pessoas = [{nome: "João", idade: 15},
                {nome:"Ana", idade:20},
                {nome:"Paulo", idade:17}]

// Filtro
const filtroIdade ={
  filtro: 18
}

// Função
function filtrarIdade(item){
  // Sem o filtro return item.idade <= 18
  // Com o Filtro
  return item.idade >= this.filtro
}

const novoPessoas = pessoas.filter(filtrarIdade, filtroIdade)
console.log(novoPessoas)

