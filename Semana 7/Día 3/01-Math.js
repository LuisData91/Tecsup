let numeroPI=Math.PI;

console.log({numeroPI})

let numEuler=Math.E;
console.log(numEuler);

let numeroNegativo=-25.755;
let numeroPositivo=12.56;


//  el abs convierte a positivo
console.log(Math.abs(numeroNegativo));

console.log(Math.ceil(numeroPositivo));

// convierte a entero el numero
console.log(Math.floor(numeroPositivo));
// buscara redondear en base a matematicas, redondea hacia arriba
console.log(Math.round(numeroPositivo));

console.log("toFixed",numeroNegativo.toFixed(2));

const entre1y5 =Math.ceil((Math.random()/255));
console.log({entre1y5})