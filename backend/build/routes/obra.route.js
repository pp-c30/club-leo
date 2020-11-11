"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obra_controller_1 = require("../controllers/obra.controller");
//se importa la libreria con la nueva configuracion
const multer_1 = __importDefault(require("../libs/multer"));
const ObraController = new obra_controller_1.obraController();
const enrutadorObras = express_1.Router();
enrutadorObras.route('/obra').get(ObraController.listarObra);
//primero se ejecutara multer y luego el controller 
enrutadorObras.route('/obra').post(multer_1.default.array('img_obra'), ObraController.guardarObra);
enrutadorObras.route('/obra/:id_codigo').delete(ObraController.eliminarObra);
enrutadorObras.route('/obra/:id_codigo').put(ObraController.actualizarObra);
enrutadorObras.route('/obra/:id_codigo').get(ObraController.obtenerObra);
enrutadorObras.route('/obra-imagen/:id_obra').get(ObraController.listarImagenesObra);
exports.default = enrutadorObras;
