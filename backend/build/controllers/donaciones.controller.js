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
class donacionesController {
    //Listar todas las donaciones
    listarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let donaciones = yield conectar.query("select * from donaciones");
            return res.json(donaciones);
        });
    }
    //Guardar donaciones
    guardarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let Donaciones = req.body;
            yield conectar.query("insert into donaciones set ?", [Donaciones]);
            return res.json("Las donaciones fueron guardadas exitosamente");
        });
    }
    //Eliminar una donacion
    eliminarDonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from donacion where id_donacion = ?", [codigo]);
            return res.json("La donacion fue eliminada exitosamente");
        });
    }
    //La actualizacion de una donacion
    actualizarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bd = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield bd.query("update donaciones set ? where id_donacion = ?", [nuevos_datos, codigo]);
            return res.json('La donacion se actualizo exitosamente!');
        });
    }
    //Obtener una donacion
    obtenerDonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let donacion = yield conectar.query("select * from donacion where id_donacion= ?", [codigo]);
            return res.json(donacion);
        });
    }
}
exports.donacionesController = donacionesController;
