const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMensagem = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("btn-enviar");
const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");

botaoEnviar.addEventListener("click", validarFormulario);

function validarFormulario() {
    let nome = inputNome.value.trim();
    let email = inputEmail.value.trim();
    let mensagem = inputMensagem.value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert(`Obrigado ${nome}, sua mensagem foi enviada com sucesso!`);

        mensagemConfirmacao.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

        inputNome.value = "";
        inputEmail.value = "";
        inputMensagem.value = "";
    }
} 
