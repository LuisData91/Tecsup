let estadoLogueado=true;
if(!estadoLogueado){
    console.log("Por favor inicia sesión");
}else{
    console.log("Bienvenido");
}   


let correo="usuario@gmail.com"
let contrasenia="11";
let aceptoTerminos=true;

if (!correo){
    console.log("El correo es obligatorio");
    // si el valor de la contraseña es "" se considera un valor falso, al negarlo se convierte true
}else if(!contrasenia){
    console.log("La contraseña es obligatoria");
} else if(!aceptoTerminos){
    //si el usuario no aceptara los terminos que son falsos al negarlo se convertira en verdadero.
    console.log("Debes aceptar los terminos de uso");
}else{
    console.log("La información fue llenado de forma correcta");
}