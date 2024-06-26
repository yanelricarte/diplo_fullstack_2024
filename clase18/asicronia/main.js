


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

function mostrarHora(){
  let reloj = document.getElementById ("reloj");
  let ahora = new Date(); //Fecha y hora
  reloj.innerHTML = ahora.toLocaleTimeString(); //Actualiza con la hora actual 
}

let cronometro = setInterval(mostrarHora, 1000) // actualiza la hora en pantalla