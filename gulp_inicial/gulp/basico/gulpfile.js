const gulp = require("gulp");
const { series, parallel } = require("gulp");

const tarefa1 = (cb) => {
  console.log("tarefa1");
  return cb();
};
const tarefa2 = (cb) => {
  console.log("tarefa2");
  return cb();
};

function copiar(callback) {
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    // Para não precisar listar todos os arquivos necessários é utilizada essa expressão.
    // Ela basicamente pega todos os arquivos com extensão .txt da pasta
        .pipe(gulp.dest('pastaB'))
  return callback();
}
const final = (cb) => {
  console.log("final");
  return cb();
};

module.exports.default = series(
    parallel(tarefa1,tarefa2),
    copiar,
    final,
    );

    /* O GULP é uma ferramenta de automação de tarefas em JavaScript. 
        Tarefas como minificar, otimizar e compilar arquivos, tão repetitivas e necessárias ao desenvolvimento, podem ser automatizadas com o Gulp.
        Para utilizá-lo primeiro fazemos sua importação no arquivo escolhido, dps definimos as tarefas a serem executadas por ele, no exemplo da aula a tarefa foi realizar a cópia de arquivos para 
        outra pasta. Toda tarefa (que é definida em forma de função) recebe como parâmetro uma callback (parâmetro que é preenchido automaticamente pelo gulp) e ao final dela é retornada a callback em execução.
        Ao final do arquivo é preciso exportar a função a ser executada para que o comando "gulp" possa ser utilizado, essa exportação é feita usando o "module.exports.default" 
        Na aula foram apresentadas duas formas de executar estas tarefas: em série (usando a função series) e em paralelo (com a função parallel).
        Para executar o arquivo é dado o comando "gulp" pelo terminal dentro da pasta em que o arquivo está.*/