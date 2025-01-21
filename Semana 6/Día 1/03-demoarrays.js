let platillos=[
    "Lomo Saltado",
    "Ceviche",   
];

function listarPlatillos(){
    console.log("LISTAR");
    for (let i=0;i<platillos.length;i++){
        console.log(`${i}-${platillos[i]}`);
    }
}

function eliminarPlatillo(){
console.log("ELIMINANDO FINAL");
platillos.pop();
listarPlatillos();

}
function agregarPlatilloFinal(nuevoPlatillo){
console.log("Agregando nuevo platillo");
platillos.push(nuevoPlatillo);
listarPlatillos();
}


// ejecucionn 
// listarPlatillos();

let opcion=prompt(`ELIJA UNA OPCIÓN
                 1. Listar Platillos
                 2. Eliminar Platillo final
                 3. Agregar Platillo Final
                 4. Salir`)

if(opcion==="1"){
    listarPlatillos();
}else if(opcion=="2"){
    eliminarPlatillo();
}else if(opcion==="3"){
    // preguntando que plato se va agregar
    let platilloAgregar=prompt("Indique nuevo");
    // lista el platillo final
    agregarPlatilloFinal(platilloAgregar)
}               

