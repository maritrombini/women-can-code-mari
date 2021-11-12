/* Adicione uma propriedade `brinquedoFavorito` ao objeto  `meuCachorro` criado anteriormente e defina-a, como "bolinha". Você pode usar a notação de ponto ou colchete. Imprima-o.*/

const meuCachorro = {
  nome: 'Horus',
  patas: 4,
  caudas: 1,
  principalAmigo: 'EU'
}

meuCachorro.brinquedoFavorito = 'Bolinha'

console.log('')
console.log(meuCachorro['brinquedoFavorito'])

//imprimindo de outro jeito
console.log('')
console.log(meuCachorro.brinquedoFavorito)
