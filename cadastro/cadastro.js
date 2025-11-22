 const API_URL = "https://690f565745e65ab24ac355d4.mockapi.io/api/imoveis";

document.querySelector("#formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();

    const novoImovel = {
        titulo: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricao").value,
        valor: Number(document.querySelector("#valor").value),
        area: Number(document.querySelector("#area").value),
        quartos: Number(document.querySelector("#quartos").value),
        tipo: document.querySelector("#tipo").value,
        localizacao: document.querySelector("#localizacao").value,
        fotos: [document.querySelector("#fotos").value],
        destaque: document.querySelector("#destaque").checked
    };

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoImovel)
        });

        if (!resposta.ok) throw new Error("Erro ao cadastrar");

        document.querySelector("#msg").textContent = "Imóvel cadastrado com sucesso!";
        document.querySelector("#msg").style.color = "green";

        e.target.reset();

    } catch (erro) {
        document.querySelector("#msg").textContent = "Erro ao cadastrar imóvel.";
        document.querySelector("#msg").style.color = "red";
        console.error(erro);
    }
});
