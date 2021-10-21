/*jshint esversion: 8 */
const colors = require("colors");
const Tarea = require("./Tarea");

//? lista de tareas
class Tareas {

    //_listado = {};

    //? lista de tareas
    //?llena el _istado = {} con la info del data.json
    get listadoArr(){
        //! el formato seria
        //*       {
         //*         id,
         //*         descripcion,
         //*         creadoEn
          //*     }
        //! este mismo formato es para guardarlo en el archivo data.json
        const listado = [];
        Object.keys(this._listado).forEach( (key)=>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }
        
    constructor(){
        this._listado = {};
    }

    //? lista todas las tareas
    cargarTareasFromArray(tareas = []){
        //! las tareas se guardan con el formato de crearTarea
        //! las tareas de imprimen con el formato de listadoArr
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    //? crea tarea
    crearTarea(desc = ''){
        //! el formato de listado de tareas seria:
        //* listado = [
        //*     id: {
        //*         id,
        //*         descripcion,
        //*         creadoEn
        //*     }
        //* ]
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    //? lista de manera ordenada las tareas
    listadoCompleto(){
        
        //* dos formas de hacerlo mismo resultado
        // let indice = 1;

        // Object.keys(this._listado).forEach( (key)=>{
            
        //     if(this._listado[key].completadoEn){
        //         console.log(`${indice}. ${this._listado[key].descripcion} :: ${'Terminado'.green}`);
        //     }else{
        //         console.log(`${indice}. ${this._listado[key].descripcion} :: ${'Pendiente'.red}`);
        //     }
        //     indice+= 1;
        // });      

        this.listadoArr.forEach( (tarea,indice)=>{
            const i = `${indice +1}.`.green ;
            const {descripcion, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${i} ${descripcion} :: ${estado}`);
        });
    }

    //? lista de tareas pendientes y terminadas (por separado)
    listarPendientesCompletadas(completadas = true){
        let index = 1;
        this.listadoArr.forEach( (tarea,indice)=>{
            
            const {descripcion, completadoEn} = tarea;
            //const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            //console.log(`${i} ${descripcion} :: ${estado}`);
            if(completadas){
                //* tareas completadas
                if(completadoEn){
                    console.log(`${(index+'.').green} ${descripcion} :: ${completadoEn.green}`);
                    index += 1;
                }
            }else{
                //* tareas pendientes
                if(!completadoEn){
                    console.log(`${(index+'.').green} ${descripcion} :: ${'Pendiente'.red}`);
                    index += 1;
                    }
            }
           
            
        });
    }


}

    

module.exports = Tareas;