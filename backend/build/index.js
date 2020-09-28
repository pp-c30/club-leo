"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server"); //me traigo la clase server del archivo server
function principal() {
    const servidor = new server_1.server(); //se instancia la clase para luego ser ejecutada
    servidor.listen(); //luego tambien se correra el servidor
}
principal(); // se ejecuta la funcion principal
