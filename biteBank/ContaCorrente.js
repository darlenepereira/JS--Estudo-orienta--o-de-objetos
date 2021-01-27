
export class contaCorrente{
    agencia;
    conta;
    _cliente;
    _saldo = 0;
    static numeroDeContas = 0;


    set cliente(novoValor){
        if(novoValor instanceof Cliente){ 
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente
    }

    get agencia(){
        return this.agencia
    }

    get conta(){
        return this.conta
     }

    

    get _saldo(){ // get = valor de leitura
        return this._saldo
    }


    constructor(cliente, agencia, conta){
        this._cliente = cliente;
        this.agencia = agencia;
        this.conta = conta;
        contaCorrente.numeroDeContas += 1;
    }



    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -=valor;
            return valor; //retornando o valor que ele pediu
         }
    }

    depositar(valor){
        if(valor <= 0){
            return; //Early return = para verificar tudo o que você não quer primeiro
        }
        this._saldo += valor;
        // console.log(this._saldo)
    }


    transferir(valor, conta){
        const valorSacado = this.sacar(valor); // saca o valor para transferir
        conta.depositar(valorSacado); // pega a conta e transfere o valor
    }
}
 