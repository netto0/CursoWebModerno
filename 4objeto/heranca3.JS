const pai = { nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // Mais uma forma de indicar o protótipo do objeto é passá-lo como parâmetro na função Object.create
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true} // O atributo nome é listável por iteradores porém, não é alterável
})

console.log(filha2.nome)
filha2.nome = 'Carla' // O nome permanecerá Bia
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? // Irá retornar a chave encontrada pertencente à filha2
        console.log(key) : console.log(`Por herança: ${key}`)
}