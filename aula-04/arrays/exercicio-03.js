const dados = [
    {
    "nome": "Tawany",
    "livros": [
        "Harry Potter",
        "1984"
    ]
    },
    {"nome": "Suzelen",
    "livros": [
        "Capitões da areia",
        "Menina bonita do laço de fita"]
    }
]

let novoArray = []

const todosLivros = dados.reduce(
    (valorInicial, item) => {
        const obterTodosLivros = valorInicial.concat(item.livros)

        return obterTodosLivros
    }, novoArray
    )
    console.log(todosLivros)


// const listaNum = [1, 2, 3, 4]

// const calculoSOma = listaNum.reduce(
//     (acumulador, valorAtual, indiceAtual, arrayOriginal) => {
        
//         console.log('acc', acumulador)
//         console.log('valor atual', valorAtual)
//         console.log('indice atual', indiceAtual)
        
//         const obterResultado = acumulador + valorAtual
//         console.log('valor acumulado', obterResultado)
//         return obterResultado
//     }
// )



// const listaNum = [1, 2, 3, 4]

// // PODEMOS DECLARAR OO VALOR INICIAR QUE VAI SER ZERO, AQUI:
//     let valorInicial = 0;


// const calcularSoma = listaNum.reduce(
//     (acumulado, item) => {
//         const obterResultado = acumulado+item
//         return obterResultado
//     }, valorInicial    // OU 0
//     )

//     console.log(calcularSoma)