// forEach(função), ele passa por todos os elemtos de um array, fazendo determinada função
// o forEach() tem alguns retornos do proprio array
// item -> o elemento em si
// index/i -> o index de cada elemento
// array/arr -> o proprio array
// Esses retornos eu posso usar como parametros da funcao a ser passada

const lista = ["item1", "item2", "item3", "item4", "item5"]

const listarElementos = function(item, index){
  console.log(item, index)
}


lista.forEach(listarElementos)
