function somarNumber(soma1, soma2){
    return soma1+soma2
}

const retornar = somarNumber(12,30)
console.log(retornar)

function Num (n1,n2){
    return n1 <= n2
}

const retornar2 = Num(10,10)
console.log(retornar2)

// const par = num => num % 2 === 0 ? `${num} é par` : `${num} não é par` 
// console.log(par(8));
const multiplicador = +prompt('Repetir quantas vezes a tabuada?')
let consoleTabuada = (num) => {
    for(let i = 1; i <=multiplicador; i++){
        let resultado = num * i
    console.log(`${num} x ${i} = ${resultado}`)
    }
    
}

consoleTabuada(+prompt('Qual a tabuada?'))

// const string = mensagem => `${mensagem.length} ${mensagem.toUpperCase()}`
// console.log(string('Davi'))
const comida = prompt('digite o nome da sua comida favorita:')

const string = (frase) =>{
    console.log(`voce digitou:${frase.toUpperCase()}como a sua comida favorita é:${frase} contem: ${frase.length} letras`)
}
string(comida)
