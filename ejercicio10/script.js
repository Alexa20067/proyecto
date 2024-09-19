// script.js
function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const tiempoFormateado = `${horas}:${minutos}:${segundos}`;
    reloj.textContent = tiempoFormateado;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Inicializar el reloj al cargar la página
actualizarReloj();