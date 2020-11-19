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
exports.ImagengaleriaController = void 0;
const database_1 = require("../database");
class ImagengaleriaController {
    //Listar imagenes 
    listarImagengaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let imagen = yield conectar.query("select * from imagen_galeria");
            return res.json(imagen);
        });
    }
    //Guardar imagen 
    guardarImagengaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let imagen = req.body;
            yield conectar.query("insert into imagen_galeria set ?", [imagen]);
            return res.json("la imagen fue guardada exitosamente");
        });
    }
    //Eliminacion de una imagen
    eliminarImagengaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from imagen_galeria where id_ig = ?", [codigo]);
            return res.json("la imagen fue eliminada exitosamente");
        });
    }
    //Actualizacion de una imagen 
    actualizarImagengaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bd = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield bd.query("update imagen_galeria set ? where id_ig = ?", [nuevos_datos, codigo]);
            return res.json('se actualizo exitosamente!');
        });
    }
    //Obtener una imagen 
    obtenerUnaimagengaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let unaimagen = yield conectar.query("select * from imagen_galeria where id_ig = ?", [codigo]);
            return res.json(unaimagen);
        });
    }
}
exports.ImagengaleriaController = ImagengaleriaController;
