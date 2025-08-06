Sorteador de Amigos
Este é um projeto simples em JavaScript para sortear nomes de uma lista de amigos, garantindo que cada nome seja sorteado apenas uma vez. É ideal para brincadeiras como amigo secreto, sorteios rápidos ou qualquer situação em que você precise selecionar nomes de forma aleatória e sem repetição.

🚀 Funcionalidades
Adicionar Amigos: Insira os nomes dos amigos em um campo de texto e adicione-os a uma lista.

Exibir Lista: A lista de amigos adicionados é exibida dinamicamente na tela.

Sortear Amigo: O projeto sorteia um amigo da lista de forma aleatória e o exibe.

Sem Repetição: Cada nome sorteado é removido da lista, garantindo que ele não será sorteado novamente.

⚙️ Como Usar
Para usar este projeto, você precisará de um arquivo HTML e um arquivo JavaScript.

HTML: Crie a estrutura básica da página, incluindo um campo de texto para adicionar amigos, um botão para adicionar, um botão para sortear e uma lista para exibir os nomes.

HTML

<input type="text" id="amigo" placeholder="Digite o nome do amigo">
<button onclick="adicionarAmigo()">Adicionar Amigo</button>
<button onclick="sortearAmigo()">Sortear</button>

<h3>Lista de Amigos:</h3>
<ul id="listaAmigos"></ul>
JavaScript: Anexe o código fornecido ao seu arquivo HTML. O código gerencia toda a lógica, desde adicionar os amigos até sortear.

💻 Código JavaScript
O código principal é dividido em três funções, cada uma com uma responsabilidade específica:

adicionarAmigo()
Esta função é chamada quando você clica para adicionar um amigo.

Pega o nome digitado no campo de texto.

Verifica se o campo não está vazio antes de adicionar.

Adiciona o nome à lista amigos (um array).

Limpa o campo de texto para que um novo nome possa ser digitado.

Chama a função exibirListaAmigos() para atualizar a lista na tela.

exibirListaAmigos()
Esta função é responsável por atualizar a visualização da lista no HTML.

Pega o elemento <ul> com o ID listaAmigos.

Limpa o conteúdo anterior da lista para evitar duplicatas.

Usa um loop for para percorrer a lista de amigos (o array) e cria um novo item <li> para cada amigo.

Adiciona cada novo item à lista <ul> no HTML.

sortearAmigo()
Esta é a função central para o sorteio.

Verifica se ainda há amigos na lista. Se a lista estiver vazia, exibe um alerta e para a execução.

Gera um índice aleatório dentro do tamanho da lista.

Usa o método splice() para remover o amigo da lista original na posição aleatória e armazena o nome sorteado. Isso garante que o mesmo nome não seja sorteado novamente.

Exibe o nome sorteado na lista <ul> no HTML.

📝 Observações
O código é modular e fácil de entender.

A função sortearAmigo() usa o método splice(indiceAleatorio, 1) para remover um item do array de forma aleatória, evitando repetições.

O projeto pode ser facilmente expandido com mais funcionalidades, como um botão para reiniciar o sorteio ou remover amigos individualmente da lista.
