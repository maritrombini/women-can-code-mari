//Crie uma função chamada criaPares que receba como parâmetro o array valoresNum, nessa função deve ser executado um for que imprime na tela apenas os valores pares.
//Resolução arrow function

var valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const criaPares = valoresNum => {
  for (let indice = 0; indice < valoresNum.length; indice++) {
    if (valoresNum[indice] % 2 === 0) {
      console.log(valoresNum[indice])
    }
  }
}

console.log(criaPares(valoresNum))

//Resolução função simples

//var valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function criaPares(ValoresNum) {

//for(let indice = 0; indice < valoresNum.length; indice++) {
//  if(valoresNum[indice] % 2 === 0) {
//   console.log(valoresNum[indice])
//  }
// }

//}

//console.log(criaPares(valoresNum))
