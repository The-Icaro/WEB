let listaNomes = [
	"Nome1",
	"Nome2",
	"Nome3",
	"Nome4",
	"Nome5",
	"Nome6",
	"Nome7",
	"Nome8",
	"Nome9",
	"Nome10",
]

function buscarNomes() {

	let searchNome = document.getElementById("searchUsername").value
	let itensLista = ''

	for ( i in listaNomes ) {
		let nome = listaNomes[i]
		
		if ( searchNome == nome ) {
			itensLista += `<li class="list-group-item">${nome}</li>`
		}

	}

	document.getElementById("listaUsers").innerHTML = itensLista
}


function carregarNomes() {

	let itensLista = ''

	for (i in listaNomes) {

		let nomes = listaNomes[i]
		itensLista += `<li class="list-group-item">${nomes}</li>`

	}

	document.getElementById("listaUsers").innerHTML = itensLista

}