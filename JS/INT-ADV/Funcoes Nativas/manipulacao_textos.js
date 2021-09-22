// Manipulação de Textos/Strings

let texto = "carro"
// texto.length -> tamanho do texto
// texto.charAt(3) -> busca o caracter, dada a sua posição
// texto.replace("carro", "moto") -> substitui a primeira string para a segunda

let frase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean diam ipsum, fermentum nec porta id, facilisis commodo velit." 
frase.substr(0, 40) + " ...."
// substr(inicio, fim) pega o inicio da string até o final, cortando o resto

let nome = "João da Silva"
nome.split(" ")[0] 
// split(caractere da divisão, exemplo " "; "-"; ",") divide a string e retorna em um array com as respectivas posições

let nomee = "joao"
let sobrenome = "pedro"
const sobrenomeEmail = sobrenome.slice(0, sobrenome.length/2)
const email = nomee + sobrenomeEmail + '@empresa.com.br'
console.log(email)
// slice(inicio, fim) divide a string da posicao inicio até fim

// Maiuscula , Minuscula
nome.toUpperCase()
nome.toLowerCase()


//Remover Espaçamentos desnecessários
let handleNome = "      Pedro          "
console.log(handleNome)
handleNome.trim()


//Concatenar Strings
let a = "Olá"
let b = "Tudo"
let c = "Bem?"

a + " " + b + " " + c
const mensagem = `${a} ${b} ${c}`
console.log(mensagem)

a.concat(" " + b + " " + c)




