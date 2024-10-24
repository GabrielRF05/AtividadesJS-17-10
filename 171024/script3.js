function CONVERTEMOEDA(valorReais, converter, moeda) {
    let valorConvertido = valorReais * converter;
    console.log(`R$ ${valorReais} vale ${valorConvertido} em ${moeda}.`);
}


function pegaValores() {
    let reais = parseFloat(prompt("Insira o valor em reais:"));
    let cotacao = parseFloat(prompt("Insira o valor de cotação:"));
    let moeda = prompt("Insira a moeda:");

    CONVERTEMOEDA(reais, cotacao, moeda);
}

pegaValores();
