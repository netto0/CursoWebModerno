/*Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

function arredondar(valor) {
    contador = 0
    valorArred = valor
    while (valorArred % 5 != 0) {
        contador ++
        valorArred ++
    } 
    if (contador < 3) {
        return {cont: contador, final: valorArred, inicial: valor, stat: true}
    } else {
        return {cont: contador, final: valorArred, inicial: valor, stat: false}
    }

}
function situacao(nota) {
    let arredondado = arredondar(nota)
    
    if (arredondado.final > 39) {
        if (arredondado.stat == true){   
        return `Aprovado(a), sua nota ${arredondado.inicial} foi arredondada para ${arredondado.final}`
        } else if (arredondado.stat == false){
        return `Aprovado(a), sua nota ${arredondado.inicial} foi mantida`
        }
    }   else {       
        if (arredondado.stat) {   
            return `Reprovado(a), sua nota ${arredondado.inicial} foi arredondada para ${arredondado.final}`
        } else if (arredondado.stat == false){
            return `Reprovado(a), sua nota ${arredondado.inicial} foi mantida`
        }
    }
}

console.log(situacao(41))
console.log(situacao(33))
