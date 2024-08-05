//Define el estado inicial y las acciones para el estado de los usuarios.

import { createSlice } from '@reduxjs/toolkit';

// Generador de ID único
let nextId = 1;
const generarId = () => nextId++;

const reductorUsuario = createSlice({
  name: 'usuarios',
  initialState: [],
  reducers: {
    agregarUsuario: (state, action) => {
      const nuevoUsuario = { ...action.payload, id: generarId() }; // Genera un ID único
      state.push(nuevoUsuario); // Agrega el usuario al estado
    },
    eliminarUsuario: (state, action) => {
      return state.filter(usuario => usuario.id !== action.payload); // Filtra el usuario a eliminar
    },
  },
});

export const { agregarUsuario, eliminarUsuario } = reductorUsuario.actions;
export default reductorUsuario.reducer;
/*createSlice: Crea un slice del estado, junto con los reductores y acciones correspondientes.
generarId: Genera IDs únicos para cada usuario.
agregarUsuario: Acción que agrega un usuario con un ID único al estado.
eliminarUsuario: Acción que elimina un usuario filtrando por su ID.
 */