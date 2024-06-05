/** Clase 14: Condiocionales en JS */

//If else if else
/*
let numero = 3;

if (numero > 3){
  console.log("El número es mayor 3");
} else if(numero === 3){
  console.log("El número es igual a 3");
} 
else {
  console.log("El número es menor a 3");
}

console.log ("Continua con la ejecución");


//Operador condicional ternario 
//Else resumido

let edad = 10;
 let esMayorEdad;


if (edad > 18 ){
  esMayorEdad = true;
} else{
  esMayorEdad = false;
}

console.log('¿Es mayor de edad?', esMayorEdad );


let esMayorEdad = edad > 18 ? true : false;
console.log('¿Es mayor de edad?', esMayorEdad );

//Con OT
let nombre = 'Cosme';

edad >= 18 
? console.log(nombre + " es mayor de edad")
: console.log(nombre , " no es mayor de edad");
//SWITCH

let powerRanger = "Red";
switch (powerRanger) {
  case "Red":
    color = "Red";
    console.log("Red Ranger! Jason");
    break;
  case "Blue":
    console.log("Blue Ranger! Billy");
    break;
  case "Black":
    color = ("Black Ranger! Zack");
    break;
    case "Pink":
    color = ("Pink Ranger! Kinberly");
    break;
    case "Yellow":
    color =("Yellow Ranger! Trini");
    break;
  default:
    console.log("No sos un Power Ranger");
}
console.log(color);
console.log(new Date().getDay());

*/

//
//Actividad con  new Date().getDay()


let numeroDia = new Date().getDay();

switch (numeroDia) {
    case 1:
        dia = "lunes";
        break;
    case 2:
        dia = "martes";
        break;
    case 3:
        dia = "miércoles";
        break;
    case 4:
        dia = "jueves";
        break;
    case 5:
        dia = "viernes";
        break;
    case 6:
        dia = "sábado";
        break;
    default: 
    dia = "domingo";
}
console.log("Hoy es "+dia);


let edad = prompt("Por favor, ingresá tu edad: ");

if (edad !== null) { // Verifica si el usuario no canceló el prompt
  edad = Number(edad); // Convierte el valor a un número
  if (!isNaN(edad)) {
    // Verifica si la entrada es un número válido
    if (edad >= 18) {
      document.write("Sos mayor de edad.");
    } else {
      document.write("Sos menor de edad.");
    }
  } else {
    document.write("Por favor, ingresá un número válido.");
  }
} else {
  document.write("No ingresaste ninguna edad.");
}
