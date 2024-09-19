let numero = parseFloat(prompt("Ingrese un número:"));

if (isNaN(numero)) {
    console.log("ingrese un número valido.");
} else {
    if (numero > 0) {
        document.write("El número ingresado es positivo.");
    } else if (numero < 0) {
        document.write("El número ingresado es negativo.");
    } else {
        document.write("El número ingresado es cero.");
    }
}