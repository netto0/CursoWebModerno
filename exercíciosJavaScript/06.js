/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capInicial, txJuros, tempoAplic) {
    const juros = (capInicial * (txJuros/100)) * tempoAplic
    const total = capInicial + juros
    return total
}

console.log(`Juros Simples: ${jurosSimples(500,13,43)}`)

function jurosCompostos(capInicial, txJuros, tempoAplic) {
    let capital = capInicial
    const juros = (capital * (txJuros/100)) * tempoAplic    
    for (cont = 1; cont <= tempoAplic; capital += juros && cont++) {
        if (cont == tempoAplic) {
            return jurosSimples(capital, txJuros, tempoAplic)
        }
    }
}

console.log(`Juros Compostos: ${jurosCompostos(500,13,43)}`)