function gerarFraseMotivacional () {


	// Frases
	frases = [
	"Comece onde você está, use o que você tem e faça o que você pode.",
	"Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
	"Não importa que você vá devagar, contanto que você não pare.",
	"A inspiração existe, porém temos que encontrá-la trabalhando.",
	"Coragem é saber o que não temer.",
	"Conhecer a si mesmo é o começo de toda sabedoria.",
	"Acredite em milagres, mas não dependa deles.",
	"Não é a carga que o derruba, mas a maneira como você a carrega.",
	"A vida é 10% o que acontece a você e 90% como você reage a isso.",
	"Um livro, uma caneta, uma criança e um professor podem mudar o mundo."
	]

	let numeroAleatorio = Math.floor(Math.random() * frases.length)
	let frase = frases[numeroAleatorio]

	document.getElementById('frase').innerHTML = frase

}