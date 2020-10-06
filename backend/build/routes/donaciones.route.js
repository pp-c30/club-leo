"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donaciones_controller_1 = require("../controllers/donaciones.controller");
const DonacionesController = new donaciones_controller_1.donacionesController();
const enrutadorDonaciones = express_1.Router();
enrutadorDonaciones.route('/donaciones').get(DonacionesController.listarDonaciones);
enrutadorDonaciones.route('/donaciones').post(DonacionesController.guardarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_codigo').delete(DonacionesController.eliminarDonacion);
enrutadorDonaciones.route('/donaciones/:id_codigo').put(DonacionesController.actualizarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_codigo').get(DonacionesController.obtenerDonacion);
exports.default = enrutadorDonaciones;