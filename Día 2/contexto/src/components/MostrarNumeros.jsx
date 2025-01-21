import { useContext } from "react";
import { NumberContext } from "../context/NumberContext";

const MostrarNumeros = () => {

  const {contador}=useContext(NumberContext);
//   console.log(contexto);

    const manejarClick=()=>{

        setContador(contador+10);
    }
    return (
    <div>
      <h3>Mostrar numeros</h3>
      <h4>{contador}</h4>
      <button onClick={manejarClick}>Incrementar</button>
    </div>
  )
}

export default MostrarNumeros;
