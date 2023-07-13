var btnSalvar = document.querySelector("#btnSalvar");

btnSalvar.addEventListener("click", function (event){
    event.preventDefault();
    var formContato = document.querySelector("#formContato");
    var contato = {
        nome: formContato.nome.value,
        email: formContato.email.value,
        texto: formContato.message.value
    }

});




Ao clicar no botão de submeter o formulário, deve ser criado um objeto Javascript
que represente os dados do formulário;

Cada objeto criado deve ser inserido em um array que representa as mensagens
submetidas;