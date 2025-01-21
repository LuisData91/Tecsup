let fruta=["Kiwi","Naranja"];
console.log(fruta);

let texto ="Hola!";
console.log("Longitud:",texto.length);
console.log("Mayus",texto.toUpperCase());

let frase="No compitas, haz cumpitaz";
console.log(frase.toLowerCase);
console.log(frase.indexOf("haz"));
// ubica un texto o letra
// para retornar la posicion
console.log(frase.includes("compitas"));
// indica si una letra esta dentro del otro texto

console.log(frase.includes("gato"));
// sino lo encuentra lo pone en false

console.log(frase.split(" "));
// lo convierte a un array en base al caracater que se le  de como argumento
let textoMal=" palabras   ";
console.log(textoMal.trim());//borra los espacio
