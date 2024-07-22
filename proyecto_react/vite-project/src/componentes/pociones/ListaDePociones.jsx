import Pocion from "./Pocion";


const ListaDePociones = ({ pociones }) =>{
  return (
    <div>
      <h2> Inventario de Pociones </h2>
      {pociones.map ((pocion) => (
        <Pocion 
        key = {pocion.id}
        pocion={pocion}
        />
      ))}
    </div>
  )
}

export default ListaDePociones;