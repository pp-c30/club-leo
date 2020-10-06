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
class CategoriadonacionController {
    listarCategoriadonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let categoria = yield conectar.query("select * from categoria_donacion");
            return res.json(categoria);
        });
    }
    guardarCategoriadonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let categoria = req.body;
            yield conectar.query("insert into categoria_donacion set ?", [categoria]);
            return res.json('La categoría fue guardada exitosamente!');
        });
    }
    eliminarCategoriadonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from categoria_donacion where id_categoria = ?", [codigo]);
            return res.json('La categoría fue eliminada exitosamente!');
        });
    }
    actualizarCategoriadonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield conectar.query("update categoria_donacion set ? where id_categoria = ?", [nuevos_datos, codigo]);
            return res.json("La categoría fue actualizada exitosamente!");
        });
    }
    obtenerUnacategoriadonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let categoria = yield conectar.query('select * from categoria_donacion where id_categoria = ?', [codigo]);
            return res.json(categoria);
        });
    }
}
exports.CategoriadonacionController = CategoriadonacionController;
