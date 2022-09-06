// Pegando botão responsável pela cópia (ícone de envelope)
let copyBtn = document.getElementById('email-copy-btn');
// Adicionando evento ao clicar
copyBtn.onclick = () => {
  // Copiando meu emial para o clipboard
  navigator.clipboard.writeText("joaovictordev2003@gmail.com")
    // Alerta se deu certo ou errado
    .then(() => alert("Gmail copiado com sucesso!"))
    .catch(() => alert("Houve um erro ao copiar o gmail. Copie daqui: joaovictordev2003@gmail.com"));
}