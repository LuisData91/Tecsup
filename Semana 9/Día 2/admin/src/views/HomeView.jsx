import { useState,useEffect } from "react";
import { requestProducts ,deleteProduct} from "../services/productService";
import TableData from "../components/TableData";
import Swal from "sweetalert2";


const HomeView = () => {
const [products,setProducts]=useState([]);

const cabeceras=["nombre","descripcion","precio"]

const  manejarEliminar=async(id)=>{
  const {isConfirmed,isDenied}=await Swal.fire({
    tittle:"Estas seguro de eliminar el producto",
    text:"Esta acción es irreversible",
    icon:"warning",
    showDenyButton:true,
    denyButtonText:"No,Denegar",
    showConfirmButton:"Si, Eliminar"
  })
  if(isConfirmed){
    await deleteProduct(id);
    await Swal.fire({
      title:"se eliminó correctamente el producto",
      icon:"success"
    })
  }
  //filtrar y actualizazr el estado
  const productsFiltered=products.filter((prod)=>prod.id!==id);
  setProducts(productsFiltered);
  ///2da opcion seria tener getproducts()afuera del useefect y volver a llamar
  

}

useEffect(()=>{
const getProducts=async()=>{
    // solicitamos los productos
    const productsObtained=await requestProducts();
    // actualizamos el estado cuando lo obtenemos
    setProducts(productsObtained);
}

// requestProducts();
getProducts();

},[])// dejamos el array de dependencias de useEffect para que se ejecute solo 1 vez

  return (

    <div  className="container my-3">
      <h1>Panel</h1>
      <TableData data={products} 
      cabeceras={cabeceras}
      accionEliminar={manejarEliminar}/>
    </div>
  )
}

export default HomeView
