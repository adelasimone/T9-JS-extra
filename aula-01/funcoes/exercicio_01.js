//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};

/*Retorne o seguinte conteúdo:

A {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.

O retorno deverá ser template string*/

// criar funcão pegarNomeCompleto(parametro1, parametro)
// dentro da funcao, insira objeto endereco
// retornar com algumas informações:

// const primeiroNome = 'Adela';
// const sobrenome = 'Apaza';

function pegarNomeCompleto(nome, sobrenome){
  
  let endereco = {
    cidade: 'São Paulo/SP',
    bairro: 'Centro', 
    rua: 'Rua dos Pinheiros',
    numero: 1293
  }
  return `${nome} ${sobrenome}`
} 

console.log(pegarNomeCompleto)
