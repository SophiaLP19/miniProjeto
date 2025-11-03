function adicionarTexto(){
    var texto = document.getElementById("caixaTexto").value;
    var check = document.getElementById("checkUrgente").checked;
    var nota = document.createElement("p");
    nota.innerText = texto;
    nota.id = "parágrafo";

    if(check)
    {
        var urgente = document.getElementById("urgentes");
        urgente.appendChild(nota);
    }
    else
    {
        var nUrgente = document.getElementById("nurgentes");
        nUrgente.appendChild(nota);
    }


    
}