const operacoes = (a,b) => [a + b, a - b, a * b, a / b]

const [som,sub,multi,div] = operacoes(6,6)
console.log(`A soma é ${som}-\n, A subtracao é ${sub}-\n,A multiplicação é ${multi}-\n, A divisao é ${div}-\n`)

function soma(n1,n2){
    const soma = n1+n2;
    return soma;
}

function subtracao (n1,n2){
    const subtracao = n1-n2
    return subtracao
}

function multipli(n1,n2){
    const multipli = n1*n2
    return multipli;
}

function divisao(n1,n2){
    const multipli = n1/n2
    return multipli
}

const n1 =  +prompt('digite um numero');
const n2 = +prompt('digite um numero');

console.log(`Soma:${soma(n1,n2)}`)
console.log(`Subtração:${subtracao(n1,n2)}`)
console.log(`multiplicacao: ${multipli(n1,n2)}`)
console.log(`divisão:${divisao(n1,n2)}`)