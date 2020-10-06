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
class QuienessomosController {
    //Listar quienes somos
    listarQuienesomos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let descripcion = yield conectar.query("select * from quienes_somos");
            return res.json(descripcion);
        });
    }
    //Guardar quienes somos
    guardarQuienessomos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let descripcion = req.body;
            yield conectar.query("insert into quienes_somos set ?", [descripcion]);
            return res.json("la descripción fue guardada exitosamente!");
        });
    }
    //La eliminación de descripcion
    eliminarQuienessomos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from quienes_somos where id_qs = ?", [codigo]);
            return res.json("la descripción fue eliminada exitosamente!");
        });
    }
    //La actualización de una descripcion
    actualizarQuienessomos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bd = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield bd.query("update quienes_somos set ? where id_qs = ?", [nuevos_datos, codigo]);
            return res.json('La descripción se actualizo exitosamente!');
        });
    }
    //Obtener una descripción
    obtenerUnquienessomos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let unadescripcion = yield conectar.query("select * from quienes_somos where id_qs= ?", [codigo]);
            return res.json(unadescripcion);
        });
    }
}
exports.QuienessomosController = QuienessomosController;
