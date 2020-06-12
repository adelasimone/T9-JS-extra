let produtos = [{
        id: 123,
        nome: 'Camiseta',
        cor: 'azul',
        tamanho: 'P',
        categoria: 'Vestuário',
        estoque: 10,
        disponivel: true,
        precoUnitario: 15
    },
    {
        id: 125,
        nome: 'Regata',
        cor: 'azul',
        tamanho: 'GG',
        categoria: 'Vestuário',
        estoque: 0,
        disponivel: false,
        precoUnitario: 20
    },
    {
        id: 456,
        nome: 'Calça',
        cor: 'preto',
        tamanho: 'GG',
        categoria: 'Vestuário',
        estoque: 1,
        disponivel: true,
        precoUnitario: 15
    },
    {
        id: 982,
        nome: 'Tênis',
        cor: 'amarelo',
        tamanho: '38',
        categoria: 'Esportes',
        estoque: 2,
        disponivel: true,
        precoUnitario: 125
    },
];

const arrayAcrescimo = produtos.map(
    (item) => {

        // const contadorAcrescimo = parseFloat((item.precoUnitario / 100) * 101.15);

        // return contadorAcrescimo
        return {
            id: item.id,
            nome: item.nome,
            preco: item.precoUnitario * 1.15
        }
    }
);
console.log(arrayAcrescimo)