export const AGREGAR_USUARIO = 'AGREGAR_USUARIO';
export const ELIMINAR_USUARIO = 'ELIMINAR_USUARIO';

export const agregarUsuario = (usuario) => ({
  type: AGREGAR_USUARIO,
  payload: usuario
});

export const eliminarUsuario = (id) => ({
  type: ELIMINAR_USUARIO,
  payload: id
});
