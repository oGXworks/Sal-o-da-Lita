
// 🔥 ANIMAÇÃO AO ROLAR A PÁGINA
const elementos = document.querySelectorAll(".animate");

function animarScroll() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;
    if (topo < alturaTela - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animarScroll);
animarScroll();

const servicos = document.querySelectorAll(".servico");

servicos.forEach(card => {
  const mini = card.querySelector(".mini-agenda");
  const botao = card.querySelector(".btn-whats");

  // ABRIR AO CLICAR NO CARD (MAS NÃO NOS INPUTS)
  card.addEventListener("click", function (e) {

    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "BUTTON"
    ) {
      return;
    }

    // fecha os outros
    document.querySelectorAll(".mini-agenda").forEach(m => {
      if (m !== mini) m.style.display = "none";
    });

    mini.style.display = mini.style.display === "block" ? "none" : "block";
  });

  // BOTÃO WHATSAPP
  botao.addEventListener("click", function (e) {
    e.stopPropagation(); // 🔥 ESSENCIAL

    const servico = card.dataset.servico;
    const data = card.querySelector(".data").value;
    const hora = card.querySelector(".hora").value;

    if (!data || !hora) {
      alert("Preencha data e horário");
      return;
    }

    const mensagem = `
Olá! Gostaria de agendar um horário.

💇 Serviço: ${servico}
📅 Data: ${data}
⏰ Horário: ${hora}
`;

    const numero = "5511985779423";

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  });
});
