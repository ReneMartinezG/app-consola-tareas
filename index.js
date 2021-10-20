/*jshint esversion: 8 */
const colors = require("colors");
const { inquirerMenu, pausa, leerInput} = require("./helpers/inquirer");
const Tarea = require("./models/Tarea");
const Tareas = require("./models/tareas");

console.clear();

const main = async ()=>{
    
    let opt = "";

    const tareas = new Tareas();
    
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
                console.log(tareas._listado);
            break;
        
        }

        await pausa();
        
    } while (opt !== "0");
};

main();