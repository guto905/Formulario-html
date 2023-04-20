function validateForm() {
    var solicitante = document.forms["reembolsoForm"]["solicitante"].value;
    var data = document.forms["reembolsoForm"]["data"].value;
    var despesas = document.getElementsByName("valor[]");
    for (var i = 0; i < despesas.length; i++) {
        if (despesas[i].value == "") {
            alert("Por favor, preencha todos os campos de despesa.");
            return false;
            
        }
    }
}

function addDespesa() {
    var table = document.getElementById("despesas");
    var row = table.insertRow(-1);
    var valor = row.insertCell(0);
    var tipo = row.insertCell(1);
    valor.innerHTML = '<input type="number" step="0.01" name="valor[]" required>';
    tipo.innerHTML = '<input type="text" name="tipo[]" required>';

    location.href = "aprovacao.html";
}

