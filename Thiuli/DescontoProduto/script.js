function calcularDesconto() {
    // Entrada de dados
    const nome = document.getElementById("nome").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const preco = parseFloat(document.getElementById("preco").value);

    // Processamento de dados
    const total = quantidade * preco;
    let desconto = 0;

    // Cálculo do desconto
    if (quantidade <= 5) {
        desconto = total * 0.02;
    } else if (quantidade <= 10) {
        desconto = total * 0.03;
    } else {
        desconto = total * 0.05;
    }

    // Saída de dados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <h2>Resultado</h2>
        <p>Nome do produto: ${nome}</p>
        <p>Quantidade: ${quantidade}</p>
        <p>Preço unitário: R$ ${preco.toFixed(2)}</p>
        <p>Total: R$ ${total.toFixed(2)}</p>
        <p>Desconto: R$ ${desconto.toFixed(2)}</p>
        <p>Total a pagar: R$ ${(total - desconto).toFixed(2)}</p>
    `;
}