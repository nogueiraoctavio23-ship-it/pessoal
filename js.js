const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(event) {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let turma = document.getElementById("turma").value;
    
    
    console.log("Nome:", nome).value;
    console.log("Idade:", idade).value;
    console.log("Turma:", turma).value;
    
    
    if(nome === ""){
        alert("Digite seu nome, nao esqueça");
        return;
    }

    if(idade === ""){
        alert("Preencha com sua idade, nao esqueça");
        return
    }

    if(turma === ""){
        alert("Digite seu email, não esqueça");
        return;
    }

    if(idade < 14){
        alert("Não pode fazer o cadastro, muito jovem!");
        return;
    }

    
});
