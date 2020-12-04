"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos la clase del archivo controller para hacer uso en la ruta
const clasecontacto_controller_1 = require("../controllers/clasecontacto.controller");
const express_1 = require("express");
const enrutadorClasecontacto = express_1.Router();
//creamos una instancia de la clase 
const clasecontactoController = new clasecontacto_controller_1.ClasecontactoController;
//hacemos uso de las funciones de router en la variable enrutador
enrutadorClasecontacto.route('/clasecontacto').get(clasecontactoController.listarClasecontacto);
//exportamos las rutas
exports.default = enrutadorClasecontacto;
