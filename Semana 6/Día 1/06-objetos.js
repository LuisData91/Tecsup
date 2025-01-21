let gato={
    nombre:"Ron-Ron",
    color:"Negro",
    edad:2,
    fechavacunacion:"02/12/2024",
    anioNacimiento:2024

}
console.log(gato);

console.log(gato.nombre);
console.log(gato.color);
console.log(gato.edad);
console.log(gato.fechavacunacion);
console.log(gato.anioNacimiento);

let {edad,nombre}=gato;
console.log("desestructuracion:",edad);
console.log("desestructuracion:",nombre);
