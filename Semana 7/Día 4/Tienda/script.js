import  productos from "./data.js";

console.log(productos);

const tienda={
productos:[...productos],
agregarProducto: function(producto){
    let nuevoProducto={
        ...producto,
        id:this.productos.length+1

    }
    this.productos.push(nuevoProducto);
}

};
let producto={
    nombre:"Kit de Limpieza",
    descripcionCorta:"lorem",
    precio:10,
}
tienda.agregarProducto(producto);
console.log(producto);
console.table(tienda);