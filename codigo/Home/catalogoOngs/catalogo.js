
function funcTeste() {
    let estilo = getComputedStyle(document.querySelector("#description"));
    if (estilo.display == "none") {
        document.getElementById("description").style.display = "block";
    } else {
        document.getElementById("description").style.display = "none";
    }
}
