let suma = 0;


for (let i = 1; i <= 100; i++) {
  
  if (i % 2 === 0) {
   
    suma += i;
  }
}


document.write("La suma de todos los números pares desde 1 hasta el 100 es:", suma);