"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importamos la clase del archivo controller para hacer uso en la ruta
const quienessomos_controller_1 = require("../controllers/quienessomos.controller");
//creamos una instancia de la clase 
const quienessomosController = new quienessomos_controller_1.QuienessomosController();
const enrutadorQuienesSomos = express_1.Router();
//hacemos uso de las funciones de router en la variable enrutador
enrutadorQuienesSomos.route('/quienessomos').get(quienessomosController.listarQuienesomos);
enrutadorQuienesSomos.route('/quienessomos').post(quienessomosController.guardarQuienessomos);
enrutadorQuienesSomos.route('/quienessomos/:id_codigo').delete(quienessomosController.eliminarQuienessomos);
enrutadorQuienesSomos.route('/quienessomos/:id_codigo').put(quienessomosController.actualizarQuienessomos);
enrutadorQuienesSomos.route('/quienessomos/:id_codigo').get(quienessomosController.obtenerUnquienessomos);
//exportamos las rutas
exports.default = enrutadorQuienesSomos;
