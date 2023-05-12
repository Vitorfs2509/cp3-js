function cor1() {
    document.body.style.backgroundImage = "linear-gradient(to right, #c21d00, rgb(155, 18, 0), rgb(131, 4, 0), rgb(79, 0, 0))";
}
function cor2() {
    document.body.style.backgroundImage = "linear-gradient(to right, #00b2e9, rgb(0, 107, 230), rgb(0, 43, 236), rgb(18, 0, 121))";
}
function cor3() {
    document.body.style.backgroundImage = "linear-gradient(to right, #00ae0f, rgb(0, 150, 23), rgb(0, 99, 22), rgb(0, 41, 13))";
}
function cor4() {
    document.body.style.backgroundImage = "linear-gradient(to right, #41003f, rgb(44, 2, 74), rgb(53, 0, 52), rgb(66, 0, 71))";
}

function validar() {
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var telefone = document.getElementById("Telefone").value;
    var email = document.getElementById("Email").value;
    
    if (nomeCompleto == "" || telefone == "" || email == "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
    
    if (!email.includes("@")) {
      alert("Por favor, digite um endereço de email válido.");
      return false;
    }
    
    return true;
  }