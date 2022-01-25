//declarando uma variavel
let weight

//descobrindo qual o tipo da variavel acima.
console.log(typeof weight)

//declarando uma variavel e atribuindo valores para ela

let name = 'gabriel'
let age = 18
let stars = 4.8
let isSubiscribed = true

//passando um obj como parametro na variavel
let student = {
  name: 'gabriel',
  age: 18,
  wheight: 4.8,
  isSubiscribed: true
}

console.log(
  `${student.name} de idade ${student.age} pesa ${student.wheight} kg.`
)

//declarando uma array , sem nenhum valor
let students = []

//reatribuindo valores
students = [student]

console.log(students)

//colocando o student na posição 0 do array
console.log(students[0])

//criando um novo student

const john = {
  name: 'john',
  age: 18,
  wheight: 74.8,
  isSubiscribed: true
}

students[1] = john
