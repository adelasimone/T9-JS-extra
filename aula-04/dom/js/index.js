const formulario = document.querySelector(".lista__form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  /*inserir aqui o código*/

const inputNome = document.getElementById('listaInputNome').value;
const inputValor = document.getElementById('listaInputValor').value;
const inputData = document.getElementById('listaInputData').value;

const tabela = document.querySelector('.extrato__table')

const linhaTabela = document.createElement('tr')
const nome = document.createElement('td')
const valor = document.createElement('td')
const data = document.createElement('td')

nome.textContent = inputNome
valor.textContent = inputValor
data.textContent = inputData

linhaTabela.appendChild(nome)
linhaTabela.appendChild(valor)
linhaTabela.appendChild(data)
tabela.appendChild(linhaTabela)

});