// cuando lo importamoe lo podemos llamar como deseamos
// import esPar from "./07.2-modulo-sec.js";
import isEven from "./07.2-modulo-sec.js";
import { PI,frutas } from "./07.3-mas-mod.js";

// const resultado=esPar(8);
const resultado=isEven(10);

console.log(resultado);

const numeroPI=PI;
const frutas2=[...frutas];
console.log(numeroPI);
console.log(frutas2);