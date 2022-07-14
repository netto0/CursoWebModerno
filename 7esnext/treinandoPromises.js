const soma1 = (valorInicial) => {
    return new Promise((resolve, reject) => {
        let error = false
        somado = valorInicial + 1
        if (somado == 5){
            error = true
        }
        if (error) {
            reject('Mensagem de Erro')
        }

        console.log(somado)
        resolve(somado)
    })
}

soma1(0)
.then(soma1)
.then(soma1)
.then(soma1)
.then(soma1)
.catch((e) => console.log(e))

// As promises vieram para resolver esse problema gerado pelas callbacks. Para escrever uma promise passamos os parametros da função
// normalmente, e utilizamos o "return new Promise()" essa promisse recebe como parametro uma callback que recebe por padrão os 
// parâmetros "resolve" e "reject", na resolução dessa callback o resolve é executado se tudo der certo e o reject é caso dê algum
// erro ou a função seja "rejeitada"

// Para utilizar uma Promise escrevemos a função e passamos o seus parâmetros normalmente, porém para acessar o resolve utilizamos
// ".then()" o then receberá o conteúdo do resolve da promise descrita, já para acessar o reject utilizamos o ".catch()"