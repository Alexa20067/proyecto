function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 1; i <= n; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }
  
  const numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
  
  if (isNaN(numero)) {
    document.write("ingrese un numero valido");
  } else {
    const resultado = factorial(numero);
    document.write(`El factorial de ${numero} es: ${resultado}`);
  }