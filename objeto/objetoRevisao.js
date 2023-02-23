// Coleção dinamica de pares chave/valor
const produto = new Object // Instanciando dinamicamente o objeto "produto" através da função construtora "new"
produto.nome = 'Cadeira' // Criando dinamicamente o atributo nome através da notação "."
produto['Marca do Produto'] = 'Genérica' // Criando dinamicamente por meio de String entre [] (Essa maneira permite fugir dos padroes da notação ., porem para acessá-la dps precisará ser referenciada da mesma forma)
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: { // Determinando um Objeto dentro do outro
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ // Uma array de objetos
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() { // Uma função como elemento do objeto
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) // Irá retornar undefined porém não irá gerar erro
console.log(carro.condutores.length) // Irá gerar um erro pois estamos tentando acessar um atributo de um undefined
