
function ir(event){
  event.preventDefault();
  let c = "cliente";
  if(document.form.password.value === c){
    window.location="cotizador.html";
  }else{
    alert("Contrasenha incorreta");
  }
}


window.addEventListener('DOMContentLoaded', function(event){
  document.querySelector('form').addEventListener('submit', ir)
})


  
