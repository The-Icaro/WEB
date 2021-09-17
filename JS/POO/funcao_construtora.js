// Funções construtoras

class Produto {
  
}

typeof Produto // Função, já que o JS não tem a base em POO, mas foi por implementação

const produto = new Produto() 
typeof produto  // Pass aa ser um Objeto


// Construindo um objeto com uma função

const Hotel = function(){
  
  this.nome = "Hotel Um",
  this.quartosSuites = 20,
  this.quartosSuitesOcupados = 15,
  
  this.reservar = function(){
    this.quartosSuitesOcupados++
    console.log(`Ocupados: ${this.quartosSuitesOcupados}`)
  }
    
  function quartosDisponivies(){
    let disponiveis = this.quartosSuites - this.quartosSuitesOcupados
    return disponiveis
  }
  
}

typeof Hotel // Função
const hotelUm = new Hotel()
typeof hotelUm // Objeto
