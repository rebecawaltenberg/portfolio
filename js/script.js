
function mensagens(){
    var quem = document.querySelector("#inputName");
    var email = document.querySelector("#inputEmail");
    var texto = document.querySelector("#inputText");
    console.log (quem.value, email.value, texto.value);


     // Json parse - analisa uma string e transforma em objeto js

     var dados = JSON.parse(localStorage.getItem("ultimasMensagens"));
    
     // dados é o meu array vazio
       if(dados == null){
           localStorage.setItem("ultimasMensagens", "[]");
           dados = [];
   
       }
   
       // variável a ser inserida no array
   
       var contato = {
           nome: quem.value,
           email: email.value,
           texto: texto.value
       }
   
        // adiciona variável no array
   
       dados.push(contato);
   
         
       localStorage.setItem ("ultimasMensagens", JSON.stringify(dados));
   
       alert ("Você tem uma nova mensagem de contato!");
   
       nome.value = "";
       email.value = "";
       texto.value = "";

     
    }

      // limpa as mensagens da página "Mensagens"
function limparMensagens() {
    localStorage.removeItem("ultimasMensagens"); 
    // Remove os dados salvos no Local Storage
  }
  
  // botão de limpar mensagens
  var btnLimparMensagens = document.getElementById("btnLimparMensagens");
  btnLimparMensagens.addEventListener("click", limparMensagens);
 
   