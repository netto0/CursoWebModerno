console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () { 
    return this.split('').reverse().join('')
}

/*  Como strings, arrays e objects sao do tipo function elas possuem prototype,
    que ao ser acessado permite que acrescentamos novas funções ou até mesmo substituir funções preexistentes (JAMAIS FAÇA ISSO!)
*/

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0] // Exemplo de uma função acrescentada as arrays
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () { // Exemplo de função preexistente sendo sobreescrita
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // Vários efeitos colaterais podem ocorrer
