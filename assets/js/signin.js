function validatePassword() {
    // Obtenha o valor da senha do campo de entrada
    var password = document.getElementById("password").value;

   // Exemplo: A senha deve ter pelo menos 8 caracteres

    if (password.length < 4) {
        alert("A senha deve ter pelo menos 4 caracteres");
        return;
    } else {
        if (password === 'gisp@2023') {
            // Se a senha for válida, redirecione para index.html
            window.location.href = "index.html";
        }else{
            alert("A senha Errada !");
        }
    }

}
