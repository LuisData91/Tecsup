/*let numero=100;

// primero va el do
do{
    // lo que deseamos que se ejecute una vez y luego repetidamente
    // while una expresion que tiene que ser valida
console.log(`Mostrando ${numero} dentro de do-while`);
// necesitamos igual que en el whiule actualizar la expresion condicional
numero++;

}while(numero<10);
*/

let opcion;

do{
    // para  generar un salto de linea 
    console.log(`
                Menu de opciones \n
                1. Mostrar lista de comando \n
                2. Reporte de sistema \n
                3. Informacion de la PC \n
                4. Salir del programa
                `);
opcion=+prompt("Ingrese 1,2 ó 3, para escoger una opción");                
switch(opcion){
    case 1:
        console.log("Mostrando lista.......");
        break;
    case 2:
        console.log("Mostrando reporte bip bip");
        break;
    case 3:
        console.log("CPU INTEL, RAM......");          
        break;
    case 4:
        console.log("...SALIENDO DEL PROGRAMA");    
}
}
while(opcion!==4);
console.log("Estoy al final de mostrar el menú");
