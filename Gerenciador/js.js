function AdicionarTarefa(){
    let tarefa = document.querySelector("#tarefa").value;
    let data = document.querySelector("#data").value;
    let linha = "<tr><td>" + tarefa + "</td><td>" + data + "</td>";
    linha += "<td><img src='imagens/checkout.png' alt='fechamento' class='checkout'></td></tr>";

    document.querySelector("#tarefas-realizar tbody").innerHTML += linha;
}

// function DataAtualFormatada(){
//     let data = document.querySelector("#data").value;
//     // let dia  = data.getDate().toString().padStart(2, '0');
//     let mes  = data.getMonth();
//     let ano  = data.getFullYear();
//     alert ( "/"+mes+"/"+ano);
// }

function LimparCampos(){
    document.querySelector("#tarefa").value = "";
    document.querySelector("#data").value = "";
}

function ValidarCampos(){
    let tarefa = document.querySelector("#tarefa").value;
    let data = document.querySelector("#data").value;
    let erros = "";

    if(tarefa == ""){
        erros += "<li>A <strong>Tarefa</strong> deve ser preenchida</li>";
        document.querySelector("#tarefa").focus();
    }
    
    else if(data == ""){
        erros += "<li>A <strong>data</strong> deve ser preenchida</li>";
        document.querySelector("#data").focus();
    }
    
    document.querySelector("#lista-erros").innerHTML = erros;

    if(erros == ""){
        return true;
    }else{
        return false;
    }

}

botaoAdicionarTarefa = document.querySelector("#botao-adicionar");
botaoAdicionarTarefa.onclick = (function(){
    if(ValidarCampos()){
        AdicionarTarefa();
        LimparCampos();
        // DataAtualFormatada();
    }
});


function FazerCheckout(elemento){
    let tdPai = elemento.parentElement;
    let trPai = tdPai.parentElement;
    trPai.remove();
}

document.addEventListener('click',function(e){
    if(e.target && e.target.className== 'checkout'){
        FazerCheckout(e.target);
    }
});