// let edad=+prompt("Ingrese su edad");
// let acepto=confirm("Acecptar los terminos de uso?");

// console.log(acepto);

// if (edad>=18 && acepto===true){
//     console.log("Registro completado")
// }else{

//     console.log("Algo fallo")
// }


let usuario=prompt("Introduce tu rol (admin,supervisor,usuario)");

console.log("Ud. ha indicado",usuario);
if(usuario==="admin"||usuario==="supervisor"){
    console.log("Ud. tiene acceso a reportes");
}else{
    console.log("Ud. tiene no tiene acceso ni permisos para ver los reportes");
}

