console.log("Hola");

// ambito global
let precioConIGV=1.18;
let moneda="soles";

function CalcularPrecio(precio){
    let resultado=precio*precioConIGV;
    // console.log(resultado);
    let moneda="dolares";
    console.log("Viendo moneda",moneda);
    return resultado;
}
let precioFinal=CalcularPrecio(20)
CalcularPrecio(20);
// de afuera hacia un bloque, no es accesible
console.log(precioFinal)

for (let i=0;i<5;i++){
    console.log(i);

}
console.log("afuera del for ",i);