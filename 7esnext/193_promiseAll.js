function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min) // Formula para gerar número inteiro
            resolve(aleatorio)
        }, tempo)
    })
}

// gerarNumerosEntre(1,60,800).then(console.log)


function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1,60,1500),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,500),
        gerarNumerosEntre(1,60,2500),
        gerarNumerosEntre(1,60,300),
        gerarNumerosEntre(1,60,200),
    ])
}

gerarVariosNumeros().then(console.log) // Só será retornado o resultado quando todas as promises forem executadas