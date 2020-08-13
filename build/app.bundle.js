export function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == 'pepe' && password == 'pepe') {
        window.location = "./views/resultado_ok.html";
    } else {
        window.location = "./views/resultado_error.html";
    }
}
