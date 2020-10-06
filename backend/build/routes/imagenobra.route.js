"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importamos la clase del archivo controller para hacer uso en la ruta
const imagenobra_controller_1 = require("../controllers/imagenobra.controller");
//creamos una instancia de la clase 
const imagenobraController = new imagenobra_controller_1.ImagenobraController();
const enrutadorImagenObras = express_1.Router();
//hacemos uso de las funciones de router en la variable enrutador
enrutadorImagenObras.route('/imagenobra').get(imagenobraController.listarImagenobra);
enrutadorImagenObras.route('/imagenobra').post(imagenobraController.guardarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').delete(imagenobraController.eliminarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').put(imagenobraController.actualizarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').get(imagenobraController.obtenerUnaimagenobra);
//exportamos las rutas
exports.default = enrutadorImagenObras;
