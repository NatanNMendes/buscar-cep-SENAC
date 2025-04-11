function buscarEndereco() {
    var cep = document.getElementById('cepInput').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const divEndereco = document.getElementById('endereco');

        if (data.erro) {
            divEndereco.innerHTML = "<p>CEP não encontrado.</p>";
        } else {
            divEndereco.innerHTML = `
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Rua:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
        }

        divEndereco.style.display = "block";
    })
    .catch(error => {
        console.error('Erro:', error);
        const divEndereco = document.getElementById('endereco');
        divEndereco.innerHTML = "<p>Erro ao buscar o CEP.</p>";
        divEndereco.style.display = "block";
    });
}

