const listaNomes = document.getElementById('lista-nomes');
const inputNomePesquisa = document.getElementById('nome-pesquisa');
const btnPesquisar = document.getElementById('btn-pesquisar');
const resultadoPesquisa = document.getElementById('resultado-pesquisa');

// Função para adicionar um nome à lista
function adicionarNome(nome) {
    const li = document.createElement('li');
    li.textContent = nome;
    listaNomes.appendChild(li);
}

// Função para pesquisar um nome no vetor
function pesquisarNome(nome, vetor) {
    return vetor.includes(nome);
}

// Vetor para armazenar os nomes
const nomes = [];

// Adicionar evento de clique ao botão
btnPesquisar.addEventListener('click', () => {
    const nomePesquisa = inputNomePesquisa.value.trim();

    // Verificar se o nome está vazio
    if (!nomePesquisa) {
        resultadoPesquisa.textContent = 'Digite um nome para pesquisar.';
        return;
    }

    // Pesquisar o nome no vetor
    const encontrado = pesquisarNome(nomePesquisa, nomes);

    // Exibir o resultado da pesquisa
    if (encontrado) {
        resultadoPesquisa.textContent = 'ACHEI!';
    } else {
        resultadoPesquisa.textContent = 'NÃO ACHEI.';
    }
});

// Ler 10 nomes do usuário
for (let i = 0; i < 10; i++) {
    const nome = prompt(`Digite o nome ${i + 1}:`);
    nomes.push(nome);
    adicionarNome(nome);
}