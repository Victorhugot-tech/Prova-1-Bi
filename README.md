### Execício 1 ###
Alternativa D


### Execício 2 ###
Alternativa A


### Execício 3 ###
let banco=[]
let pessoa1='Victor'
let pessoa2='Igor'
let pessoa3='Mateus'

banco.unshift(pessoa1,pessoa2,pessoa3)
console.log('Pessoas dentro da biblioteca:',banco)

banco.shift(pessoa1)
console.log('Pessoas dentro da biblioteca:',banco)

banco.shift(pessoa2)
console.log('Pessoas dentro da biblioteca:',banco)

banco.shift(pessoa3)
console.log('Pessoas dentro da biblioteca:',banco)





### Exercício 4 ###
let devolucoes=[]
const livro1={
    titulo:'Thomas e seus amigos',
    autor:'Francisco',
    atrasado: true
}

const livro2={
    titulo:'Crepusculo',
    autor:'Antonio',
    atrasado: true
}

const livro3={
    titulo:'A chave para o sucesso',
    autor:'Henry',
    atrasado: false
}
devolucoes.unshift(livro1,livro2,livro3)
console.log(devolucoes)

console.log('Livro desponivel',livro1)
console.log('Livro desponivel',livro2)
console.log('Livro desponivel',livro3)

devolucoes.shift(livro1)
console.log('Este livro foi devolvido:',livro1)
devolucoes.shift(livro2)
console.log('Este livro foi devolvido:',livro2)
devolucoes.shift(livro3)
console.log('Este livro foi devolido:',livro3)

console.log(devolucoes)




### EXercício 5 ###
let idade = 59
let categoria=''
if(idade<12){
    categoria='infantil'
    console.log('Tipo de ingresso:',categoria)
}else if (idade >= 12 && idade<= 17){
    categoria='Adolecente'
    console.log('Tipo de ingresso:',categoria)
}else if (idade >= 18 && idade <= 59){
    categoria='Adulto'
    console.log('Tipo de ingresso:',categoria)
}else {
    categoria='Sênior'
    console.log('Tipo de ingresso:',categoria)
}
