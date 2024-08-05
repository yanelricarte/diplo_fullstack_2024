//Este archivo configura el store de Redux utilizando configureStore de @reduxjs/toolkit y el reductor combinado de todos los reductores.

import { configureStore } from '@reduxjs/toolkit';
import reducerGlobal from '../reducers'; // Importa el reductor combinado

const store = configureStore({
  reducer: reducerGlobal, // Configura el reductor combinado
});

export default store;

/*configureStore: Simplifica la configuración del store y permite una integración más sencilla con los middlewares y el DevTools de Redux.
reducerGlobal: Es el reductor combinado que combina todos los reductores individuales.
 */