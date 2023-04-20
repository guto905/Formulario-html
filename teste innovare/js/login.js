function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (username == "gestor" && password == "gestor") {
        alert("Login feito com sucesso.");
        location.href = "reembolso.html";
    }else{
        alert('usuario ou senha incorreta')
    }
}
