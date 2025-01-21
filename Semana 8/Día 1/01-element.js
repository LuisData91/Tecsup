//1  obtiene un elemento y usa selectores como CSS
//2  ya con la referencia tengo propiedades y metodos a mi alcance porque el elemento sigue siendo un obj
//3  querySelecto Obtiene 1 elemento y usa selectores como css

 const h1=document.querySelector("h1");
 console.log(h1);
// cambio de contenido HTML que tiene 1 elemento
 h1.innerHTML=`<code>Noticias Tech Navideñas</code>`;

 const codeH1 =document.querySelector("code");
 console.log(codeH1);

 const imagen=document.createElement("img");
 console.log("imagen",imagen);
 imagen.src="https://i.pinimg.com/550x/7c/18/65/7c186515514684275ffebddca96dab21.jpg";

//  element.setAtribute("nombreAtributo","valoatributo");
 imagen.setAttribute("alt","mi ipad");
//  Los valores con unidades se colocan como texto
 imagen.style.width="300px";

const regalosSection=document.querySelector("#regalos");
regalosSection.appendChild(imagen)

// creamos el objeto parrafo
const parrafoRegalos=document.createElement("p");
// innerText es el texto del elemento
parrafoRegalos.innerText="Los mejores regalos para programadores";
regalosSection.appendChild(parrafoRegalos);

// combinamos innerHTML con createElement
const cabalasSection=document.querySelector("#cabalas");
// 1 crear el elemento
// 2 despues añadir el html a ese elemento creado

const cabala3="Barrer, limpieza del hogar";
let ulCabalas=document.createElement("ul");
ulCabalas.innerHTML=`
<li id="cabala1">Comer Uvas</li>
<li id="cabala1">Lentejas en los bolsillos</li>
<li id="cabala1">${cabala3}</li>

`;
const liCabala1=ulCabalas.querySelector("#cabala1");
console.log("mi Li",liCabala1);
liCabala1.innerText="Comer 12 pasas";

cabalasSection.appendChild(ulCabalas);