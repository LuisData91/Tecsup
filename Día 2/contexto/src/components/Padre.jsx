
import MostrarNumeros from "./MostrarNumeros";
const Padre = (props) => {
  console.log(props)
  const{children,titulo}  =props;
  return (
    <div>
      <h1>Parent-{titulo}</h1>
      <hr />
      <MostrarNumeros/>
      <hr />
      {children}
    </div>
  )
}

export default Padre
