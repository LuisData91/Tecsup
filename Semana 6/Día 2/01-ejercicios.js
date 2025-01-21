// let contador=0;
// let indice=1;
// while (contador<10){
// let multiplicacion =indice*7;
// // verificando si es par mediante el residuo
// if(multiplicacion%2===0){
//     // si es par
//     console.log(multiplicacion);
//     // contador=contador+1;
//     contador++;
// }
// indice++;//1*7 2*7 3*7
// }
// EJERCICIO 2--------------------------
// let numeroIngresado =+prompt("Ingrese un número");
// // Inicializar una variable suma en 0.
// let suma=0;
// for(let i=1;i<numeroIngresado;i++){
//     // sumar el numero actual a la variable suma
//     // i cambiara de 1 a 2 a 3..hatsa el numero ingresado
//     // suma=suma+i
//     suma+=i;
// }
// // cuando termine el for
// //  imprimir el valor de suma
// console.log(`la suma de los valores previosa  ${numeroIngresado}  es ${suma}`);


// // con formula
// let resultadoConFormula=numeroIngresado*((numeroIngresado-1)/2);
// console.log(`el resultado con formula es: ${resultadoConFormula}`);

// -------EJERCICIO 3---------------------------------------

// // funcion que reciva un array
// function contarPares(arreglo){
//     console.log(arreglo.length);
// // iniciar con cero
// let contador=0;
// // para cada numero en el array:
// // for inicializador,limite,actualizador
// for(let i=0;i<arreglo.length;i++){
// // si el numero es par 
// if(arreglo[i]%2===0){
//     // incrementar el contador.
//     // contador  
//     contador++;
// }

// }
// return  contador;

// }

// let resultado=contarPares([10,15,23,46,100,200,5]);
// console.log(`la cantidad de pares es ${resultado}`)

//----------------------- EJERCICIO 4-------------------------------------------------------


// function encontrarMax(arreglo){
// console.log(arreglo);
// // inicializar una variable max con el primer numero del arreglo
// let mayor=arreglo[0];
// // para cada numero en el array
// // como ya tenemos el 1er item en la variable mayor comencemos desde el 1
// for(let i=1;i<arreglo.length;i++){
//     // si el umero que tenemos con el for en ese recorrido es mayor que max
//     console.log("1. ",arreglo[i]);
//     console.log("2. ",arreglo[i]>mayor);
//     if(arreglo[i]>mayor){
//         // actualizamos mayor con el numero
//         mayor=array[i];

//     }
        
// }
// // retornar el valor mayor
// return mayor;
// }
// let res=encontrarMax([4,20,76,50,4,37]);
// console.log(`el numero mas grande es ${res}`);

// --------------EJERCICIO 5------------------------------------
// function sumaImpares(arreglo){
// let suma=0;

// for(let i=0;i<arreglo.length;i++){
//     if(arreglo[i]%2!==0){
//         suma+=arreglo[i];
//     }

// }
// return suma;
// }
// let resultado=sumaImpares([1,2,3,4,5,6,7]);
// console.log(`la cantidad de impares es ${resultado}`);


// ----------------EJERCICIO 9-------------

function reorganizarArray(arreglo){
let primer= arreglo.shift();
let ultimo=arreglo.pop();
arreglo.push(primer);
arreglo.unshift(ultimo);

return arreglo;
}

let resultado=reorganizarArray([1,2,3]);
console.log(`la Reorganización es:${resultado}`);