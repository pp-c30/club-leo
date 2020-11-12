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
class CategoriaobraController {
    //listar categorias 
    listarCategoriaobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let categoria = yield conectar.query("select * from categoria_obra");
            return res.json(categoria);
        });
    }
    //Guardar una categoria 
    guardarCategoriaobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let descripcion = req.body;
            yield conectar.query("insert into categoria_obra set ?", [descripcion]);
            return res.json('La categoría fue guardada exitosamente!');
        });
    }
    //Eliminar una categoria 
    eliminarCategoriaobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from categoria_obra where id_co = ?", [codigo]);
            return res.json('La categoría fue eliminada exitosamente!');
        });
    }
    //La actualización una categoria
    actualizarCategoriaobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield conectar.query("update categoria_obra set ? where id_co = ?", [nuevos_datos, codigo]);
            return res.json('La categoría se actualizo exitosamente!');
        });
    }
    //Se obtiene una categoria
    obtenerUnacategoriaobra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let categoria = yield conectar.query('select * from categoria_obra where id_co = ?', [codigo]);
            return res.json(categoria);
        });
    }
}
exports.CategoriaobraController = CategoriaobraController;
