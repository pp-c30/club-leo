"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const galeria_controller_1 = require("../controllers/galeria.controller");
//se importa la libreria con la nueva configuracion
const multer_1 = __importDefault(require("../libs/multer"));
const GaleriaController = new galeria_controller_1.galeriaController();
const enrutadorGaleria = express_1.Router();
enrutadorGaleria.route('/galeria').get(GaleriaController.listarGaleria);
//primero se ejecutara multer y luego el controller 
enrutadorGaleria.route('/galeria').post(multer_1.default.array('img_galeria'), GaleriaController.guardarGaleria);
enrutadorGaleria.route('/galeria/:id_codigo').delete(GaleriaController.eliminarGaleria);
enrutadorGaleria.route('/galeria/:id_codigo').put(GaleriaController.actualizarGaleria);
enrutadorGaleria.route('/galeria/:id_codigo').get(GaleriaController.obtenerGaleria);
exports.default = enrutadorGaleria;
