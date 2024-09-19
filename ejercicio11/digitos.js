let numero = prompt("Ingrese un número: ");

let numeroCadena = numero.toString();

let sumaDigitos = 0;

for (let i = 0; i < numeroCadena.length; i++) {
    sumaDigitos += parseInt(numeroCadena[i]);
}

document.write("La suma de los dígitos de " + numero , " es: " + sumaDigitos);
