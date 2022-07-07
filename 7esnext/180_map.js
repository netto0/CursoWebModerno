const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react')) // Para acessarmos uma função que foi passada como chave precisamos do get

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => { // No forEach primeiro é passado o valor, depois a chave
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // .has verifica se o Map contem certa chave
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // .size exibe a quantidade de elementos de um Map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // Não podemos ter chaves duplicadas, sempre a última substituirá a primeira
chavesVariadas.set(456, 'b') // Já os valores podemos ter duplicados
console.log(chavesVariadas)