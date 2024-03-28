function calcularResultado() {
    const time1 = document.getElementById("time1").value;
    const gols1 = parseInt(document.getElementById("gols1").value);
    const time2 = document.getElementById("time2").value;
    const gols2 = parseInt(document.getElementById("gols2").value);
  
    let resultado;
  
    if (gols1 === gols2) {
      resultado = `Empate!`;
    } else if (gols1 > gols2) {
      resultado = `Vitória do ${time1}!`;
    } else {
      resultado = `Vitória do ${time2}!`;
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }