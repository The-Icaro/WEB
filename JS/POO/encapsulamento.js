// Encapsulamento => esconder os detalhes de um objeto, que não é necessário em determinada operação

// Exemplo
class Carro {
  
  constructor(){
    this.marca = "X",
    this.modelo = "Y",
    this.placa = "AAA-111"
  }
  
  acelerarCarro () {
    /*
    Processos
    de Acelerar o Carro
    */
    console.log("Acelerando o Carro!")
  }
  
}

const carro = new Carro()
carro.acelerarCarro()
// Quando o Metodo for chamado, não preciso saber os procedimentos nem nada


// Modificadores de Acesso e Geters e Setters
class ContaBancaria{
  // Propriedades Privadas
  // _propriedadePrivada
  
  // Para Acessar esse valor, basta utilizar Metodos Get e Set
  
  constructor(){
    this.proprietarioConta = "José"
    this._numeroConta = 450
    this._saldoConta = 0
  }
  
  // Get -> numeroConta
  get numeroConta (){
    return `Numero da Conta: ${this._numeroConta}`
  }
  // Set -> numeroConta / precisa ter um parametro, que vai ser setado na propriedade
  set numeroConta (novoNumeroConta){
    // Validação do dado recebido
    this._numeroConta = novoNumeroConta
  }
  
  // Get -> saldoConta
  get saldoConta(){
    return `Saldo da Conta: ${this._saldoConta}`
  }
  // Set -> saldoConta
  set saldoConta (novoSaldoConta){
    // Validação de Valor
    this._saldoConta = novoSaldoConta
  }
}

const conta = new ContaBancaria()
console.log(conta.numeroConta) // Acessa o valor pelo GET, não coloquei _numeroConta

conta.numeroConta = 500 // Faz a Alteração pelo SET
console.log(conta.numeroConta)