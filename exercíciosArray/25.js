// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

const string = ["programação", "mobile", "profissional"]

function buscarPalavrasSemelhantes(chave,string){
    let filtradas = []
    for (let palavra of string){ // Para cada item do array
        if (palavra.includes(chave)){ // Includes verifica se a string em questão contém a sequencia de caracteres informados
            filtradas.push(palavra)
        }
    }
    return filtradas
}

console.log(buscarPalavrasSemelhantes("pro",string))