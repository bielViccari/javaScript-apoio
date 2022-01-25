// Transformando um numero quebrado com 2 casas decimais e trocar ponto por virgula

let number = 345.33452345

//toFixed coloca em 2 casas decimais , e replace troca o . sinalizado na primeira aspas, pelo segundo parâmetro, a ,
console.log(number.toFixed(2).replace('.', ','))
