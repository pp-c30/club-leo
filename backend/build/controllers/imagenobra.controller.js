"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class imagenobraController {
    listarImagenobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let imagen = yield conectar.query("select * from imagen_obra");
            return res.json(imagen);
        });
    }
    guardarImagenobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let imagen = req.body;
            yield conectar.query("insert into imagen_obra set ?", [imagen]);
            return res.json("la pelicula fue guerdada exitosamente");
        });
    }
}
exports.imagenobraController = imagenobraController;
