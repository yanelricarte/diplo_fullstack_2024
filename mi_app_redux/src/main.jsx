/* Este archivo es el punto de entrada de la aplicación React y proporciona el store de 
Redux al árbol de componentes a través del Provider.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
/*Provider: Permite a los componentes acceder al store de Redux.
 */