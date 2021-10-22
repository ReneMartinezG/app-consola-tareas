/*jshint esversion: 8 */
const colors = require("colors");
const { guardarDB,leerDB } = require("./helpers/manejarArchivo");
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar,confirmar,mostrarListadoCheckList} = require("./helpers/inquirer");
const Tarea = require("./models/Tarea");
const Tareas = require("./models/tareas");

console.clear();

const main = async ()=>{
    
    let opt = "";

    const tareas = new Tareas();
    
    const tareasDB = leerDB();

    if (tareasDB){
        //? cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
        
    }
    
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                //? Crear tarea
                const desc = await leerInput("Descripcion:");
                tareas.crearTarea(desc);
            break;

            case '2':
                //? listar tareas
                //*console.log(tareas.listadoArr);
                tareas.listadoCompleto();
            break;

            case '3':
                //? listar tareas completadas
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                //? listar tareas pendientes
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                //? completar tareas
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);               
            break;

            case '6':
            //? borrar tarea
            const id = await listadoTareasBorrar(tareas.listadoArr);
            if(id !== '0'){
                const ok = await confirmar("¿Esta seguro que desea eliminar?");
                if(ok){
                    tareas.borrarTarea(id);
                    console.log("Tarea borrada".green);
                }
            }
        
        }

        guardarDB(tareas.listadoArr);

        await pausa();
        
    } while (opt !== "0");
};

main();