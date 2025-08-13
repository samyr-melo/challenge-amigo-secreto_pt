

# Sorteador de Amigos

Este é um projeto simples em JavaScript para realizar sorteios de nomes de forma aleatória e sem repetição. Perfeito para organizar um amigo secreto ou qualquer sorteio rápido\!

## 🌟 Recursos Principais

  * **Adição de Nomes:** Adicione facilmente nomes a uma lista.
  * **Sorteio Aleatório:** Seleciona um nome de forma justa e aleatória.
  * **Sem Repetição:** Garante que o mesmo nome não seja sorteado duas vezes.

## 🚀 Como Executar o Projeto

Para usar este sorteador, basta ter um arquivo `index.html` e um arquivo `script.js`.

### Passo 1: HTML

Copie este código para o seu arquivo `index.html`. Ele cria a interface básica com os botões e a lista.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Sorteador de Amigos</title>
</head>
<body>
    <h1>Sorteador de Amigos</h1>

    <input type="text" id="amigo" placeholder="Digite o nome do amigo">
    <button onclick="adicionarAmigo()">Adicionar Amigo</button>
    <button onclick="sortearAmigo()">Sortear</button>

    <h3>Lista de Amigos:</h3>
    <ul id="listaAmigos"></ul>

    <script src="script.js"></script>
</body>
</html>
```

### Passo 2: JavaScript

Crie um arquivo chamado `script.js` e adicione o código abaixo. Ele contém toda a lógica do sorteador.

```javascript
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        exibirListaAmigos();
    }
}

// Função para exibir a lista de amigos na tela
function exibirListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos à lista antes de sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    alert(`O amigo sorteado foi: ${amigoSorteado}`);
    exibirListaAmigos(); // Atualiza a lista após o sorteio
}
```

## 🧠 Como Funciona

  * **`adicionarAmigo()`**: Pega o nome do input e o adiciona a um array chamado `amigos`.
  * **`exibirListaAmigos()`**: Percorre o array `amigos` e cria dinamicamente uma lista (`<ul>`) no HTML para mostrar os nomes.
  * **`sortearAmigo()`**:
      * Escolhe um índice aleatório no array `amigos`.
      * Usa o método `Array.prototype.splice()` para remover o amigo sorteado do array, garantindo que ele não seja sorteado novamente.
      * Exibe um alerta com o nome sorteado.

-----
