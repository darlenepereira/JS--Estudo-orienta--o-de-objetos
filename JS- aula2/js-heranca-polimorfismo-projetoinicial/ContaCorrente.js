import { conta } from "./conta.js";

export class ContaCorrente extends conta{
    static numeroDeContas = 0;
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields

    constructor(agencia, cliente){
        super(agencia, cliente, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    //Sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa  = 1.2
        this._sacar(valor, taxa);
    }

}
