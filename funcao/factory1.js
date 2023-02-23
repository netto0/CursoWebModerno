// Factory simples

function criarPessoa() {
    return {nome:'ana',
            idade: 14,
            peso: 56}

}

console.log(criarPessoa())

// Uma função factory é uma função que "fabrica" objetos, no caso da factory simples os parametros ja sao definidas no retorno da função