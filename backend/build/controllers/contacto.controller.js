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
exports.contactoController = void 0;
const database_1 = require("../database");
class contactoController {
    //Listar todos los contactos
    listarContactos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let contacto = yield conectar.query("select * from contactos");
            return res.json(contacto);
        });
    }
    //Guardar contacto
    guardarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let Contacto = req.body;
            yield conectar.query("insert into contacto set ?", [Contacto]);
            return res.json("El contacto se guardo exitosamente");
        });
    }
    //Eliminar un contacto
    eliminarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from contacto where id_contacto = ?", [codigo]);
            return res.json("El contacto fue eliminado exitosamente");
        });
    }
    //Actualizar un contacto
    actualizarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bd = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield bd.query("update donaciones set ? where id_contacto = ?", [nuevos_datos, codigo]);
            return res.json('El contacto se actualizo exitosamente!');
        });
    }
    //Obtener un contacto
    obtenerContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let contacto = yield conectar.query("select * from donacion where id_contacto= ?", [codigo]);
            return res.json(contacto);
        });
    }
}
exports.contactoController = contactoController;
