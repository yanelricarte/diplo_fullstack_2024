/** Clase 16: Funciones js */

/* 
saludar("Cosme", "Fulanito", 5);


function saludar(nombre, apellido, edad){
  console.log ("Hola ", nombre, apellido,"tu edad es ", edad)
}

saludar("Harry", "Potter", 25);
saludar("Ron", "Weasley", 15);


//Declaración de la función, con parámetros
function sumar(num1, num2){
  return num1 + num2;
}

//LLamada de la función con los argumentos

sumar(5, 6);

let resultado = sumar(9, 12);

console.log(resultado);


//Funcion anonima y le asignamos una veriable
let suma = function( num1, num2){
  return num1 + num2;

}

let resultado = suma(12, 10);
console.log(resultado);

//Scope
 const num3 = 10;
function multiplicar(num1, num2){
 
  console.log(num3)
  return(num1 + num2)  * num3;
}

console.log(num3)

let resultado = multiplicar(10, 2)
console.log(resultado)*/
/* 
console.log(document.head);
console.log(document.body);
console.dir(document.head);
console.dir(document.body);

*/

//Selección de elementos del DOM querySelector

let titulo = document.querySelector('#titulo');
let parrafos = document.querySelectorAll('.parrafo');
let cambiarTextoBtn = document.querySelector('#cambiarTexto');
let cambiarColorBtn = document.querySelector('#cambiarColor');
let cambiarClaseBtn = document.querySelector('#cambiarClase');


console.log(titulo);
console.log(parrafos);
console.log(cambiarTextoBtn);


// Función para cambiar texto del título 
function cambiarTexto(){
  titulo.textContent = 'Texto nuevo';
}

//Función para cambiar el color de todos los parrafos seleccionados 

function cambiarColor() {
  parrafos.forEach(parrafo => {
      parrafo.classList.toggle('cambiarColor');
  });
}

function cambiarClase() {
  parrafos.forEach(parrafo => {
    parrafo.classList.toggle('nuevaClase');
});
}



//Asignar Evento CLICK a los botones
cambiarTextoBtn.addEventListener('click', cambiarTexto);
cambiarColorBtn.addEventListener('click', cambiarColor);
cambiarClaseBtn.addEventListener('click', cambiarClase);