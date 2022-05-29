/*function Pessoa() {
    this.idade = 0

        setInterval( function() { <<<<<<<<<<<< ***
            this.idade++ 
            console.log(this.idade)
        }, 1000) 
    }    

new Pessoa*/

function Pessoa() {
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa


/* ***: Quando é passada uma função comum temos um erro nesse código, pois como o this varia em funções comuns, 
quem será referenciado pelo this em "this.idade" será o contador do setInterval e não o objeto "Pessoa"

Já nas funções arrow, como o this não varia, o objeto pessoa que será referenciado 
*/