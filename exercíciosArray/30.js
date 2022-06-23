// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

const estudantes = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }

soma = (acumulador,valor) => acumulador + valor

function recerberMelhorEstudante(objeto) {
    const estudantesMedias = {}
    for(estudante of Object.entries(objeto)){
        const notas = estudante[1]
        const somaNotas = notas.reduce(soma)
        const len = notas.length
        const media = somaNotas / len
        estudantesMedias[estudante[0]] = media
    }
    const melhorMedia = []
    for(estudante of Object.entries(estudantesMedias)){
        let nome = estudante[0]
        let media = estudante[1]
        if (melhorMedia.length == 0 || media > melhorMedia[1]){
            melhorMedia[0] = nome
            melhorMedia[1] = media
        }
        
    }
    const nomeMelhor = melhorMedia[0]
    const mediaMelhor = melhorMedia[1]
    resultado = {}
    resultado['Nome'] = nomeMelhor
    resultado['Média'] = mediaMelhor
    return resultado
}

console.log(recerberMelhorEstudante(estudantes))