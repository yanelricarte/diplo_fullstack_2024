//** Clase 19 */
/* 
const personajes ={
  team: "Star Wars Characters",
  characters: [
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    species: [],
      "starships": [],
  }

  ]
  }
  console.log(personajes.team)
  console.log(personajes.characters[0].height);*/



/* 
  //  Llamado a la api y console log


  
fetch('https://hp-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(json => console.log(json))


fetch("https://hp-api.herokuapp.com/api/characters")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      if (json[i].house == "Gryffindor") {
        console.log(json[i].name + " es de Gryffindor!");
      }
    }
  });



//Opción con documet.write
fetch('https://hp-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(json => {
    json.map(function(personaje){
      document.write(htmlPersonajes(personaje.name, personaje.image, personaje.house));
    });
  });
*/


//Creando el elemento
  const main = document.querySelector('main');

  fetch('https://hp-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(
    personajes => {
      personajes.forEach(personaje => {
        let infoPersonaje = document.createElement('article');
        infoPersonaje.innerHTML = htmlPersonajes(personaje.name, personaje.image, personaje.house);
        main.appendChild(infoPersonaje);
        
      });
    }

  );
    
  function htmlPersonajes(personaje, foto, casa){
    let html = `<h2 class="nombre"> ${personaje}</h2>
    <h3> ${casa} </h3>
    <div class= "imagen">
    <img src="${foto}" alt="foto ${personaje}"> </div>`;
    
    return html;
  } 


  // Consulta por id
  const characterId = 'ca3827f0-375a-4891-aaa5-f5e8a5bad225';

  fetch(`https://hp-api.herokuapp.com/api/character/${characterId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('La respuesta no fue exitosa');
      }
      return response.json();
    })
    .then(character => {
      console.log('Personaje encontrado:', character);
      console.log('Nombre:', character[0].name);
      console.log('Casa:', character[0].house);
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud:', error.message);
    });
  
    /*
// fetch() .then() .catch()

fetch(url)  // realiza la solicutud HTTP
  .then(response => { // Manejar la respuesta de la solicitud
  })
  .catch(error => { // Manejar errores
  });
  
  */