const formulario = document.getElementById("ordemManutencao");

// Lista de chamados
let chamados = [];

// Envio do formulário

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    // Busca a versão mais atual dos chamados
    chamados = JSON.parse(
        localStorage.getItem("chamados")
    ) || [];

    const posto = document.getElementById("posto").value;
    const nome = document.getElementById("nome").value;
    const secao = document.getElementById("secao").value;
    const equipamento = document.getElementById("equipamento").value;
    const problema = document.getElementById("problema").value;

    const novaOS = {

        os: String(chamados.length + 1).padStart(4, "0"),

        data: new Date().toLocaleString("pt-BR"),

        posto,
        nome,
        secao,
        equipamento,
        problema,

        status: "Aberta"
    };

    chamados.push(novaOS);

    localStorage.setItem(
        "chamados",
        JSON.stringify(chamados)
    );

    const mensagem = document.getElementById("mensagemOS");

    mensagem.innerHTML = `
        ✓ Chamado registrado com sucesso!<br><br>
        A seção de informática analisará a solicitação.
    `;

    mensagem.className = "mensagem-os mensagem-sucesso";

    mensagem.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    setTimeout(() => {
        mensagem.className = "mensagem-os";
        mensagem.innerHTML = "";
    }, 10000);

    formulario.reset();

});