/*jshint esversion: 8 */
const { v4: uuidv4 } = require('uuid');

//? esqueleto de la tarea
class Tarea {
    
    // id = "";
    // descripcion = "";
    // completadoEn = null;

    constructor(descripcion){
        this.id = uuidv4();
        this.descripcion = descripcion;
        this.completadoEn = null;
    }
} 

module.exports = Tarea;