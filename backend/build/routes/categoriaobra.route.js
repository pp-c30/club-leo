"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos la clase del archivo controller para hacer uso en la ruta
const categoriaobra_controller_1 = require("../controllers/categoriaobra.controller");
const express_1 = require("express");
const enrutadorCategoriaobra = express_1.Router();
//creamos una instancia de la clase 
const categoriaobraController = new categoriaobra_controller_1.CategoriaobraController;
//hacemos uso de las funciones de router en la variable enrutador
enrutadorCategoriaobra.route('/categoriaobra').get(categoriaobraController.listarCategoriaobra);
enrutadorCategoriaobra.route('/categoriaobra').post(categoriaobraController.guardarCategoriaobra);
enrutadorCategoriaobra.route('/categoriaobra/:id_codigo').delete(categoriaobraController.eliminarCategoriaobra);
enrutadorCategoriaobra.route('/categoriaobra/:id_codigo').put(categoriaobraController.actualizarCategoriaobra);
//exportamos las rutas
exports.default = enrutadorCategoriaobra;
