import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {contaPoupanca} from "./contaPoupanca.js"
import {conta} from "./conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1, 0);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new contaPoupanca(1001, cliente1, 0);
contaPoupancaRicardo.depositar(100);

//Teste de erro ao instanciar tipo conta 
// const conta1 = new conta(1002, cliente1, 0)
// console.log(conta1)

console.log(contaPoupancaRicardo);
console.log(contaCorrenteRicardo);

