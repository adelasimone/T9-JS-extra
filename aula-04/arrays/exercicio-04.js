function mostrarPrimeiroUltimoChar(listaDeNomes){
    let novoArray = [];
    
    listaDeNomes.forEach(caractere => {
        if(typeof caractere === 'string'){
            novoArray.push(caractere[0] + caractere[caractere.length-1]) // length-1 = indexOf (ultimo indice)
        }
    });
    return novoArray
}
const obterPrimeiroUltimoChar = mostrarPrimeiroUltimoChar(['Adela', 'Simone', 'Apaza', 'Condori'])


console.log(obterPrimeiroUltimoChar)