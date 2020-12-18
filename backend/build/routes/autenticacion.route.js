"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autenticacion_controller_1 = require("../controllers/autenticacion.controller");
const enrutadorAut = express_1.Router();
const autenticacioncontroller = new autenticacion_controller_1.Autenticacioncontroller();
enrutadorAut.route('/registro').post(autenticacioncontroller.registrar);
enrutadorAut.route('/ingreso').post(autenticacioncontroller.ingresar);
exports.default = enrutadorAut;
