const frutas=["Kiwi","Naranja","Fresa"];
const naranjaExiste=frutas.includes("Mandarina");
console.log(naranjaExiste);

function busqueda(){

// if (naranjaExiste===true){
//    return("si existe");
// }else{
//     return("No existe");
// }
return naranjaExiste ? "si existe":"no existeeee"

}
console.log(busqueda());