function classificarTriangulo(event) {
    event.preventDefault();
  
    const ladoA = Number(document.getElementById('ladoA').value);
    const ladoB= Number(document.getElementById('ladoB').value);
    const ladoC= Number(document.getElementById('ladoC').value);
  
    const resultado = document.getElementById('resultado');
  
    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
      resultado.textContent = "Erro: os lados do triângulo devem ser maiores que zero.";
      return;
    }
  
    if (ladoA + ladoB <= ladoC || ladoA + ladoB <= ladoB || ladoB + ladoC <= ladoA) {
      resultado.textContent = "Erro: os valores informados não formam um triângulo.";
      return;
    }
  
    if (ladoA === ladoB && ladoB === ladoC) {
      resultado.textContent = "Triângulo Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      resultado.textContent = "Triângulo Isósceles";
    } else {
      resultado.textContent = "Triângulo Escaleno";
    }
  }