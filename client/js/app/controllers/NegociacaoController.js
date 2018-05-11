class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');        
    }

    adicionar(event) {

        event.preventDefault();
        
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );

        let diaMesAno = negociacao.data.getDate() + 
                        '/' + (negociacao.data.getMonth() + 1) +
                        '/' + negociacao.data.getFullYear()

        console.log(diaMesAno);

    }
}

