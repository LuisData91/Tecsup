import tareas from "./tareas.js";

const ComponenteTarea = (tarea) => {
    console.log("en componente tarea", tarea);
    //creamos un elemento div
    const divTarea = document.createElement("div");
    //lo llenamos de contenido en base a los datos de tarea
    divTarea.innerHTML = `
      <span>${tarea.descripcion}</span>
      <input type="checkbox" class="checkTarea" />
    `;
    //más capaz de lógica
    const checkBoxTarea=divTarea.querySelector(".checkTarea")
  if(tarea.finalizado){
    checkBoxTarea.checked=true;
  }

    checkBoxTarea.addEventListener("click",()=>{
      // alert(`click en checkbox"${tarea.id}`);
      if(checkBoxTarea.checked){
        tareas.finalizarTarea(tarea.id);
        
      }
      console.table("tarea")
    
  })
  return divTarea;

}

  export {
    ComponenteTarea
  }