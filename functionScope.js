//function scope

let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

//aqui o subject vem da função createThink, sendo aplicada as informações escritas lá
console.log(createThink(subject))

//esse subject é a váriavel let na qual foi criada
console.log(subject)
