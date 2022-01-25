// manipulando arrays
let techs = ['html', 'css', 'js']

//adiciona um item no fim
techs.push('nodejs')

//adiciona no começo
techs.unshift('sql')

//remove do fim
techs.pop()

//remove do começo
techs.shift()

//pega somente alguns elementos do array
console.log(techs.slice(1, 3))

//remove 1 ou mais intens em qualquer posição
techs.splice(1, 1)

//encontra a posição de um elemento no array
let index = techs.indexOf('css')

//após encontrar a posição do CSS, removi o mesmo.
techs.splice(index, 1)

console.log(techs)
