const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Retorna as Chaves ("nome","idade","peso")
console.log(Object.values(pessoa)) // Retorna os valores contidos nas chaves
console.log(Object.entries(pessoa)) // Retorna um array composto de arrays de pares chave/valor

Object.entries(pessoa).forEach(([chave, valor]) => { 
    console.log(`${chave}: ${valor}`)
})

// "forEach" itera sobre cada elemento do objeto referenciado e entre os parenteses está o operador destructuring "[x, y]"

Object.defineProperty(pessoa, 'dataNascimento', { // defineProperty serve para definir uma propriedade de objeto, porém tem a vantagem de poder ter "configurações" a mais nesse objeto, como:
    enumerable: true,  // enumerable: quando true, a propriedade em questão é listada pelo comando ".keys" por exemplo
    writable: false, // writable: quando true, permite que a propriedade seja alterada pelo usuário
    value: '01/01/2022' // define por fim o valor da propriedade
})

pessoa.dataNascimento = '01/01/2021' // Não irá adiantar, pois o "writable" está como false
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // Irá mostrar a propriedade "dataNascimento" pois a propriedade "enumerable" está como true

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // ".assign" tem como função concatenar todos os outros parâmetros no 1º, de modo que os ultimos parametrôs listados substituirão os primeiros caso sejam o mesmo

Object.freeze(obj) // ".freeze" congela um parâmetro para que o mesmo não possa mais ser alterado
obj.c = 1234
console.log(obj)
