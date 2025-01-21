let productos=[
    "Audifonos",
    "Microfono",
    "Mouse,",
    "USB"
];

console.log("1. ",productos);
// pop remover un item al array
productos.pop();

console.log("2. ",productos);


productos.push("Teclado");

console.log("3. ",productos)

// shift, remueve el primer elemento.
productos.shift();
console.log("4. ", productos);

// Unshift, agrega elemento al  inicio
productos.unshift("WebCam");

console.log(" 5. ",productos);
// posicion/ elemento
productos.splice(3,1)
console.log("6. ",productos);