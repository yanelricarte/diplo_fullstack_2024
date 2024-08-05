/* Este componente maneja la interfaz de usuario para agregar y eliminar usuarios.

 */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarUsuario, eliminarUsuario } from '../redux/reducers/reductorUsuario';

const GestionUsuarios = () => {
  const [nombre, setNombre] = useState('');
  const dispatch = useDispatch(); // Hook para despachar acciones
  const usuarios = useSelector(state => state.usuarios); // Hook para seleccionar el estado de usuarios

  const manejarAgregarUsuario = () => {
    if (nombre) {
      dispatch(agregarUsuario({ nombre })); // Despacha la acción para agregar un usuario
      setNombre('');
    }
  };

  const manejarEliminarUsuario = (id) => {
    dispatch(eliminarUsuario(id)); // Despacha la acción para eliminar un usuario
  };

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} // Actualiza el nombre del usuario
        placeholder="Nombre del usuario"
      />
      <button onClick={manejarAgregarUsuario}>Agregar Usuario</button>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            {usuario.nombre} <button onClick={() => manejarEliminarUsuario(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionUsuarios;
/* useDispatch: Hook para despachar acciones al store.
useSelector: Hook para seleccionar datos del estado del store.
manejarAgregarUsuario: Función que despacha la acción para agregar un nuevo usuario.
manejarEliminarUsuario: Función que despacha la acción para eliminar un usuario por su ID. */