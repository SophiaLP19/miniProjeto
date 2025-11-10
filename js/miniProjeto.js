cont = 1;
cont1 = 1;
function adicionarTexto(){

    var texto = document.getElementById("caixaTexto").value;
    var check = document.getElementById("checkUrgente").checked;
    var nota = document.createElement("li");
    nota.innerText = texto;
    nota.id = "parágrafo";
    nota.className = "notas";
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
    function removerTexto(){
        var remover = document.getElementById("parágrafo");
        remover.remove();
    }

    function limpar(){
        var remover = document.getElementsByClassName("notas");
        while(remover.length > 0)
        remover[0].remove();
    }