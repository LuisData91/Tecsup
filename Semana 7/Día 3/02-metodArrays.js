let frutas=["kiwi","Naranjas","Fresas"];

frutas.forEach(function(fru,indice,arreglo){
console.log("Item",fru);
console.log("Index",indice);
console.log("arreglo original",arreglo);
return fru.toUpperCase();

});

// console.log({forEachFrutas});
console.log("-------------------------MAP------------------------------------")
let frutaEnMayus=frutas.map(function(fru,indice,arreglo){
return  `${indice}-${fru.toUpperCase()}`;
});

console.log({frutaEnMayus});

console.log("-------------------------FILTER------------------------------------")
let numeros=[10,87,92,60,95];

// filtrara y generara un nuevo arreglo con los items que cumplan la condicion

let mayorQue80=numeros.filter(function(Item,indice,arreglo){
return Item>90;

})
console.log({mayorQue80});

console.log("-------------------------FINDINDEX------------------------------------")
let dondeEsta=frutas.findIndex(function(fru){
    return fru==="Fresas";

});
console.log({dondeEsta});
console.log("-------------------------INCLUDES------------------------------------")

let frutaExiste=frutas.includes("kiwi");
console.log({frutaExiste})

console.log("-------------------------REDUCE------------------------------------")
let sumatoria=numeros.reduce(function(acumulador,Item){
return acumulador+Item;

});
console.log({sumatoria});
console.log("-------------------------REDUCE CON OBJETOS------------------------------------")

let productos=[{
    nombre:"Pastillas",
    precio:3.50
},
{
    nombre:"Agua",
    precio:1.20
}
]

let total=productos.reduce(function(acumulador,item){
console.log("acumulador:", acumulador);
return acumulador+item.precio;

},0)
console.log(total);

console.log("-------------------------SORT TOSORTED------------------------------------")
let nums=[4,1,3,2,5];
// nums.sort();
// utilizar metodos modernos para hacer operaciones
let ordenado=nums.toSorted();

console.log({ordenado});
console.log({nums});    