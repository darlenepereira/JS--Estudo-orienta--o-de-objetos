import { conta } from "./conta.js";

export class contaPoupanca extends conta{
    constructor(agencia, cliente){
        super(agencia, cliente, 0);
    }

}



//Herança é o compartilhamento do código para evitar a duplicidade de dados comuns a serem utilizados mais de uma vez
// extends =  está realizando a função de externder e conectar a nossa conta.js a class contaPoupanca. Ele faz uma refência a nossa class mãe
//super(), está adicionando as informações por parametro.