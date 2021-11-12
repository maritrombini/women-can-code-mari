/*Use a `.pop()`função para remover o último item `meuArray` e atribuir o valor exibido a uma nova variável `removidoDoArray`, imprima ambos. */

const meuArray = [1, 4, 6]
const removidoDoArray = meuArray.pop()

console.log(`O item removido foi ${removidoDoArray}`)
console.log(meuArray)
console.log('')

const outroArray = ['Ola', 'Mari', 'Women Can Code', 'Node']
const removidoDoInicio = outroArray.shift()
console.log(`O item removido foi ${removidoDoInicio}`)
console.log(outroArray)

outroArray.push('Aprovada no processo =D !')
console.log(outroArray)
