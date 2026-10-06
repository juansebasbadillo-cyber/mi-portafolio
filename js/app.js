// =======================================================
// RETO 1: MODO OSCURO INTERACTIVO
// =======================================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// llamamos el boton que creamos en el index
const btntema = document.getElementById('btn-toggle-tema');

//seliciono todo cuerpo de la pagina
const body = document.body;

// 2. MANEJO DE EVENTOS[cite: 2]
// cuando haga clic se va a hacer la funcion que da el cambio de tema en la pagina
btntema.addEventListener('click', function() {

// cambia el color de la paginaa

body.classList.toggle('tema-oscuro');

// Cambiar el botón de texto
if (body.classList.contains('tema-oscuro')) {
btntema.textContent = "☀️ Modo Claro";
} else {
btntema.textContent = "🌙 Modo Oscuro";
}
});


// =======================================================
// RETO 2: SALUDO DINÁMICO
// =======================================================

// 1. SELECCIÓN DEL CONTENEDOR[cite: 2]
const textoSaludo = document.getElementById('saludo-tiempo-real');

// 2. LÓGICA DE TIEMPO
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
let mensaje = "";

if (horaActual >= 6 && horaActual < 12) {
mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";
} else if (horaActual >= 12 && horaActual < 18) {
mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";
} else {
mensaje = "¡Buenas noches! Descubre mi trabajo.";
}


// 3. INYECCIÓN EN EL DOM[cite: 2]
// text content lee texto plano, inner lee texto e interpreta código html. Aqui usamos text content porque lo que se quiere es llamar a una variable, no copiar texto con códigos html
textoSaludo.textContent = mensaje;
