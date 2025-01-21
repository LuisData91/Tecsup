let productos=[
    {
        nombre:"café",
        precio:10
    },
    {
        nombre:"Té",
        precio:7
    },
    {
        nombre:"Milo",
        precio:12
    }
]
console.log(productos[0].nombre);



let sumaProductos=0;
for(let i=0;i<productos.length;i++){
// console.log(productos[i].precio);
sumaProductos=sumaProductos+productos[i].precio;

}
console.log(`La sumatoria de todos los productos es:${sumaProductos}`);
