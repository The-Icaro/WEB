// Herança => Reutilização de Códigos e Manutenção
// Te permite reutilizar metodos e propriedades de uma classe em outra

// Exemplo em uma Empresa

class Pessoa {
  
  constructor(){
    this.nome = ""
    this.idade = 0
    this.id = 0
    this.cargo = ""
    this.nivelSenioridade = ""
  }
  
  trabalhar(){
    // Trabalha
    return "Trabalhando......"
  }
  
  vaiParaCasa(){
    return "Expediente Terminado, Indo para Casa."
  }
  
}

class Desenvolvedor extends Pessoa {
  
  constructor(){ 
    super() // Vai Ter nome, idade, id, cargo, etc herdado da classe Pai, o mesmo super pode ser chamado para metodos
    this.areaDesenvolvimento = ""
    this.stack = ""
  }
  
  desenvolve(){
    return "Desenvolvendo......"
  }
  
}

class Gestor extends Pessoa {
  
  constructor(){
    super() // Vai Ter nome, idade, id, cargo, etc herdado da classe Pai
    this.areaGestao = ""
    this.habilidadesGestao = ""
  }
  
  reuniao(){
    return "Reunião......"
  } 
  
}

// Instanciar
const desenvolvedor = new Desenvolvedor()
desenvolvedor.nome = "João" // Propriedades da Classe Pai = Pessoa
desenvolvedor.idade = 20
desenvolvedor.id = 204587
desenvolvedor.cargo = "Desenvolvedor"
desenvolvedor.nivelSenioridade = "Pleno"
desenvolvedor.areaDesenvolvimento = "Mobile"  // Propriedades da Classe Filha = Desenvolvedor
desenvolvedor.stack = ["React Native", "Flutter"]

desenvolvedor.trabalhar() // Metodo classe Pai 
desenvolvedor.desenvolve()  // Metodo classe Filha
