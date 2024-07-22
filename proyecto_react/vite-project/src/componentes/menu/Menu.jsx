import { Link } from "react-router-dom"

const Menu = () => {
  return(
    <nav className="menu">
      <ul> 
      <li> <Link to ="/" > Inicio</Link> </li>
      <li> <Link to ="/pociones" > Gestión de Pociones </Link> </li>
      <li> <Link to ="/casas" > Casas </Link> </li>
        </ul> 


    </nav>
  )
}

export default Menu; 