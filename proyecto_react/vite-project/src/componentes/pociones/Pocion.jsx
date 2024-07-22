
const Pocion = ({ pocion }) => {
  const { id, nombre } = pocion;


  return (
  <div className="pocion">
    <span> {nombre} </span>

  </div>
);

};
export default Pocion;