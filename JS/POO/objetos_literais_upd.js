// Objetos Literais - Melhorias

// Adicionando as Propriedades 
let nome = "João"
let idade = 20

const pessoa = {
  
  nome,  // já atribui o nome = "João" a essa propriedade -> nome: nome
  idade,  // o mesmo aqui com idade
  apresentarPessoa(){  // a função não precisa ser chamada
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos e ${pessoa.altura} de altura`
  }
  
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.apresentarPessoa()) // Altura undefined


// Adição de uma nova propriedade ou metodo
pessoa.altura = 1.80
console.log(pessoa.altura)
console.log(pessoa.apresentarPessoa())

pessoa.falarAltura = function(){ // Reconhece o this.propriedade
  return `Eu ${this.nome} tenho ${this.altura} cm de altura`
}
console.log(pessoa.falarAltura())

