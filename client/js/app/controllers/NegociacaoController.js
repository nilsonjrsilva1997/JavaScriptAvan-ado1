class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');        
    }

    adicionar(event) {

        event.preventDefault();

        let helper = new DateHelper();

        let data = helper.textoParaData(this._inputData.value);       

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );

        console.log(negociacao);

        console.log( helper.dataParaTexto(negociacao.data));
        
        
    }
}

