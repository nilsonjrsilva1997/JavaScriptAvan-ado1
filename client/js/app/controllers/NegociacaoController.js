class NegociacaoController {

    constructor() {
        // rodando no contexto do document
        let $ = document.querySelector.bind(document);
        this.inputQuantidade = $('#quantidade');
        this.inputData = $('#data');
        this.inputValor = $('#valor');        
    }

    adicionar(event) {
        // mudando o evento default do form
        event.preventDefault();

        console.log(this.inputData.value);
        console.log(this.inputValor.value);
        console.log(this.inputQuantidade.value);
    }
}