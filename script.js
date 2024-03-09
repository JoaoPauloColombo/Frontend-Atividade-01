const botao = document.getElementById("btn");
const lista = document.getElementById("lista");

botao.addEventListener('click', function (event) {
    event.preventDefault();

    const pessoa = {
        name: nome.value,
        login: login.value,
        categoria: categoria.value,
        valor: valor.value,
        NumProdutos: NumProdutos.value,
        codigoProduto: codigoProduto.value
    }

    nome.value = "";
    login.value = "";
    categoria.value = "";
    valor.value = "";
    NumProdutos.value = "";
    codigoProduto.value = "";

    const div = document.createElement("div");
    div.classList.add("pessoa-container");

    div.innerHTML = 
                    `<p>Name: ${pessoa.name}</p>
                    <p>Login: ${pessoa.login}</p>
                    <p>Categoria: ${pessoa.categoria}</p>
                    <p>Valor: ${pessoa.valor}</p>
                    <p>NumProdutos: ${pessoa.NumProdutos}</p>
                    <p>Código do Produto: ${pessoa.codigoProduto}</p>`;
    lista.appendChild(div);
});
