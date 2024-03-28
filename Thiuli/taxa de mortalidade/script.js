const calcular = () => {
  const indicador = document.getElementById("indicador").value;
  const nascidos = document.getElementById("nascidos").value;
  const obitos = document.getElementById("obitos").value;
  const habitantes = document.getElementById("habitantes").value;

  let taxa;

  switch (indicador) {
    case "natalidade":
      taxa = (nascidos * 1000) / habitantes;
      break;
    case "mortalidade":
      taxa = (obitos * 1000) / habitantes;
      break;
    default:
      alert("Opção inválida!");
      return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `A taxa de ${indicador} é de ${taxa.toFixed(2)} por mil habitantes.`;
};