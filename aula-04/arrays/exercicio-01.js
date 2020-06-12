const users = [{
        PrimeiroNome: 'Ana',
        ultimoNo: 'Bouley',
        funcao: 'Desenvolvedora'
    },
    {
        PrimeiroNome: 'Chloe',
        ultimoNome: 'Alnaji',
        funcao: 'Desenvolvedora'
    },
    {
        PrimeiroNome: 'Jonathan',
        ultimoNome: 'Alves',
        funcao: 'Publicitário'
    },
    {
        PrimeiroNome: 'Micaela',
        ultimoNome: 'Herman',
        funcao: 'Lead Instructor'
    },
    {
        PrimeiroNome: 'Robert',
        ultimoNome: 'Santos',
        funcao: 'Desenvolvedora'
    },
    {
        PrimeiroNome: 'Wes',
        ultimoNome: 'Correia',
        funcao: 'Instrutor'
    },
    {
        PrimeiroNome: 'Hanna',
        ultimoNome: 'Montana',
        funcao: 'Diretora'
    }
];

const colaboradoraDev = users.filter(
    (item) => {
        // const funcao = item.funcao === 'Desenvolvedora';
        // return funcao
        // OU
        return item.funcao === 'Desenvolvedora';

    })
    
console.log(colaboradoraDev)
