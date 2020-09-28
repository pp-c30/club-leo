"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenobra_controller_1 = require("../controllers/imagenobra.controller");
const ImagenobraController = new imagenobra_controller_1.imagenobraController();
const enrutadorImagenObras = express_1.Router();
enrutadorImagenObras.route('/imagenobra').get(ImagenobraController.listarImagenobra);
enrutadorImagenObras.route('/imagenobra').post(ImagenobraController.guardarImagenobra);
exports.default = enrutadorImagenObras;
