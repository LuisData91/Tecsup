// INICIALIZACION EXPRESION Y ACTUALIZACION
// CODIGO A EJECUTAR REPETITIVAMENTE HASTA QUE SEA FALSA

// for(let i=0;i<10;i++){
// console.log(`mostrando el # ${i}`);

// }


// let numero=+prompt("Ingrese un número para generar Tabla");

// for(let i=0;i<=12;i++){
//     let resultado=numero*i;
//     console.log(`${numero} X${i}=${resultado}`);
// }
// console.log("-------------------------")

let  cantCompras=+prompt("Cuantas compras hiciste");
let costoTotal=0;
for(let i=1;i<=cantCompras;i++){
    let costoCompraActual=+prompt("Cuanto costo esta compra");
    console.log(`La compra costo ${costoCompraActual}`);
    costoTotal=costoTotal+costoCompraActual;
}
console.log(`Gastaste un total es ${costoTotal}`);  