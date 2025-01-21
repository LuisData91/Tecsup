// fetch("https://reqres.in/api/users?page=2")
// .then((respuesta) => {

//     console.log(respuesta);
//     if(respuesta.status===200){
//         return respuesta.json();

//     }else{
//         throw new Error("la peticion no se completo");
//     }
    
// })
// .then((datos) => {
//     // gracias a json se puede leer los datos
//     console.log(datos);
// })
// .catch((error) => {
//     console.log(error);
// });

const obtenerUsuarios=async()=>{
    try{
        const respuesta=await fetch("https://67661e3d410f84999656dd1e.mockapi.io/productos");
        console.log(respuesta);
        if(respuesta.status===200){
            const datos=await respuesta.json();
            console.log(datos);
        }else{
            throw new Error("la peticion no se completo");
        }
        
    }catch(error){
        console.log(error);
    }
}

obtenerUsuarios();

//post -crear

const crearUsuario=async(nuevoProducto)=>{
    try{
        const opciones={
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(nuevoProducto)
        }
        const  resultado =await fetch("https://67661e3d410f84999656dd1e.mockapi.io/productos",opciones);
        console.log(resultado);
    }catch(error){
    }
}
const prod={
    nombre:"Chocolates",
    descripcion:"chocolates de caja",
    precio:20,
    imagen:"https://concepto.de/wp-content/uploads/2018/09/google-e1537467715310.jpg"

}
crearProducto(prod);