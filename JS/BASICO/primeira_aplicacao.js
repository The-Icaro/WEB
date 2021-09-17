var hora = new Date().getHours()
var saudacao

if ( hora < 12 ) {
	saudacao = "Bom Dia"
} else if ( hora < 18) {
	saudacao = "Boa Tarde"
} else{
	saudacao = "Boa Noite"
}

document.getElementById("mensagem").innerHTML = saudacao
