import { useEffect, useState } from "react";
import ListaDePociones from "./ListaDePociones";
import FormularioDePociones from "./FormularioDePociones";

const GestionPociones = () => {
  const [pociones, setPociones] = useState(() => {
    // Carga inicial de las pociones desde localStorage
    const pocionesGuardadas = JSON.parse(localStorage.getItem('pociones'));
    return pocionesGuardadas || [];
  });

  // Guarda las pociones en localStorage cada vez que cambia el estado de pociones
  useEffect(() => {
    localStorage.setItem('pociones', JSON.stringify(pociones));
  }, [pociones]);

  // Función para agregar una nueva poción
  const agregarPocion = (nombre) => {
    const nuevaPocion = {
      id: Date.now(), // genera un id único basado en el tiempo actual
      nombre
    };

    // Actualiza el estado de pociones agregando una nueva poción
    setPociones((prevPociones) => [...prevPociones, nuevaPocion]);
  };

  return (
    <div className="contenedor-pociones">
      <h1 className="titulo">Gestión de Pociones en Hogwarts</h1>
      <ListaDePociones pociones={pociones} />
      <FormularioDePociones agregarPocion={agregarPocion} />
    </div>
  );
};

export default GestionPociones;
