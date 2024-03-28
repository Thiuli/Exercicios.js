function calcularDesconto() {
    const combustivel = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);
    let precoLitro = 0;
    let desconto = 0;
    let valorTotal = 0;

    // Definindo o preço por litro
    switch (combustivel) {
        case "a":
            precoLitro = 4.90;
            break;
        case "g":
            precoLitro = 5.30;
            break;
        default:
            alert("Combustível inválido!");
            return;
    }

    // Calculando desconto
    if (combustivel === "a") {
        if (litros <= 20) {
            desconto = litros * 0.03;
        } else {
            desconto = litros * 0.05;
        }
    } else if (combustivel === "g") {
        if (litros <= 20) {
            desconto = litros * 0.04;
        } else {
            desconto = litros * 0.06;
        }
    }

    // Calculando valor total
    valorTotal = litros * precoLitro - desconto;

    // Exibindo resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `
        <p>Combustível: ${combustivel.toUpperCase()}</p>
        <p>Quantidade de litros: ${litros}</p>
        <p>Desconto: ${desconto.toFixed(2)}% (${desconto.toFixed(2)} reais)</p>
        <p>Valor total: ${valorTotal.toFixed(2)} reais</p>
    `;
}