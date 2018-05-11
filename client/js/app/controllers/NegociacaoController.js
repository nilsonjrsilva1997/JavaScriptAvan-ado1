class NegociacaoController {
    adicionar(event) {
        // mudando o evento default do form
        event.preventDefault();

        // rodando no contexto do document
        let $ = document.querySelector.bind(document);

        let inputQuantidade = $('#quantidade');
        let inputData = $('#data');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputValor.value);
        console.log(inputQuantidade.value);
    }
}