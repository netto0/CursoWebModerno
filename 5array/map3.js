Array.prototype.map2 = function(callback) {
    array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i],i,this))
    }
    return array
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // paraObjeto irá retornar um array de objetos convertidos do JSON
const apenasPreco = item => item.preco // apenasPreco irá retornar um array apenas com o preco de cada um dos objetos

const resultado = carrinho.map(paraObjeto).map(apenasPreco) 
const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
console.log(resultado2)