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
class tipoobraController {
    //Listar todos los tipos de obras
    listarTipoObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let tipoobra = yield conectar.query("select * from tipo_obra");
            return res.json(tipoobra);
        });
    }
    //Guardar tipos de obras
    guardarTipoObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let TipoObra = req.body;
            yield conectar.query("insert into tipo_obra set ?", [TipoObra]);
            return res.json("Los tipos de obra fueron guardadas exitosamente");
        });
    }
    //Eliminar un tipo de obra
    eliminarTipoObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from tipo_obra where id_tipo = ?", [codigo]);
            return res.json("el tipo de obra fue eliminado exitosamente");
        });
    }
    //La actualizacion de un tipo de obra
    actualizarTipoObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bd = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield bd.query("update tipo_obra set ? where id_tipo = ?", [nuevos_datos, codigo]);
            return res.json('el tipo de obra se actualizo exitosamente!');
        });
    }
    //Obtener un tipo de obra
    obtenerTipoObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let tipoobra = yield conectar.query("select * from tipo_obra where id_tipo= ?", [codigo]);
            return res.json(tipoobra);
        });
    }
}
exports.tipoobraController = tipoobraController;
