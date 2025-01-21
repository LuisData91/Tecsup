// EJERCICIO 1
let nota=+prompt("Ingrese su nota");
if (nota>=90 && nota<=100){
console.log("Su nota es: A")
} else if(nota>=80 && nota<=89){
    console.log("Su nota es: B")
}else if(nota>=70 && nota<=79){
    console.log("Su nota es: C")
}else if(nota>=60 && nota<=69){
    console.log("Su nota es: D")
}else if(nota>=0 && nota<=59){
    console.log("Su nota es: E")
}else {
    console.log("Nota fuera del rango")
}


// EJERCICIO 2

let monto=+prompt("Ingrese su monto");
let membresia=confirm("Tiene membresía?");

let descuento;
if(monto>=100 && membresia===true){
    descuento=monto*0.80
    console.log("Tiene un descuento del 20% el cual es:",monto-descuento)

}else if(membresia===true||monto>=100){
    descuento=monto*0.90
    console.log("Tiene un descuento del 10% el cual es:",monto-descuento)
}else{
    descuento=monto
}
console.log("El monto de su compra es:",descuento);



