const tabela = document.querySelector("#tabelaChamados tbody");

let chamados = [];

function carregarChamados() {

    chamados = JSON.parse(
        localStorage.getItem("chamados")
    ) || [];

    chamados.forEach(chamado => {

        if (!chamado.status) {
            chamado.status = "Aberta";
        }

    });

    tabela.innerHTML = "";

    chamados.forEach((chamado, index) => {

        // Oculta chamados concluídos
        if (chamado.status === "Concluída") {
            return;
        }

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${chamado.os}</td>
            <td>${chamado.data}</td>
            <td>${chamado.posto} ${chamado.nome}</td>
            <td>${chamado.secao}</td>
            <td>${chamado.equipamento}</td>

            <td>
                <select
                    class="status-select status-${chamado.status
                        .toLowerCase()
                        .replace(" ", "-")}"
                    onchange="alterarStatus(${index}, this.value)"
                >

                    <option value="Aberta" ${
                        chamado.status === "Aberta" ? "selected" : ""
                    }>
                        Aberta
                    </option>

                    <option value="Em andamento" ${
                        chamado.status === "Em andamento" ? "selected" : ""
                    }>
                        Em andamento
                    </option>

                    <option value="Concluída" ${
                        chamado.status === "Concluída" ? "selected" : ""
                    }>
                        Concluída
                    </option>

                </select>
            </td>

            <td>
                <button
                    class="btn-detalhes"
                    onclick="verDetalhes(${index})"
                    title="Ver detalhes do chamado">
                    Ver
                </button>
            </td>
        `;

        tabela.appendChild(linha);

    });

}

carregarChamados();

function verDetalhes(index) {

    const chamado = chamados[index];

    const conteudo = document.getElementById("conteudoModal");

    conteudo.innerHTML = `
    
        <div class="campo-modal">
            <strong>OS:</strong>
            ${chamado.os}
        </div>

        <div class="campo-modal">
            <strong>Data:</strong>
            ${chamado.data}
        </div>

        <div class="campo-modal">
            <strong>Militar:</strong>
            ${chamado.posto} ${chamado.nome}
        </div>

        <div class="campo-modal">
            <strong>Seção:</strong>
            ${chamado.secao}
        </div>

        <div class="campo-modal">
            <strong>Equipamento:</strong>
            ${chamado.equipamento}
        </div>

        <div class="campo-modal">
            <strong>Status:</strong>
            ${chamado.status}
        </div>

        <div class="campo-modal">
            <strong>Descrição do problema:</strong>

            <p class="problema-modal">
                ${chamado.problema}
            </p>
        </div>

    `;

    document.getElementById("modalDetalhes").style.display = "block";
}

function fecharModal() {

    document.getElementById("modalDetalhes").style.display = "none";

}

window.onclick = function(event) {

    const modal = document.getElementById("modalDetalhes");

    if (event.target === modal) {

        modal.style.display = "none";

    }

}

function alterarStatus(index, novoStatus) {

    chamados[index].status = novoStatus;

    localStorage.setItem(
        "chamados",
        JSON.stringify(chamados)
    );

    carregarChamados();

}

// Atualiza automaticamente o painel a cada 5 segundos
setInterval(carregarChamados, 5000);