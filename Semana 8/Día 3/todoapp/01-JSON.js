const productos=[
    {
        id:1,
        nombre:"pollo",
        precio:40
    },

    {
        id:2,
        nombre:"gallina",
        precio:20

    },
    {
        id:3,
        nombre:"carne",
        precio:23


    }
]

const productoJSON=JSON.stringify(productos);
console.log(productoJSON);

console.log(typeof productoJSON);

const deVuelta=JSON.parse(productoJSON)
console.log(deVuelta);

localStorage.setItem("nombre","Jorge");
localStorage.setItem("productos",productoJSON);

// getItem va obtener la informacion segun la llave
const productosOtraVez=localStorage.getItem("productos");   
console.log(productosOtraVez);

const productosJS=JSON.parse(productosOtraVez);
console.log("prodjs",productosJS);
