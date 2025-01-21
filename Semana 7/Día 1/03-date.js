let ahora=new Date();
console.log(ahora);

let navidad=new Date("2024-12-25")

console.log(navidad);

// se puede aplicar dia hora, minuto,segundo
// Los meses comienzan desde cero
let anioNuevo=new Date(2024,11,31,11,59,59);

console.log(anioNuevo);
console.log("Año",anioNuevo.getFullYear());
console.log("Mes",anioNuevo.getMonth());
console.log("Día",anioNuevo.getDate());

console.log(ahora.getTime());
let diasHastaNavidad=navidad.getTime()-ahora.getDate();
console.log(diasHastaNavidad);
let segundos=diasHastaNavidad/1000;
console.log("Segundos",segundos);
let minutos=segundos/60;
console.log("minutos",minutos);
let horas=minutos/60;
console.log("horas",horas);
let dias=horas/24;
console.log("Días",dias);