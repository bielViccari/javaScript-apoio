//expressão new cria um novo obj dentro da const
//this keyword - o mayk sempre será referenciado ao this, assim como joão

function Person(name) {
  //this.name = mayk, e joão
  this.name = name
  this.walk = function () {
    return this.name + 'está andando'
  }
}
//mayk passa como parametro, e na função person ele é referenciado com this.name
const mayk = new Person('Mayk')

const joao = new Person('Joao')

console.log(mayk.walk())
console.log(Joao.walk())
