function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // Comparando se objetos diferentes criados a partir da mesma função construtora possuem o mesmo protype (Sim)
console.log(MeuObjeto.prototype === obj1.__proto__) // O protótipo do objeto criado aponta para a função construtora em questao .prototype (no caso, MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() { // Todos os objetos criados utilizando essa função construtora terão os atributos nome e falar vindos de seu prototype
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael' // Sobrescrevendo o atributo nome presente no prototype
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Alterando o protótipo de obj3 que era object.prototype para MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo:

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)