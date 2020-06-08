/*Dado um array de objetos.
*/

const tarefas = [{
  passear: false,
  afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado",
    "Descansar"],
  reuniao: {
    faculdade: "Segunda-feira",
    amigos: "Sexta-feira"
  },
},
];

/* Acesse a propriedade do objeto do terceiro item*/


let acessoTarefas = tarefas[0].afazeres[2];

console.log(acessoTarefas)
