//let numero = parseInt(prompt("Ingrese un número:"));

//if (isNaN(numero)) {
   /// document.write("Por favor, ingrese un número válido.");
//} else {

    //document.write("Tabla de multiplicación del " +  numero + ":");

    //for (let i = 1; i <= 10; i++) {
       // let resultado = numero * i;
        //document.write(numero + " x " + i + " = " , resultado);
   // }
//}
// Solicitar al usuario que ingrese un número
var numero = prompt("Ingresa un número para generar su tabla de multiplicación:");

// Convertir la entrada del usuario a un número entero
numero = parseInt(numero);

// Verificar si la entrada es un número válido
if (isNaN(numero)) {
    document.write("Por favor, ingresa un número válido.");
} else {
    // Generar la tabla de multiplicación
    console.log("Tabla de multiplicación de " + numero + ":");

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        document.write(numero + " x " + i + " = " + resultado);
    }
}
