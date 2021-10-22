/*jshint esversion: 8 */
const inquirer = require("inquirer");
const colors = require("colors");

//? opciones del menu
const questions = [{
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
        {
            value: '1',
            name: `${'1.'.green} Crear tarea`
        },
        {
            value: '2',
            name: `${'2.'.green} Listar tareas`
        },
        {
            value: '3',
            name: `${'3.'.green} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.green} Listar tereas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.green} Completar terea(s)`
        },
        {
            value: '6',
            name: `${'6.'.green} Borrar tareas`
        },
        {
            value: '0',
            name: `${'7.'.green} salir`
        },
]
}];

//? Menu
const inquirerMenu = async ()=>{
    console.clear();

    console.log("=================================".green);
    console.log("**Seleccione una opcion**".green);
    console.log("=================================\n".green);

    const {opcion} = await inquirer.prompt(questions);

    return opcion;
};

//? presionar enter para continuar
const pausa = async ()=>{
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar`
    }];

    console.log("\n");
    await inquirer.prompt(question);
};

//? lee una entrada por teclado
const leerInput = async (message)=>{
    const question = {
        type: 'input',
        name: 'descripcion',
        message,
        validate(value){
            if(value.length === 0){
                return "Por favor ingresa un valor";
            }
            return true;
        }
    };

    const {descripcion} = await inquirer.prompt(question);

    return descripcion;
};

//? lista de tareas para el menu de borrar
const listadoTareasBorrar = async (tareas = []) =>{
    const choices = tareas.map((tarea,index)=>{

        const indice = `${index += 1}.`.green;
        return{
            value: tarea.id,
            name: `${indice} ${tarea.descripcion}`
        };
    });

    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`
    });

    const question = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }];

    const {id} = await inquirer.prompt(question);
    return id;
};

//? mensage de confirmacion
const confirmar = async (message)=>{
    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const {ok} = await inquirer.prompt(question);
    return ok;
};

//? menu para el listado de completar tareas
const mostrarListadoCheckList = async (tareas = []) =>{
    const choices = tareas.map((tarea,index)=>{

        const indice = `${index += 1}.`.green;
        return{
            value: tarea.id,
            name: `${indice} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false
        };
    });

    const question = [{
        type: 'checkbox',
        name: 'id',
        message: 'Selecione',
        choices
    }];

    const {id} = await inquirer.prompt(question);
    return id;
};



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
};