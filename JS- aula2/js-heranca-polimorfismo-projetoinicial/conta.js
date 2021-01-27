// classe abstrata

export class conta {
    constructor(agencia, cliente, saldoInicial){
        if(this.constructor == conta){
            throw new Error('Você não pode instanciar um objeto do tipo conta diretamento')
        }

        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }



    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor; 
        }
    }

    get cliente(){ 
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }



    sacar(valor){

       let taxa = 1 * valor;
       return this._sacar(valor, taxa) 
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }



    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}