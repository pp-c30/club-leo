"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importamos la clase del archivo controller para hacer uso en la ruta
const categoriadonacion_controller_1 = require("../controllers/categoriadonacion.controller");
let enrutadorCategoriadonacion = express_1.Router();
//creamos una instancia de la clase 
let categoriadonacionController = new categoriadonacion_controller_1.CategoriadonacionController();
//hacemos uso de las funciones de router en la variable enrutador
enrutadorCategoriadonacion.route('/categoriadonacion').get(categoriadonacionController.listarCategoriadonacion);
enrutadorCategoriadonacion.route('/categoriadonacion').post(categoriadonacionController.guardarCategoriadonacion);
enrutadorCategoriadonacion.route('/categoriadonacion/:id_codigo').delete(categoriadonacionController.eliminarCategoriadonacion);
enrutadorCategoriadonacion.route('/categoriadonacion/:id_codigo').put(categoriadonacionController.actualizarCategoriadonacion);
enrutadorCategoriadonacion.route('/categoriadonacion/:id_codigo').get(categoriadonacionController.obtenerUnacategoriadonacion);
//exportamos las rutas
exports.default = enrutadorCategoriadonacion;
