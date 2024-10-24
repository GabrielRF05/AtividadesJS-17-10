function CONVERTEMOEDA(valorReais, converter, moeda) {
    let valorConvertido = valorReais * converter;
    console.log(`R$ ${valorReais} vale ${valorConvertido} em ${moeda}.`);
}


function pegaValores() {
    let reais = parseFloat(prompt("Informe o valor em reais:"));
    let cotacao = parseFloat(prompt("Informe o valor de cotação:"));
    let moeda = prompt("Informe a moeda de destino:");

    CONVERTEMOEDA(reais, cotacao, moeda);
}

pegaValores();
