/*jshint esversion: 8 */
const colors = require("colors");
const { guardarDB,leerDB } = require("./helpers/manejarArchivo");
const { inquirerMenu, pausa, leerInput} = require("./helpers/inquirer");
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
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
        
        }

        guardarDB(tareas.listadoArr);

        await pausa();
        
    } while (opt !== "0");
};

main();