const formCompra = document.getElementById('form-compra');
const totalCompraInput = document.getElementById('total-compra');
const tipoClienteSelect = document.getElementById('tipo-cliente');
const resultadoDiv = document.getElementById('resultado');

formCompra.addEventListener('submit', (event) => {
    event.preventDefault();
c
    const totalCompra = parseFloat(totalCompraInput.value);
    const tipoCliente = parseInt(tipoClienteSelect.value);

    let desconto = 0;
    switch (tipoCliente) {
        case 1:
            desconto = 0;
            break;
        case 2:
            desconto = 0.1;
            break;
        case 3:
            desconto = 0.05;
            break;
        default:
            desconto = 0;
    }

    const valorTotal = totalCompra - (totalCompra * desconto);

    resultadoDiv.innerHTML = `
        <p>Valor total da compra: R$ ${totalCompra.toFixed(2)}</p>
        <p>Desconto: ${desconto * 100}%</p>
        <p>Valor a pagar: R$ ${valorTotal.toFixed(2)}</p>
    `;
});