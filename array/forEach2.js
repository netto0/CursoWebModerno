Array.prototype.forEach2 = function(callback) { // Adicionando ao protótipo de todas as arrays o método forEach2, fazendo assim com que possa ser acessado por qualquer array
    for (let i = 0; i < this.length; i++) { // i é um contador iniciado em 0 que enquanto for menor que o tamanho do array instanciado irá ser acrescido em 1 a cada laço
        callback(this[i],i,this) // A cada chamada do laço a função callback será chamada e serão passados os argumentos especificados <-
    }
}

const aprovados = ['Agatha', 'Pedro', 'Daniel', 'Luíz']

aprovados.forEach2(function(nome, indice, array){ // Aqui é especificado o que a callback fará
    console.log( `${indice+1}) ${nome}`)
    console.log(array)
}) 

