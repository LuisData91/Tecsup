let restaurante={
    // propiedades que guardan datos
nombre:"Panchita",
platillos:["cau cau","Papa Rellena","Bistec a la sartén"],
listarPlatillos:function(){
    console.log("LISTANDO PLATILLOS");
    console.table(restaurante.platillos);
},

agregarPlatillo(nuevoPlatillo){
    restaurante.platillos.push(nuevoPlatillo);
    return "Se agrego un nuevo platillo exitosamente"
}
}
console.log(restaurante.platillos[0]);
// cuando utilizamos /invocamos una funcion tenemos que llamar por su nombre y poner()
restaurante.listarPlatillos();

let resultado=restaurante.agregarPlatillo("Lomo ");
console.log(resultado);

restaurante.listarPlatillos();