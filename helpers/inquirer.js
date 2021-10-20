/*jshint esversion: 8 */
const inquirer = require("inquirer");
const colors = require("colors");

const questions = [{
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
        {
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. istar tareas'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tereas pendientes'
        },
        {
            value: '5',
            name: '5. Completar terea(s)'
        },
        {
            value: '6',
            name: '6. Borrar tareas'
        },
        {
            value: '0',
            name: '7. salir'
        },
]
}];

const inquirerMenu = async ()=>{
    console.clear();

    console.log("=================================".green);
    console.log("**Seleccione una opcion**".green);
    console.log("=================================\n".green);

    const {opcion} = await inquirer.prompt(questions);

    return opcion;
};

const pausa = async ()=>{
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar`
    }];

    console.log("\n");
    await inquirer.prompt(question);
};

module.exports = {
    inquirerMenu,
    pausa
};