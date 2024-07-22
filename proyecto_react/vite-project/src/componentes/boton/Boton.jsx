import './Boton.css';

function Boton(props) {
  const estilosBoton = {
    backgroundColor: props.color,
  }
  return(
  <div> 
  <button style={estilosBoton} onClick={props.onClick} className='boton'> {props.texto} </button>
  </div>
  )
}

export default Boton;