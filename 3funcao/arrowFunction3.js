let comparaComThis = function (param) {
    console.log(this === param) // Em funções comuns o this irá apontar para o obj de onde ela foi invocada
}

comparaComThis(global) // True

const obj = {}

comparaComThis(obj) // False

comparaComThis = comparaComThis.bind(obj) // Função bind faz com que o this sempre aponte para o obj que é passado como parâmetro
comparaComThis(obj) // True

let comparaComThisArrow = param => console.log(this === param) // Em funções arrow, o this irá sempre apontar para o objeto na qual a função foi definida (module.exports)

comparaComThisArrow(global) // False
comparaComThisArrow(module.exports) // True

comparaComThisArrow = comparaComThisArrow.bind(global) // A função bind não consegue mudar o objeto apontado pelo this da função arrow
comparaComThisArrow(global) // False

