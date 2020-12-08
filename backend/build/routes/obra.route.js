"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obra_controller_1 = require("../controllers/obra.controller");
//se importa la libreria con la nueva configuracion
const multer_1 = __importDefault(require("../libs/multer"));
const verificartoken_1 = require("../libs/verificartoken");
const ObraController = new obra_controller_1.obraController();
const enrutadorObras = express_1.Router();
enrutadorObras.route('/obras').get(verificartoken_1.validarToken, ObraController.listarObra);
//primero se ejecutara multer y luego el controller 
enrutadorObras.route('/obra').post(multer_1.default.array('img_obra'), ObraController.guardarObra);
enrutadorObras.route('/obra/:id_codigo').get(ObraController.obtenerObra);
enrutadorObras.route('/obra-imagen/:id_obra').get(ObraController.listarImagenesObra);
//el put es para agregar un body y tambien recibir parametros 
enrutadorObras.route('/agregar-imagenes-obra/:id_obra').put(multer_1.default.array('img-obra'), ObraController.guardarImagenesObra);
//resibiremos 2 paramateros para eliminar la imagen de la bdd y de cloudinary
enrutadorObras.route('/obra-imagen-detalle/:id_io/:public_id').delete(ObraController.eliminarImagenesObra);
//eliminar la obra
enrutadorObras.route('/obra/:id_obra').delete(ObraController.eliminarObra);
//actualizar obra
enrutadorObras.route('/obras/:id_obra').put(ObraController.actualizarObra);
enrutadorObras.route('/obra-portada/:id_io/:id_obra').get(ObraController.establecerPortada);
exports.default = enrutadorObras;
