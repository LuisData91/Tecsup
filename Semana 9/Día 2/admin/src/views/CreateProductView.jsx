import { useState } from "react"
import {useNavigate} from "react-router-dom";
import Input from "../components/Input"
import { createProduct } from "../services/productService"
import Swal from "sweetalert2";
import uploadFile from "../services/supabaseService";

const CreateProductView = () => {
  const[producto,setProducto]=useState({
    nombre:"",
    descripcion:"",
    precio:"",
    imagen:null
  
  })

  
  const [archivo,setArchivo]=useState(null);


  const navigate = useNavigate();
  const manejarInput=(ev)=>{
    setProducto({
      ...producto,
      [ev.target.name]: ev.target.value,
  

    });


  };
const manejarInputFile=(ev)=>{
  const nuevoArchivo=ev.target.files[0];
  console.log("input file",nuevoArchivo);
  setArchivo(nuevoArchivo);
}



const manejarSubmit = async (ev) => {
  ev.preventDefault();
  let nuevoProducto;
if(!archivo){// si el archivo es null se traduciria como un true-- es falso
  nuevoProducto={...producto}
    //1. subimos la imagen y obtenemos la URL

}else{
  //Y en el else, archivo si tendria un valor significaria que si se selecciono una imagen a subir
      //1. subimos la imagen y obtenemos la URL
  const urlImagen = await uploadFile(archivo);
    //2. creamos el producto
    nuevoProducto = { ...producto, imagen: urlImagen}

}
  await createProduct(nuevoProducto);
  await Swal.fire({
    title:"Producto Creado",
    text:`${producto.nombre} se creó con éxito!`,
    icon: "success",
  })
  //esperamos a que se cierre la ventana de sweet alert
  //y navegamos a la ruta que deseemos
  navigate('/')

}


  const inputsACrear=["nombre","descripcion","precio"];
  return (
    <div className="container my-3">
      <h1>Crear Producto</h1>
      <form onSubmit={manejarSubmit}>
      {inputsACrear.map((item,i) =>(
        <Input
      key={i}
      estado={producto}
      texto={item}
      manejarValor={manejarInput}
        
        />
        ))}
        <div className="mb-3">
          <label htmlFor="imagen">Imagen</label>
          <input type="file"
          className="form-control"
          id="imagen"
          onChange={manejarInputFile}
          />

        </div>

      
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
      </form>
    </div>
  )
}

export default CreateProductView;
