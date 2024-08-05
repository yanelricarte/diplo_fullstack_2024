//Combina todos los reductores individuales en un único reductor global.

import { combineReducers } from '@reduxjs/toolkit';
import reductorUsuario from './reductorUsuario'; // Importa el reductor de usuarios

const reducerGlobal = combineReducers({
  usuarios: reductorUsuario, // Asocia el reductor de usuarios al estado 'usuarios'
});

export default reducerGlobal;
/*combineReducers: Combina múltiples reductores en uno solo, lo que permite gestionar el
 estado de manera modular. */