import { useEffect, useState } from "react";
import ListaDePociones from "./ListaDePociones";
import FormularioDePociones from "./FormularioDePociones";

const GestionPociones = () => {
  // Definimos el estado inicial de las pociones usando una función de inicialización para cargar desde localStorage
  const [pociones, setPociones] = useState(() => {
    // Carga inicial de las pociones desde localStorage
    const pocionesGuardadas = JSON.parse(localStorage.getItem("pociones"));
    // Si hay pociones guardadas, las retorna; de lo contrario, retorna un array vacío

    return pocionesGuardadas || [];
  });

  // useEffect para guardar las pociones en localStorage cada vez que cambia el estado de pociones
  useEffect(() => {
    localStorage.setItem("pociones", JSON.stringify(pociones));
  }, [pociones]);

  // Función para agregar una nueva poción
  const agregarPocion = (nombre) => {
    const nuevaPocion = {
      id: Date.now(), // genera un id único basado en el tiempo actual
      nombre,
    };

    // Actualiza el estado de pociones agregando una nueva poción
    setPociones((prevPociones) => [...prevPociones, nuevaPocion]);
  };

  //Función para marcar una poción como completada o no completada
  const completarPocion = (id) => {
    // Crea un nuevo array de pociones donde la poción con el id proporcionado tiene su propiedad 'completada' invertida
    const nuevasPociones = pociones.map((pocion) =>
      pocion.id === id ? { ...pocion, completada: !pocion.completada } : pocion
    );
    //Actualiza el estado de pociones con el nuevo array
    setPociones(nuevasPociones);
  };

  // Función para eliminar una poción del estado
  //La función filter itera sobre cada elemento 'poción' del array 'pociones'
  const eliminarPocion = (id) => {
    //Crea un nuevo array de pociones excluyendo la poción con el id propoporcionado
    const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
    //Actualiza el estado de pociones con el nuevo array
    setPociones(nuevasPociones);
  };

  return (
    <div className="contenedor-pociones">
      <h1 className="titulo">Gestión de Pociones en Hogwarts</h1>
      <ListaDePociones
        pociones={pociones}
        completarPocion={completarPocion}
        eliminarPocion={eliminarPocion}
      />

      <FormularioDePociones agregarPocion={agregarPocion} />
    </div>
  );
};

export default GestionPociones;
