// Prototype
// No JS, Objetos são Apenas Syntactic Sugar -> o jeito que escreve um objeto é somente para parecer com as outras linguagens POO
// Todos os Objetos são derivados de Prototype


Object.prototype

const objeto = {
}

console.log(objeto.nome) // Undefined, pois não tem essa propriedade
console.log(objeto.toString())  // Ele não tem esse metódo, porém não dá erro
console.log(objeto.__proto__) // O mesmo de Object.prototype, ou seja
console.log(objeto.__proto__ == Object.prototype) // TRUE -> objeto descendente de Prototype


// Relação de Herança com Prototype -> Prototype Chain = encadeamento de objetos
const carro = {
  placa : "EDR-3249"
}

const bmw = {
  modelo : "BMW 320i",
  __proto__ : carro // "Classe Pai"
  
}

console.log(bmw.modelo)
console.log(bmw.placa) // Herdando