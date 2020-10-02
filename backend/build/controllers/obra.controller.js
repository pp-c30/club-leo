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
class obraController {
    //Listar obras
    listarObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let obra = yield conectar.query("select * from obra");
            return res.json(obra);
        });
    }
    //Guardar Obra
    guardarObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let Obra = req.body;
            yield conectar.query("insert into obra set ?", [Obra]);
            return res.json("La obra fue guerdada exitosamente");
        });
    }
    //Eliminar una obra
    eliminarObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from obra where id_obra = ?", [codigo]);
            return res.json("La obra fue eliminada exitosamente");
        });
    }
    //La actualizacion de un obra
    actualizarObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bd = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield bd.query("update obra set ? where id_obra = ?", [nuevos_datos, codigo]);
            return res.json('La obra se actualizo exitosamente!');
        });
    }
    //Obtener una obra 
    obtenerObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let unaobra = yield conectar.query("select * from obra where id_obra = ?", [codigo]);
            return res.json(unaobra);
        });
    }
}
exports.obraController = obraController;
