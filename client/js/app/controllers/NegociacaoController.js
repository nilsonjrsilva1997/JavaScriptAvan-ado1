class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');        
    }

    adicionar(event) {

        event.preventDefault();    

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputValor
        );

        console.log(negociacao);

        console.log(DateHelper.dataParaTexto(negociacao.data));
        
        
    }
}

