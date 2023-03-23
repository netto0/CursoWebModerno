const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat') // Concatena arquivos
const uglify = require('gulp-uglify') // Minifica o arquivo, retirando espaços em branco e deixando tudo em 1 linha
const babel = require('gulp-babel') // "traduz" o código do arquivo para um código compatível com mais navegadores

function padrao(cb) {
    gulp.src('src/**/*.js')
    .pipe(babel({ // pipe é a alteração a ser feita com o gulp, funciona como um "then"
        comments: false,
        presets: ["env"]
    }))
    .pipe(uglify())
    .on('error', err => console.log(err)) // o on é utilizado para determinar o que vai ser feito em tal parte da execução, neste caso ele foi utilizado como um "catch"
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
    return cb()
}

exports.default = series(padrao)