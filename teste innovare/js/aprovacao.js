function verDetalhes() {
    var detalhes = document.getElementById("detalhes");
    if (detalhes.style.display === "none") {
        detalhes.style.display = "block";
    } else {
        detalhes.style.display = "none";
    }
}

function aprovar() {
    alert("Reembolso aprovado com sucesso!");
    var detalhes = document.getElementById("detalhes");
    detalhes.style.display = "none";
}

function reprovar() {
    alert("Reembolso reprovado com sucesso!");
    var detalhes = document.getElementById("detalhes");
    detalhes.style.display = "none";
}
