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