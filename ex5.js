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
