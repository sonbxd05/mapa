function validacao() {
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");

  let resposta = document.getElementById("resposta");
  let name = String(nome.value);
  let Email = String(email.value);

 
 
 if (name == "" || Email == "") {
    resposta.style.color = "red";
    resposta.innerHTML = "preencha todos os campos";
  } else {
    resposta.style.color = "green";
    resposta.innerHTML = "Mensagem enviada com sucesso";
  } 
}
