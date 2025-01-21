let productos=[
    {
        nombre:"CPU",
        precio:400,
        cantidad:10
    },
    {
        nombre:"Memoria RAM",
        precio:200,
        cantidad:20

    },
    {
        nombre:"Fuente",
        precio:100,
        cantidad:0
    },
    {
        nombre:"SSD",
        precio:150,
        cantidad:20
    }

    /*Según un arreglo de productos con preciom filtrar  */
]

// function filtradoPorPrecio(arreglo){
//     let productosFiltrados=[];
//     for (let i=0; i<arreglo.length;i++){
//         // cuando se cumpla esto
//         if(arreglo[i].precio<=200){
//             // agregamos a ese producto a productos filtrados
//             productosFiltrados.push(arreglo[i])
//         }
//     }
//     return productosFiltrados;
// }
// let resultado=filtradoPorPrecio(productos);
// console.log(resultado);

/// valorTotalActivos:CANTIDAD*PRECIO

// final : CPU : 4000

function resumenActivos (inventario) {
    let sumaTotal = 0;
    
    for(let i = 0; i < inventario.length; i++){
        //i aumentará de 0 a 1, 2 etc hasta que no encuentre productos
        let totalPorProducto = inventario[i].precio * inventario[i].cantidad;
        console.log(`total por ${inventario[i].nombre} es ${totalPorProducto}`);
        //acumulamos el activo por producto en sumaTotal
        // sumaTotal = sumaTotal + totalPorProducto;
        sumaTotal += totalPorProducto;
    }
    //cuando termine esto
    return sumaTotal;
}

let resultadoActivos = resumenActivos(productos);

console.log(`La suma total de los activos es ${resultadoActivos}`);