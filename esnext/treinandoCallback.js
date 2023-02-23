const soma1 = (valor, callback) => {
    console.log(`${valor} + 1 = ${valor+1}`)
    callback(valor+1)
}

conta = soma1(1, (resultado1) => {
    soma1(resultado1, (resultado2) => {
        soma1(resultado2, (resultado3) => {
            console.log('Execução finalizada')
        })
    })
})

// Para utilizarmos callback em uma função temos que primeiro passá-la como parâmetro e depois utilizá-la como se fosse o 
// return da função

// Se tornam inviáveis quando é preciso aninhar muitas callbacks, formando o que é conhecido como "callback hell"