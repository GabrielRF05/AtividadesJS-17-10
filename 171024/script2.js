let computador = {
    modelo: "",
    cpu: "",
    ram: "",
    hd: ""
}

function preencheDados(computador){
    computador.modelo = prompt("Insira o modelo")
    computador.cpu = prompt("Insira a cpu")
    computador.ram = prompt("Insira a memória ram")
    computador.hd = prompt("Insira o hd")

}

console.log(preencheDados(computador))

function imprimeDados(computador){
    console.log(computador)

}

function atualizaPc(computador){

}

console.log(imprimeDados(computador))