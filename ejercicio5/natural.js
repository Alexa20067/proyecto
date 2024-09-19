let n = parseInt(prompt("Ingrese un número N:"));

if (isNaN(n) || n <= 0) {
   document.write("Por favor, ingrese un número mayor que cero.");
} else {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    document.write("La suma de los primeros " , n , " números naturales es: " , suma);
}