/*

let limite=10;
let inicio=1;
// una expresion que tiene que ser verdadera para que se cumpla
while(inicio<=limite){
    // mientras la expresion de arriba el bloque de codigo se va ejecutar
    console.log(`mostrando${inicio}`);
    inicio++;
}
// despues del bucle termine, recien se ejecutara el codigo en parte inferior.
console.log("Yo estoy despues del while")*/


//  solicitamos un numero y la entrada la transformamos a number
let mes=+prompt("Ingrese el numero del mes");

// damos las condiciones pero negamos para que pregunte en caso no cumpla que sea 
//entre 1 y12
while(!(mes>=1 && mes<=12)){
    mes=+prompt("Numero invalido, debe ingresar de nuevo")
}
console.log(`mes ${mes} valido!`);