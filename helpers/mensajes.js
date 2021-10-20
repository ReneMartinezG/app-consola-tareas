/*jshint esversion: 8 */
const colors = require("colors");

const mostrarMenu = ()=>{
    return new Promise((resolve)=>{
        console.clear();

        console.log("=================================".green);
        console.log("**Seleccione una opcion**".green);
        console.log("=================================\n".green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listas tareas completadas`);
        console.log(`${'4.'.green} Listar tereas pendientes`);
        console.log(`${'5.'.green} Completar terea(s)`);
        console.log(`${'6.'.green} Borrar tareas`);
        console.log(`${'0.'.green} salir\n`);

        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question("Selecione una opcion: ", (opt)=>{
            readLine.close();
            resolve(opt);
        });

    });
};

const pausa = ()=>{
    
    return new Promise( (resolve)=>{

        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt)=>{
            readLine.close();
            resolve();
        });

    });
};

module.exports = {
    mostrarMenu,
    pausa
};