
function validacao() {
  
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");

  let resposta = document.getElementById("resposta");
  let name = String(nome.value);
  let Email = String(email.value);

 
 
 if (name == "" || Email == "") {
    nome.style.border = '1px solid red'
    email.style.border = '1px solid red'
    resposta.style.color = "red";
    resposta.innerHTML = "preencha todos os campos";
  } else {
      nome.style.border = '1px solid green'
      email.style.border = '1px solid green'
    resposta.style.color = "green";
    resposta.innerHTML = "Mensagem enviada com sucesso";
  } 
  name.reset()
  email.reset()
  
}
