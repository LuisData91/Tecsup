// Intentar pensar fuera del codigo
// Objetivo
// listar y agregar tareas- marcar una tarea como hecha
import tareas from "./tareas.js";
import { ComponenteTarea } from "./componenteTarea.js";

const inputTarea = document.getElementById("inputTarea");
const btnNuevaTarea = document.querySelector("#btnNuevaTarea");
const listaTareas = document.querySelector("#listaTareas");

btnNuevaTarea.addEventListener("click", () => {
  //el value es el texto/valor que tiene un input
  const descripcionTarea = inputTarea.value;
  // console.log(descripcionTarea)
  tareas.agregarTarea(descripcionTarea);

  dibujarTareas();
})

const dibujarTareas = () => {
  // actualiza la informacion a partir del LS
  tareas.leerLocalStorage();

  const listadoTareas = tareas.leerTareas();
  console.table(listadoTareas);

  listaTareas.innerHTML = "";

  listadoTareas.forEach((tarea) => {
    // console.log("cada tarea", tarea);
    const elementoTarea = ComponenteTarea(tarea);
    listaTareas.appendChild(elementoTarea);
  })
}

dibujarTareas();