const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json') 
// o gulp-typescript tem a função createProject, que recebeu como parametro o endereço de um 
// arquivo de configuração JSON. Nesse arquivo é informado os arquivos a serem convertidos e
// um objeto "compilerOptions", que são opções do compilador, com parametros predefinidos pelo
// desenvolvedor.

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)