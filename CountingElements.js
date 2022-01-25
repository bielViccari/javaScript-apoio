//contando elementos de uma array

//length conta objetos , funções e variaveis como let, const e var.
console.log(
  [
    'a',
    //objeto
    { type: 'array' },
    //função
    function () {
      return 'alo'
    }
  ].length
)
