 let opcaoCompra = 1
 
// IF Else
 if (opcaoCompra == 1 ) {
   console.log("Cartão de Crédito")
 } else if ( opcaoCompra == 2 ) {
   console.log("Cartão de Débito")
 } else if ( opcaoCompra == 3 ) {
   console.log("Boleto Bancário")
 } else {
   console.log("Falar com a Atendente")
 }

// Switch Case -> Verificar Igualdade
switch ( opcaoCompra ) {
  case 1 :
    console.log("Cartão de Crédito")
    break
  case 2 :
    console.log("Cartão de Débito")
    break
  case 3 :
    console.log("Boleto Bancário")
    break
  default :
    console.log("Falar com a Atendente")
}

// Operador Ternário -> If Else Simplificado
opcaoCompra == 1 ? "Cartão de Crédito" : "Falar com a Atendente"

// Variavel; Operação ? True : False