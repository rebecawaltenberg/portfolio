var btnSalvar = document.querySelector("#btnSalvar");

btnSalvar.addEventListener("click", function (event){
    event.preventDefault();
   var formContato = document.querySelector("#formContato");
    console.log(formContato.nome.value);
    console.log(formContato.email.value);
    console.log(formContato.message.value);

})