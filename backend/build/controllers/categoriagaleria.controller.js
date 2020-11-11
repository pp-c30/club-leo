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
exports.CategoriagaleriaController = void 0;
const database_1 = require("../database");
class CategoriagaleriaController {
    //listar categorias 
    listarCategoriagaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let categoria = yield conectar.query("select * from categoria_galeria");
            return res.json(categoria);
        });
    }
    //Guardar una categoria 
    guardarCategoriagaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let descripcion = req.body;
            yield conectar.query("insert into categoria_galeria set ?", [descripcion]);
            return res.json('La categoría fue guardada exitosamente!');
        });
    }
    //Eliminar una categoria 
    eliminarCategoriagaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from categoria_galeria where id_cg = ?", [codigo]);
            return res.json('La categoría fue eliminada exitosamente!');
        });
    }
    //La actualización una categoria
    actualizarCategoriagaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield conectar.query("update categoria_galeria set ? where id_cg = ?", [nuevos_datos, codigo]);
            return res.json('La categoría se actualizo exitosamente!');
        });
    }
    //Se obtiene una categoria
    obtenerUnacategoriagaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let categoria = yield conectar.query('select * from categoria_galeria where id_cg = ?', [codigo]);
            return res.json(categoria);
        });
    }
}
exports.CategoriagaleriaController = CategoriagaleriaController;
