class ListModel {
    constructor() {
        this._negociacoes = [];
    }

    addNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return this._negociacoes;
    }
}