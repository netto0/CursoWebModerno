// Pessoa -> 123(Endereço de memória simbólico) -> {objeto}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
// É possível alterar o objeto referenciado pq constante é apenas o endereço de memória

// pessoa -> 456 -> {objeto}
// pessoa = {nome: 'Ana'} (Irá retornar um erro pois para definir um novo objeto o endereço de memória seria outro)

Object.freeze(pessoa) // A função freeze presente nos objetos permite congelar o objeto, fazendo assim que o objeto não possa mais ser alterado

pessoa.nome = 'Maria'
pessoa.end = 'Rua tal'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
