//callback function

function sayMyName(name) {
  console.log('antes de executar a callback')

  //função passada como parâmetro sendo exec.
  name()
  console.log('depois de executar a callback')
}

sayMyName(
  //passando outra função como parâmetro
  () => {
    console.log('estou em uma callback')
  }
)
