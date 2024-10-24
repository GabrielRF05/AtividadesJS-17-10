function soma(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 != 0) {
        return num1 / num2;
    }
}

let operacao;
let num1, num2;

while (operacao != 0) {
    operacao = Number(prompt("1 - Soma \n 2 - Subtracao \n 3 - Multiplicacao \n 4 - Divisao"));
    
        num1 = parseFloat(prompt("Insira o primeiro numero: "));
        num2 = parseFloat(prompt("Insira o segundo numero: "));

    if (operacao == 1) {
        alert(soma(num1, num2));
    } 
    else if (operacao == 2) {
        alert(sub(num1, num2));
    } 
    else if (operacao == 3) {
        alert(multi(num1, num2));
    } 
    else if (operacao == 4) {
        alert(divisao(num1, num2));
    } 
    else if (operacao == 0) {
        break
    } 
    else {
        alert("Opção invalida!");
    }
}
