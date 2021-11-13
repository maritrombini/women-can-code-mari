/**Vamos construir uma função validaMaioridade para validar se o ano de nascimento fornecido corresponde a uma pessoa com mais de 18 e assim seja liberada ou não a entrada dela em um determinado show. 1. Receba um parâmetro numérico `anoNascimento` ;
2. Valide se, pela data de nascimento, se trata de alguém com maior de 18 anos;
3. Se for maior que 18 anos, retorne uma `string` dizendo `"Liberação autorizada"`;
4. Se for igual a 18 anos, retorne uma `string` dizendo `"Validar documento de identidade"`;
5. Se for menor de 18 anos, retorne uma `string` dizendo `"ATENÇÃO: Liberação NÃO autorizada"`;
6. Atribua o retorno a uma variável chamada `resultado` e imprima-a. */

// Resolução com arrow function e ternario
const validaMaiorIdade = anoNascimento => {
  return anoNascimento > 18
    ? 'Liberação Autorizada'
    : anoNascimento === 18
    ? 'Validar'
    : 'Nao autorizado'
}
console.log(validaMaiorIdade(12))

// Resolução com function e condicional if else
/*function validaMaiorIdade(anoNascimento) {
  if (anoNascimento > 18) {
    return 'Liberação Autorizada'
  } else if (anoNascimento === 18) {
    return ' Validar documento de identidade'
  } else {
    return 'ATENÇÃO: liberação NÃO autorizada!'
  }
}

const resultado = validaMaiorIdade(15)
console.log(resultado)*/
