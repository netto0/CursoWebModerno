function criarProduto(nome = 'Indefinido', preco = 'Indefinido') {
    return (`Nome: ${nome}, Preço: ${preco}`)
}

console.log(criarProduto())
console.log(criarProduto('Carne',14))