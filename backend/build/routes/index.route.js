"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const enrutadorIdex = express_1.Router();
enrutadorIdex.route('/').get(index_controller_1.mensaje_bienvenida);
exports.default = enrutadorIdex;
