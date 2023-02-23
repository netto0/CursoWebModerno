// É uma estrutura não indexada e que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians') // Aceita declarações encadeadas
times.add('Flamengo')
times.add('Vasco') // A repetição será ignorada

console.log(times)
console.log(times.size) // Retorna a quantidade de elementos do set
console.log(times.has('vasco')) // Diferencia letras minúsculas e maiúsculas
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes) // É possível transformar um array em um set passando o array como parâmetro
console.log(nomesSet)