// Notação Literal
const hotelUm = {
    
  quartos: 10,
  ocupados: 8,
  verificarDisponivieis: function(){
    let disponiveis = this.quartos - this.ocupados
    return disponiveis
  }
  
}

// Notação de Construtor; Começa com o Objeto em branco
const hotelDois = new Object()
hotelDois.quartos = 10
hotelDois.ocupados = 8
hotelDois.verificarDisponibilidade = function() {
  let disponiveis = this.quartos - this.ocupados
  return disponiveis
}

// Criando Classes
class Hotel {
  
  // Atributos da Classe
  constructor(){
    this.quartos = 10
    this.ocupados = 5
  }
  
  // Metodo
  verificarDisponibilidade() {
    let disponiveis = this.quartos - this.ocupados
    return disponiveis
  }
}

const hotelTres = new Hotel()
console.log(hotelTres.verificarDisponibilidade())

