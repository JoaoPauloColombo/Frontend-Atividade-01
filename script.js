/* Victor */
const botao = document.getElementById("btn");

const lista = []

botao.addEventListener('click', function(event){
    event.preventDefault();

    const pessoa = {
        longin: login.value,
        nome: nome.value,
        categoria: categoria.value,
        lembrete: lembrete.value
    }
    lista.push(pessoa)
    console.log(lista)
})