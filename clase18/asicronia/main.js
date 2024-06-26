


/*let contador = 0;
let intervalID = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  
}, 3000);

setTimeout(() =>{
  console.log("Hola después de 3 segundos");

}, 3000)*/


//Ejmplo combinado
/*
let contador = 0;
let intervalID = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  
}, 1000);

setTimeout(() =>{
  clearInterval(intervalID)
  console.log("temporizador detenido después de 5 segundos");

}, 5000)*/

// Reloj
/* 
function mostrarHora(){
  let reloj = document.getElementById ("reloj");
  let ahora = new Date(); //Fecha y hora
  reloj.innerHTML = ahora.toLocaleTimeString(); //Actualiza con la hora actual 
}

let cronometro = setInterval(mostrarHora, 1000) // actualiza la hora en pantalla*/

// Ejercicio salas
// Variable global para controlar el formato de la hora
let formato24Horas = true;

// Función para mostrar la hora actual
function mostrarHora() {
  let reloj = document.getElementById("reloj");
  let ahora = new Date(); // Obtiene la fecha y hora actual
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
  let ampm = "";

  // Cambiar al formato de 12 horas si formato24Horas es false
  if (!formato24Horas) {
    ampm = horas >= 12 ? ' PM' : ' AM';  // Determinar si es AM o PM
    horas = horas % 12;                 // Convertir horas a formato de 12 horas
    horas = horas ? horas : 12;         // Corregir la medianoche (0 horas)
  }

  // Formatear la hora y asignarla al contenido del elemento reloj
  let horaFormateada = `${horas}:${strPad(minutos)}:${strPad(segundos)} ${ampm}`;
  reloj.textContent = horaFormateada;
}

// Función para alternar entre formatos de 12 y 24 horas
function alternarFormato() {
  formato24Horas = !formato24Horas; // Alternar entre formatos de 12 y 24 horas
  mostrarHora(); // Actualizar la visualización de la hora con el nuevo formato
}

// Función auxiliar para asegurar que los números tengan dos dígitos (padding con ceros)
function strPad(numero) {
  return numero < 10 ? '0' + numero : numero;
}

// Agregar un event listener al botón para alternar el formato
document.getElementById("alternarFormato").addEventListener("click", alternarFormato);

// Mostrar la hora inicialmente al cargar la página
mostrarHora();

// Actualizar la hora cada segundo
setInterval(mostrarHora, 1000);
