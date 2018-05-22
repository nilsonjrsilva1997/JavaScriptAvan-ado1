class Mensagem {
    constructor(elemento) {
        // this._texto
        super(elemento);
    }

    get texto() {
        return this._texto;
    }
    
    set texto(texto) {
        this._texto = texto;
    }
}

let mensagem = new Mensagem('Jeane');
console.log(mensagem.texto)