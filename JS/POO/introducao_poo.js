// Procedural

function verificarDisponibilidade(quartos, ocupados){
  let disponiveis = quartos - ocupados
  console.log("Disponíveis: " + disponiveis)
}

let quartos = 10
let ocupados = 8
// verificarDisponibilidade(quartos, ocupados)


// Orientado a Objeto

const hotel = {
    
  quartos: 10,
  ocupados: 8,
  verificarDisponivieis: function(){
    let disponiveis = this.quartos - this.ocupados
    return disponiveis
  }
  
}

hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponivieis()