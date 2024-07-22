import './Seccion.css';
import { useState } from "react";
import hogwarts from '../../assets/img/hogwarts.jpg';
import Boton from '../boton/Boton';
import CardB from '../card/Card';

function Seccion() {
  const [nombre, setNombre] = useState('Hermione');
  const [mostrarInformacion, setMostrarInformacion] = useState(false);

  
  const handleClicEnBoton = () =>{
    alert ('Hiciste click en el botón');
  }
  const handleClicEnBotonInformacion = () =>{
    setMostrarInformacion(!mostrarInformacion);
  }




  return(
  <section className="seccion"> 
  <h2> Información sobre Hogwarts</h2>
  <p>{nombre} </p>
  <p> La escuela de magia y hechiceria de Hogwarts es un lugar mágico donde los jóvenes magos y brujas aprenden a dominar sus poderes.</p>
  <img src={hogwarts} alt="Hogwarts" />
  
  <CardB />
  <Boton color="pink" texto = "Leer más" onClick={handleClicEnBoton} />
  <Boton className="boton" texto = "Comprar"  />

  <button onClick={handleClicEnBotonInformacion}>
    {mostrarInformacion ? 'Ocultar información' : 'Mostrar información'}
  </button>
  {mostrarInformacion && (
    <div className='informacion-personaje'> 
    <p> Nombre: Hermione </p>
    <p> Casa: Gryffindor </p>
    <p> Rol: Estudiante </p>
    <p> mail: hermione@hogwarts.edu </p>


    </div>
  )}
  </section>
  )
}

export default Seccion;