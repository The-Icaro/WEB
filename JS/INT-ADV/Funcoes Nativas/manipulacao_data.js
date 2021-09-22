// Datas
const data = new Date()

// Dia, Mes e Ano
data.toString()
let dia = data.getDate()
let mes = data.getMonth() + 1 // 0 - 11 + 1
let year = data.getFullYear()
const dataAtual = `Dia ${dia}, Mês ${mes}, Ano ${year}`
console.log(dataAtual)

// Horas Minutos e Segundos
let h = data.getHours()
let min = data.getMinutes()
let s = data.getSeconds()
const tempoAtual = `São ${h}:${min};${s}`
console.log(tempoAtual)

// Configurando
data.setDate(data.getDate() + 10)
data.setMonth(data.getMonth() + 5)
data.setFullYear(data.getFullYear() + 3)
let d = data.getDate()
let m = data.getMonth() + 1 // 0 - 11 + 1
let y = data.getFullYear()
console.log(`Promoção em ${d}/${m}/${y}`)