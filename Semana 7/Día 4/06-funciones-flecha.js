// ---------OPCION 1-----------------------
// function saludar(nombre){
//     return `Hola ${nombre}`;
// }

// ---------OPCION 2-----------------------
// const saludar=function(nombre){
//     return `Hola ${nombre}`;
// }
// funciones flecha, siguen siendo funciones pero con mas posibilidades.
// ---------OPCION 3-----------------------
// const saludar = (nombre)=>{
// return `hola ${nombre}`;

// }

//  si la funcion flecha tiene un solo parametro le podemos indicar sin los parantesis.

const saludar=(nombre)=>`hola ${nombre}`;
console.log(saludar("Elvis"));


const suma=(a,b)=> a+b;
console.log(suma(10,20))