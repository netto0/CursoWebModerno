const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const eMulher = funcionario => funcionario.genero == 'F'
const eChinesa = funcionario => funcionario.pais = 'China'

const menorSalario = (funcComMenorSalario, funcAtual) => {
    if (funcAtual.salario < funcComMenorSalario.salario){
        return funcAtual
    } else {
        return funcComMenorSalario
    }
}

// Desafio: Criar uma função que retorne da lista de funcionários acima a mulher chinesa com o menor salário

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulheres = funcionarios.filter(eMulher)
    const mulheresChinesas = mulheres.filter(eChinesa)
    const menorSalarioChinesa = mulheresChinesas.reduce(menorSalario)
    console.log(menorSalarioChinesa)
    // Ou
    const mulherChinesaComMenorSalario = funcionarios.filter(eMulher).filter(eChinesa).reduce(menorSalario)
    // console.log(mulherChinesaComMenorSalario)
    
})



