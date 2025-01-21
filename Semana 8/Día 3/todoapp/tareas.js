//va a ser la parte de manejo puramente de datos
const tareas = {
    estadoTareas: [
      /**Cómo va a ser cada tarea que agreguemos
       * {
       *  id: 1, descripcion: "Leer", finalizado: false, activo: true
       * }
       */
    ],
    agregarTarea: function (descripcion) {
      //después que creamos el objeto que representa una nueva Tarea
      const nuevaTarea = {
        id: this.estadoTareas.length + 1,
        descripcion: descripcion,
        finalizado: false,
        activo: true
      }
      //lo añadimos a estadoTareas
      this.estadoTareas.push(nuevaTarea);
      this.guardarEnLocalStorage(this.estadoTareas);
  
      console.log("mostrando tareas", this.estadoTareas);
    },
    leerTareas: function () {
      //retorne el estado de tareas
      const tareasActivas = this.estadoTareas.filter((item) => {
        return item.activo === true
        // return item.activo
      })
      return tareasActivas;
    },
    finalizarTarea:function(id){
     const posicionTareaEncontrada=this.estadoTareas.findIndex((item)=>{
        return item.id===id
        
     })
     if(posicionTareaEncontrada!==-1){
        
       this.estadoTareas[posicionTareaEncontrada].finalizado=true;
       this.guardarEnLocalStorage(this.estadoTareas);
     }
    },
    guardarEnLocalStorage:function(datos){
      console.log("datos antes ded", datos);
      // CONVERTIMOS LOS DATOS DE JS A JSON
      const datosJSON=JSON.stringify(datos);
      console.log("datos depues de stringify",datosJSON);
      // ya esta converttiod entonces se guadar en el localstorage
    localStorage.setItem("ListaTareas",datosJSON);
    },
    leerLocalStorage:function(){
      const tareasJSON=localStorage.getItem("ListaTareas");
      console.log("leyendo LS",tareasJSON);
      // convertimos el JSON a JS

      const tareasComoArray=JSON.parse(tareasJSON);
      console.log("ya convertido",tareasComoArray);
      // ponerlo dentor de nuestras tareas
      this.estadoTareas=[...tareasComoArray];
      console.log("revisando las tareas",this.estadoTareas);

    }
  };
  
  export default tareas;