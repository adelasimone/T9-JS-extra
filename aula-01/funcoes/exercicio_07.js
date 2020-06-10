/* Crie uma funcao que receba o parametro ano de nascimento e retorne a idade a partir do ano atual*/

function calculoIdade(ano) {
  const anoAtual = new Date().getFullYear(); //pega o ano atual do sistema
  const calculoIdade = anoAtual - ano;

  console.log(`A sua idade e ${calculoIdade} anos`)
}

const resultadoIdade = calculoIdade(2000)