
function matricula({nombre,telefono,direccion}){

    console.log(`${nombre} con telefono ${telefono} y direccion ${direccion}, se matriculó` );
}


let persona={
nombre:"sabrina",
edad:30,
hobbies:["Jugar con sus gatos","cantar"],
telefono:12345678,
direccion:"Barranco 777"
};

// const nombre =persona.nombre;
// const edad=persona.edad;

const {nombre,edad,telefono,direccion}=persona;
console.log(nombre,edad)

matricula(nombre,telefono,direccion);
matricula(persona);