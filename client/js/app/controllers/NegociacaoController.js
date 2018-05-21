class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');   
        this._listaNegociacao = new ListModel();   
    }

    adicionar(event) {

        event.preventDefault();    

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),            
            this._inputQuantidade,
            this._inputValor
        );

        this._listaNegociacao.addNegociacao(negociacao);
        this._limpaFormulario();
    }

    _criarNegociacao() { 

    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
    
        this._inputData.focus();    
    }
}

