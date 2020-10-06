"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos la clase del archivo controller para hacer uso en la ruta
const categoriagaleria_controller_1 = require("../controllers/categoriagaleria.controller");
const express_1 = require("express");
let enrutadorCategoriagaleria = express_1.Router();
//creamos una instancia de la clase 
let categoriagaleriaController = new categoriagaleria_controller_1.CategoriagaleriaController;
//hacemos uso de las funciones de router en la variable enrutador
enrutadorCategoriagaleria.route('/categoriagaleria').get(categoriagaleriaController.listarCategoriagaleria);
enrutadorCategoriagaleria.route('/categoriagaleria').post(categoriagaleriaController.guardarCategoriagaleria);
enrutadorCategoriagaleria.route('/categoriagaleria/:id_codigo').delete(categoriagaleriaController.eliminarCategoriagaleria);
enrutadorCategoriagaleria.route('/categoriagaleria/:id_codigo').put(categoriagaleriaController.actualizarCategoriagaleria);
enrutadorCategoriagaleria.route('/categoriagaleria/:id_codigo').get(categoriagaleriaController.obtenerUnacategoriagaleria);
//exportamos las rutas
exports.default = enrutadorCategoriagaleria;
