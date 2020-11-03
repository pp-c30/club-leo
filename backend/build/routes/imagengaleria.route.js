"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importamos la clase del archivo controller para hacer uso en la ruta
const imagengaleria_controller_1 = require("../controllers/imagengaleria.controller");
//creamos una instancia de la clase 
const imagengaleriaController = new imagengaleria_controller_1.ImagengaleriaController();
const enrutadorImagenGaleria = express_1.Router();
//hacemos uso de las funciones de router en la variable enrutador
enrutadorImagenGaleria.route('/imagengaleria').get(imagengaleriaController.listarImagengaleria);
enrutadorImagenGaleria.route('/imagengaleria').post(imagengaleriaController.guardarImagengaleria);
enrutadorImagenGaleria.route('/imagengaleria/:id_codigo').delete(imagengaleriaController.eliminarImagengaleria);
enrutadorImagenGaleria.route('/imagengaleria/:id_codigo').put(imagengaleriaController.actualizarImagengaleria);
enrutadorImagenGaleria.route('/imagengaleria/:id_codigo').get(imagengaleriaController.obtenerUnaimagengaleria);
//exportamos las rutas
exports.default = enrutadorImagenGaleria;
