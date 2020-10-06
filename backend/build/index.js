"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server"); //me traigo la clase server del archivo server
//Creamos una funcion principal para luego ejecutar el server
function principal() {
    const servidor = new server_1.Server(); //Se crea la instancia de la clase
    servidor.listen(); //Nos traemos el metodo listen para ejecutarla
}
//Se ejecuta la funcion principal
principal();
