// separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array, depois disso, transformando o array em um texto e onde eram espaços, coloque _

//criando uma frase
let phrase = 'Eu quero viver o Amor'

//criando array colocando separação com split

//split faz a separação , com o caractere que você escolher como parâmetro
let myArray = phrase.split('')

//juntando a frase, e adicionando _

//join junta a frase e no lugar do espaço, adiciona _
let phraseWithUnderscore = myArray.join('_')

//toLowerCase coloca a frase em minuscula, assim como toUpperCase que faz o oposto
console.log(phraseWithUnderscore.toLowerCase())
