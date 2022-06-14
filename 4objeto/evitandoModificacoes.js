// Object.preventExtensions

const produto = Object.preventExtensions({ // preventExtensions não permite que seja incluido novos atributos a um objeto, mas permite alteração e exclusão de atributos já existentes
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})
console.log('Extensível:', Object.isExtensible(produto)) // Irá retornar false, já que produto não é extensível

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal (selar)
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) // Parecido com o preventExtensions porém não podemos adicionar nem excluir itens de um objeto, apenas alterar os existentes
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = Seal + valores constantes
 