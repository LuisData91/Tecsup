let frutas=["kiwi","Naranja","Piña","Coco"];
console.log(frutas);


console.log(frutas[2]);

// longitud
console.log("Longitud frutas",frutas.length);

// el tipo de length es un arreglo, es numerico, esto es importante porque me permite hacer comparaciones
// operaciones con este valor
console.log("tipo de length",typeof frutas.length);


for(let i=0; i<frutas.length;i++){
    // va ir cambiando incrementando 1 en 1 
    console.log(frutas[i]);
}