/**Leia os valores das propriedades `a entrada` e `o drink` do objeto `pedido` uso da notação de colchetes e atribua-os a `valorEntrada` e `valorDrink` respectivamente, por fim, imprima-os. */
// Setup

const pedido = {
  'a entrada': 'hamburger',
  'o adicional': 'vegetais',
  'o drink': 'coca-cola'
}

console.log(pedido['a entrada'])
console.log(pedido['o drink'])

// Apenas modifique dessa linha para baixo
const valorEntrada = ['a entrada']
const valorDrink = ['o drink']

console.log('')
console.log(pedido[valorEntrada])
console.log(pedido[valorDrink])
