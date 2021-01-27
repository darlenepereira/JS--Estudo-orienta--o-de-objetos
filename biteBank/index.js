import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente('Ricardo', 11122233309, 494914941);
const cliente2 = new Cliente('Camila', 55522233309, 949419441);

cliente1.saldo = 0;
cliente2.saldo = 0;

const contaCorrenteRicardo = new contaCorrente(cliente1, 1002, 1311199969);

contaCorrenteRicardo.depositar(4000);
contaCorrenteRicardo.depositar(4000);
const valorSacado = contaCorrenteRicardo.sacar(5000);
console.log(valorSacado);
console.log(contaCorrenteRicardo)


const contaCorrenteCamila = new contaCorrente(cliente2, 1001, 1311199969);

contaCorrenteCamila.depositar(10000);
let valor = 4000;
contaCorrenteCamila.transferir(valor, contaCorrenteRicardo)
console.log(contaCorrenteCamila);

console.log(contaCorrente.numeroDeContas);