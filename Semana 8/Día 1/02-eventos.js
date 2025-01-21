// con el ID ya se indica que no es necesario el #
// const btnSimple=document.getElementById("botonSimple");
const btnSimple=document.querySelector("#botonSimple");
// element.addEventListener("nombreEvento")
btnSimple.addEventListener("click",function(){
alert("Hola hiciste clic en el botón");

})

const link=document.getElementById("linkGoogle");

link.addEventListener("click",(evento)=>{
    console.log(evento);
    // va prevenir el comportamiento por defecto.
    evento.preventDefault();
alert("Diste clic a un hipervinculo");

})


// intenta detener enviar los datos por su cuenta
const formContacto=document.querySelector("#contacto");
formContacto.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    console.log("evento submit detenido");
})

const arrRegalos=[
    "Audifonos",
    "Peluche",
    "Rompecabezas",
    "Libro",
    "Parlante"
]

let htmlRegalos="";

arrRegalos.forEach((item)=>{
    htmlRegalos=htmlRegalos + `
    <li>${item}</li>
    `
})
// console.log(htmlRegalos);
const listaRegalos=document.querySelector(".listaRegalos");

listaRegalos.innerHTML=htmlRegalos;
// ---------------EVENTO CHANGE------------------------------

const inputBusqueda=document.querySelector("#inputBusqueda");

inputBusqueda.addEventListener("change",(ev)=>{
    // target --objetivo
    // de donded esta saliendo el evento
console.log("evento change",ev.target);
// value, me va a dar el valor 
console.log("value",ev.target.value);

const textoABuscar=ev.target.value;
const regalosFiltrados=arrRegalos.filter((item)=>{
return item.includes(textoABuscar)

})

console.log("regalos filtrados",regalosFiltrados)
// limpiar listaRegalos
listaRegalos.innerHTML="";
// despues de limpiar listaregalos

regalosFiltrados.forEach((item)=>{
// item es cada regalo filtrado
// creamos un li
    const nuevoLi=document.createElement("li");
    // cada li le llebamos con un textto del arreglo filtrado
    nuevoLi.innerText=item;
    // y ese li lo añadimos al lu de listaRegalos
    listaRegalos.appendChild(nuevoLi);

})


})





