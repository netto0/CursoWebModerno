// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

objeto = {nome: 'Maria',
        profissao: 'Desenvolvedora'}

const objetoParaArray = obj => Object.entries(obj)

console.log(objetoParaArray(objeto))