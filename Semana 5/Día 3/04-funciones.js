function sumar(num1, num2){
    let resultado=num1+num2;
     console.log(resultado)

}

sumar(100,50)

console.log(sumar(20,40));

// invocando llamada a la funcion
function calcularIGV(monto){
let precioFinal=monto*1.18;
return precioFinal;

}
sumar(100,50);


let totalSinIGV=sumar(100,60);
let totalConIGV=calcularIGV(totalSinIGV);
console.log(totalConIGV);