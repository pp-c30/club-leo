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
            return res.json("la imagen fue guerdada exitosamente");
        });
    }
    eliminarImagenobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from imagen_obra where id_io = ?", [codigo]);
            return res.json("la imagen fue eliminada exitosamente");
        });
    }
    //la actualizacion de una pelicular
    actualizarImagenobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bd = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield bd.query("update imagen_obra set ? where id_io = ?", [nuevos_datos, codigo]);
            return res.json('se actualizo exitosamente!');
        });
    }
    obtenerUnaimagenobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let unaimagen = yield conectar.query("select * from imagen_obra where id_io= ?", [codigo]);
            return res.json(unaimagen);
        });
    }
}
exports.imagenobraController = imagenobraController;
