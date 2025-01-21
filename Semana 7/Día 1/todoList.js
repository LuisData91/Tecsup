let todoList={
    tareas:[


    ],
    agregarTarea:function(descripcion){
        // creamos un nuevo objeto dentro de la funcion
        let nuevaTarea={
            id:this.tareas.length+1,
            descripcion:descripcion,
            finalizado:false,
            activo:true

        }
        todoList.tareas.push(nuevaTarea);
    },
    completarTarea:function(id){
    let posicion=this.encontrarTarea(id);
    // console.log("Posición", posicion);
    this.tareas[posicion].finalizado=true;
    console.log(`la tarea ${this.tareas[posicion].descripcion} se completó`)
    },
    encontrarTarea:function(id){
        console.log("param id en encotrartarea", id);
        //devolmerme la posicion de la tarea que buscariamos
        // posicion que guarde el elemento encontrado y que diga cual es, por defecto -1
        let posicion=-1;
        for(let i = 0;i<this.tareas.length;i++){
            if(id===this.tareas[i].id){
                posicion=i;
            }
        }
        return posicion;
    },
    eliminarTarea:function(id){
        let posicion=this.encontrarTarea(id);
        console.log(posicion);
        this.tareas[posicion].activo=false;
    },
    listarTareas:function(){
        let tareasActivas=[];
        for(let i=0;i<this.tareas.length;i++){
        //    la tarea que estamos usando esta activa
            if(this.tareas[i].activo===true){
                // si esta activa la agregamos
                tareasActivas.push(this.tareas[i]);

            }
        }
        console.log("lista tareas activas",tareasActivas);
        return tareasActivas;
    }

}

todoList.agregarTarea("Ir al médico");
todoList.agregarTarea("Ir al Baño");
todoList.agregarTarea("Ir al Dentista");
todoList.agregarTarea("Ir al Trabajo");
todoList.completarTarea(2);
todoList.eliminarTarea(2);
todoList.listarTareas();

// console.log(todoList);
// console.table(todoList.tareas);