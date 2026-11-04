function cadastrar() {

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let dataNascimento = document.getElementById("data_nascimento").value;
    let email = document.getElementById("email").value;
    let personagem = document.getElementById("personagem").value;

   
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Data de nascimento:", dataNascimento);
    console.log("E-mail:", email);
    console.log("Personagem escolhido:", personagem);
    console.log("mensagem", mensagem);
    
if(nome === ""){
    alert("Digite seu nome, nao esqueça");
}
if(idade === ""){
    alert("Preencha com sua idade, nao esqueça");
}
if(email === ""){
    alert("Digite seu email, não esqueça");
}
if(idade < 10){
    alert("Não pode fazer o cadastro, muito jovem!");
}
}
 