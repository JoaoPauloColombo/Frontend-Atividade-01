/* Victor */
const botao = document.getElementById("btn");

const lista = []

botao.addEventListener('click', function(event){
    event.preventDefault();

    const pessoa = {
        name: nome.value,
        login: login.value,
        categoria: categoria.value,
        valor: valor.value,
        NumProdutos:NumProdutos.value,
        lembrete: lembrete.value

    }

    nome.value = ""
    login.value = ""
    valor.value = ""
    NumProdutos.value = ""
    lembrete.value = ""


    lista.push(pessoa)
    console.log(lista);
})