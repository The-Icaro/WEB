function indicaMelhorValor(){

    //Recebendo Valores
    let valorAlcool = document.getElementById('alcool').value
    let valorGasolina = document.getElementById('gasolina').value

    if(!valorAlcool)
      alert("Preencha o Valor do Alcool")

    if (!valorGasolina)
      alert("Preencha o Valor da Gasolina")

    // Calculando Melhor Valor
    let resultado = valorAlcool / valorGasolina

    if( resultado >= 0.7 ) {
      document.getElementById('resultado').innerHTML = 'Melhor Utilizar Gasolina'
    } else {
      document.getElementById('resultado').innerHTML = 'Melhor Utilizar Álcool'
    }

  }