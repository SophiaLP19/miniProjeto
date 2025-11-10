cont = 1;
function adicionarTexto(){

    var texto = document.getElementById("caixaTexto").value;
    var check = document.getElementById("checkUrgente").checked;
    var nota = document.createElement("li");
    nota.innerText = texto;
    nota.id = "parágrafo";
    nota.className = "notas";
    document.getElementById("caixaTexto").value = "";
    if(cont==1)
    {
        nota.style.color = "blue";
        cont++;
    }
    else{
        if(cont==2)
        {
            nota.style.color = "green";
            cont++;
        }
        else{
            nota.style.color = "purple";
            cont=1;
        }
    }
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
    function removerTextoUrgente(){
        var remover = document.getElementById("urgentes").lastElementChild;
        remover.remove();
    }
    function removerTextoNUrgente(){
        var remover = document.getElementById("nurgentes").lastElementChild;
        remover.remove();
    }

    function limpar(){
        var remover = document.getElementsByClassName("notas");
        while(remover.length > 0)
        remover[0].remove();
    }
    document.getElementById("caixaTexto").value = "";