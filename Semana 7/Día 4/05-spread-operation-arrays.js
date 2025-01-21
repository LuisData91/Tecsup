let animales=["Gato","Perro","Paloma"];
let animales2=animales;
animales2.push("Raton");

console.log("animales",animales);
console.log("animales2",animales2);

let animales3=[...animales,"Pavo","Cerdo"];
console.log("animales 3",animales3);



const  plantas=["Arbusto", "Pino","Musgo","Cactus"];
const floraYFauna=[...plantas,...animales];
console.log("Mezclando arreglos",floraYFauna);