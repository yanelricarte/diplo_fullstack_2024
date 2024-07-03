//** Clase 20 */

let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Buenos Aires",
  habilidades: ["JavaScript", "Node.js", "PHP"]
};

// Mostrar por consola 
console.log(persona);

// Mostrar los datos usando el DOM
let container = document.getElementById('datosPersonas');
let html =  ` 
<h2> Datos Personales </h2>
<p> Nombre: ${persona.nombre}</p>
<p> Edad: ${persona.edad}</p>
<p> Ciudad: ${persona.ciudad}</p>
<p> Habilidades: ${persona.habilidades.join(", ")}</p>
`;
container.innerHTML = html;

// Actualizar una propiedad
persona.profesion = "Desarrollador";
html +=  ` <p> Profesión: ${persona.profesion} </p>`;
container.innerHTML = html;
console.log(persona); //por consola con propiedad actualizada


//Propiedad existente
persona.edad = 42;
console.log(persona); //por consola con propiedad modificada



// Función para actualizar y mostrar en el DOM (evitar problemas de renderización con replace)
function mostrarPersona() {
  // Actualizar el HTML con los datos actuales de persona
  html = ` 
  <h2>Datos Personales</h2>
  <p>Nombre: ${persona.nombre}</p>
  <p>Edad: ${persona.edad}</p>
  ${persona.ciudad ? `<p>Ciudad: ${persona.ciudad}</p>` : ''}
  <p>Habilidades: ${persona.habilidades.join(", ")}</p>
  `;

  container.innerHTML = html;
}

// Propiedad existente (edad)
persona.edad = 42;
mostrarPersona();

// Mostrar el objeto JSON actualizado en la consola
console.log(persona);

// Eliminar propiedad (ciudad)
delete persona.ciudad;
mostrarPersona();

// Acceder a los datos 
console.log(persona.nombre);
persona.habilidades.forEach(habilidad => {
  console.log(habilidad);
});
