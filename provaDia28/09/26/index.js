const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = Number(document.getElementById("idade").value);
    const turma = document.getElementById("turma").value;

    const categoria = document.querySelector(
        'input[name="categoria"]:checked'
    );

    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Turma:", turma);

    // Validação do nome
    if (nome === "") {
        alert("Digite seu nome, não esqueça!");
        return;
    }

    // Validação da idade
    if (!idade) {
        alert("Preencha sua idade, não esqueça!");
        return;
    }

    // Validação da idade mínima
    if (idade < 14) {
        alert("Não é possível realizar o cadastro. A idade mínima é 14 anos.");
        return;
    }

    // Validação da turma
    if (turma === "") {
        alert("Selecione sua turma!");
        return;
    }

    // Validação da categoria
    if (!categoria) {
        alert("Selecione uma categoria do projeto!");
        return;
    }

    // Se chegou aqui, está tudo correto
    alert("Inscrição realizada com sucesso!");

    console.log("Cadastro aprovado!");
});
