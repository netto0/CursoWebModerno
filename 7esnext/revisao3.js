// ES8: Object.values/ Object.entries
const obj = {a: 1, b: 2, c: 3} // Object.values retorna os valores de cada chave do Objeto
console.log(Object.values(obj)) // Object.entries retorna um array de arrays, em que cada array interno é um par chave/valor
console.log(Object.entries(obj))

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome, // Nas novas versões do ES, é possível atribuir uma variável preexistente em um objeto apenas colocando o nome dela, não sendo mais preciso utilizar "nome: nome"
    ola() { // Essa também é uma nova forma mais reduzida de definir uma função como elemento de um objeto, não sendo mais necessário o uso do "function" antes
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

// As classes em JS provêm uma maneira mais simples e clara de criar objetos e lidar com herança

class Animal {}
class Cachorro extends Animal { // O "extends" define o "pai" de uma classe
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro(). falar()) // Para instanciar uma classe utilizamos o operador new, que é basicamente uma função construtora
const dog = new Cachorro()
console.log(dog.falar())