function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const numero = parseInt(prompt("Ingrese un número para verificar si es primo:"));
  
  if (isNaN(numero)) {
    document.write("No ha ingresado un número válido.");
  } else {
    if (esPrimo(numero)) {
        document.write(`${numero} es un número primo.`);
    } else {
        document.write(`${numero} no es un número primo.`);
    }
  }