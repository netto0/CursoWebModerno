const aprovados = ['Agatha', 'Pedro', 'Daniel', 'Luíz']

aprovados.forEach(function(nome, indice, array){console.log( `${indice+1}) ${nome}`)}) 

/* A função forEach recebe como parametro uma função callback, que, por sua vez recebe 3 parametros por padrão:
    1º O valor presente no índice corrente
    2º O índice corrente
    3º O array
   Porém os 2 últimos parâmetros podem ser suprimidos
*/

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)