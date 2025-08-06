//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function exibirListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');//Pega a lista (o <ul>) do HTML
    listaAmigos.textContent = '';//limpa o imput para adicionar o proximo amigo.

    //loop que percorre a lista de participantes;
    for( i = 0; i < amigos.length; i++) {
        const nome = amigos[i];//pega o nome do participante na posição do array (i);

        const novoItem = document.createElement('li');//cria um novo elemento de lista(<li>);
        novoItem.textContent = nome;// adiciona o nome do participante como um item da lista de elementos <li>
        
        listaAmigos.appendChild(novoItem); //anexa a lista de elementos a lista principal <ul>
    }
}


function adicionarAmigo() {
    let participante = document.getElementById('amigo').value;
    if (participante !== '') {
        amigos.push(participante);
        console.log(amigos);
        document.getElementById('amigo').value = '';
        exibirListaAmigos()
        
    } else {
        alert('Digite o nome dos seus amigos')
    }


}    

function sortearAmigo() {
    amigos.length > 0;
    if (amigos.length === 0) {
        alert('todos já foram sorteados');
        return
    }

    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    let nomeSorteado = amigos.splice(indiceAleatorio, 1)[0];

    listaAmigos.textContent = nomeSorteado;
    console.log(indiceAleatorio);
}

function limparCampo() {
     let listaAmigos = document.getElementById('listaAmigos');//Pega a lista (o <ul>) do HTML
    listaAmigos.textContent = '';//limpa o imput para adicionar o proximo amigo.
}