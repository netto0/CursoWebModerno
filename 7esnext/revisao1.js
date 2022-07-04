// Let e Const
{
    var a = 2 // Var tem escopo somente de módulo // Também é afetada pelo "Hoisting"
    let b = 3 // Let tem escopo de bloco // Não funciona o Hoisting
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`) // Para usar a template string definimos a string com crase ao inves de aspas, e a variavel fica dentro de uma chave ${}

// Destructuring
const [l, e, ...tras] = 'Cod3r' 
console.log(l,e,tras) // Utilizando o operador destructuring podemos atribuir variáveis para itens de um array ou string

const [x, , y] = [1,2,3] // Para não atribuir ao conteúdo de certo índice basta deixar um espaço vazio no espaço correspondente a ele
console.log(x,y)

const {idade: i, nome} = {nome: 'Ana', idade: 9} // A chave de um objeto pode ser passada ao destructuring com outro nome desta forma
console.log(i, nome)
