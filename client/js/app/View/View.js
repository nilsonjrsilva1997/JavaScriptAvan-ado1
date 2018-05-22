class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        throw new Error('Errou!!!');
    }

    updatemodel() {
        this._elemento.innerHTML = this._template(model);
    }
    
}