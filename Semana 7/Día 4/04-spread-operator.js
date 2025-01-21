let pokemon1 ={
    nombre: "Charmander",
    ataque: 100,
    defensa: 40,
    tipo: "Fuego",
    vida: 100

}

let pokemon2=pokemon1;
console.log("despues de hacer la copia", pokemon2);

pokemon2.vida=40;
pokemon2.ataque=65;
console.log("Despues de la pelea pok2",pokemon2);
console.log("Despues de la pelea pok1",pokemon1);


//spread operator, operador para dispersar
//hacer una copía de propiedades y valores de un objeto
//no solamente puedo hacer una copia
// const pokemon3 = { ...pokemon1 }; //copia
//podemos agregar propiedades
// const pokemon3 = { ...pokemon1, shiny: true }; //agregado
//modificar propiedades
const pokemon3 = { ...pokemon1, defensa:60, shiny: true }; //modificando propiedades
//lo llevaron al hospital lo curaron y ya esta mejor
pokemon3.vida = 120;
pokemon3.ataque = 105;
console.log("con spread operator pok3",pokemon3);
console.log("después del spread operator pok 1",pokemon1);