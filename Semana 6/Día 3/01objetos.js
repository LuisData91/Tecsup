let artista={
    nombre:"Los prisioneros",
    origen:"Chile",
    genero:["Rock","Pop","Punk"],
    anioInicio:1983,
    anioFinal:2006,
    // Los Albums son varios, pero necesitamos presentarlos
    albums:[{
        nombreAlbum:"La voz de los 80's",
        lanzamiento:"13 Noviembre",
        Formato:["casete","LP","CD"]
    },
    {
    nombreAlbum:"Pateando Piedras",
    lanzamiento:"15  setiembre 1986"    ,
    Formato:["casete","LP","CD"]
    }

]
}
console.log(artista)

// Acceder al valor de una propiedad con dot notation
console.log("Nombre: ",artista.nombre);
// acceder al valor usando bracket notation
// nombreObjeto ["nombrePropiedad"]
console.log("Origen: ", artista["origen"]);

// desestructuracion, conocer las propiedades de un objeto
// y en vez de referenciar al objeto indicamos que propiedades tiene:
// comunmente artista.anio
let {anioInicio,anioFinal}=artista;
console.log("Año Inicio:", anioInicio);

// deseamos solo acceder a pop
console.log("Brack notation",artista.genero[1]);

console.log("Bracket notation",artista["genero"][1]);

// accedemos a los artistas --almbuns
console.log(artista.albums[1].nombreAlbum);

console.log(artista["albums"][0]["lanzamiento"]);

let propiedad="formato";
console.log(artista["albums"][0][propiedad]);


function mostrarInfoAlmbun(nombrePropiedad){
    let resultado=artista.albums[0][nombrePropiedad];
    console.log(resultado);
}

let opcion=+prompt(`Ingrese la información de lo que desea mostrar
    1. Nombre Album
    2. Lanzamiento
    3. Formato`)

if(opcion===1){
    mostrarInfoAlmbun("nombreAlbum")
}else if(opcion===2){
    mostrarInfoAlmbun("lanzamiento")
}else if(opcion===3){
    mostrarInfoAlmbun("Formato")
}

console.log(typeof artista.albums[0].lanzamiento);
console.log(artista.albums[0].formato[1]);
