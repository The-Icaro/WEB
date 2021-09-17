// Pilar 1 - Abstração => pegar os aspectos essenciais do contexto/no que e proposto

/*
Modelo, Entidade, Identidade, Caracteristicas e Ações
*/

// Contexto = Aplicação tipo carro, preciso das características do carro

// Modelo
class Carro {
  
  constructor(){
    this.marca = "Volkswagen",
    this.modelo = "Gol",
    this.cor = "Prata",
    this.placa = "EMJ-2527"
  }
  
  // Acoes nada mais são que os Metodos da Classe
  ligarCarro(){
    console.log("Vrummmm")
  }
  
}

// Entidade, nada mais é que o objeto em si, carregando o próprio Modelo
// Outro exemplo de Entidade nesse caso, poderia ser uma moto, com o Modelo de Moto
const carroUm = new Carro()
carroUm.marca = "BMW" // Caracteristicas/Propriedades
carroUm.modelo = "320i"
carroUm.cor = "Preto"
carroUm.placa = "HAW-5310"
console.log(carroUm)

// Identidade é o que torna cada Entidade única, carroUm /= carroDois

const carroDois = new Carro()
console.log(carroDois)
