const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c } }
console.log(JSON.stringify(obj)) // Stringfy transforma um objeto em JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Parse cria um JSON ( desde que tudo seja suportado )
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

