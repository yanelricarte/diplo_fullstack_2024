/** Clase 13: Intro JS */

//Hola mundo desde un archivo externo
console.log("Hola Mundo");


//Variables
/*
var nombre = "Harry";
console.log(nombre)


let nombreLet = "Hermione"; //string
console.log(nombreLet);


let edad; //numérica

const PI = 3.14;
let tenerMascotas = true; //boleana

console.log(edad, PI, tenerMascotas)

edad = 20;
console.log(edad, PI, tenerMascotas)


//Operaciones básicas 
let numeroA = 2;
let numeroB = 5;

let resultadoSuma = numeroA + numeroB;

console.log(numeroA + numeroB);
console.log(resultadoSuma);


let nombre = "Cosme";
let apellido = "Fulanito";
const ESPACIO = " ";

let nombreCompleto = nombre + ESPACIO + apellido;

console.log(nombreCompleto);
 */

//Prompt 

/*
let entrada = prompt("Ingrese su nombre");
let salida = "Hola " + entrada;
alert(salida);


let numero = parseInt(prompt("Ingrese su número"));
const NUMEROB = 30;

let salidaNumero = numero + NUMEROB;
alert(salidaNumero);


//Arrays
//Unidimensional
let numeros = [1, 2, 3, 5, 8];
let colores = ["rojo", "verde", "azul"];

console.log(numeros[1]);
console.log(colores[0]);

//multidimencionales
let colorMascotas = [
  ['perro', 'marron', 'gris', 'rojo'],
  ['gato', 'blanco', 'negro'],
  ['pez', 'amarillo'],
  ['Jirafa', 'naranja'],
];
console.log(colorMascotas[1][2]);
console.log(colorMascotas[1][1].length);
 */


//Objeto utilizado como array asociativo 
let persona = {
  nombre: "Juan",
  edad: 32,
  profesion: "Desarrollador"
};

console.log(persona["nombre"]);
console.log(persona.edad);

let empleados = [
{ nombre: "Juan", edad: 32, profesion: "Desarrollador" },
{ nombre: "Cosme", edad: 22, profesion: "Tester" },
{ nombre: "Pepito", edad: 42, profesion: "Frontend" }
];

console.log(empleados[1].nombre);