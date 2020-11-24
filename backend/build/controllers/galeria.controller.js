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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const cloudinary_1 = __importDefault(require("cloudinary"));
const fs_extra_1 = __importDefault(require("fs-extra"));
cloudinary_1.default.v2.config({
    cloud_name: 'dnicjefgk',
    api_key: '415915133939975',
    api_secret: 'VDGJ90dhgbybFw_gzAUdJe3raig'
});
class galeriaController {
    //Listar galeria
    listarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let listarGaleria = yield conectar.query("select * from galeria");
            return res.json(listarGaleria);
        });
    }
    //Guardar Galeria
    guardarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let files = req.files;
            const t = req.body.nombre_titulo;
            const d = req.body.nombre_descripcion;
            const c = req.body.nombre_categoria;
            const fecha = req.body.la_fecha;
            const unaGaleria = {
                titulo: t,
                descripcion: d,
                categoria: c,
                fecha_galeria: fecha
            };
            const resultado = yield conectar.query('insert into galeria set ?', [unaGaleria]);
            for (let i = 0; i < files.length; i++) {
                const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                const imagen_galeria = {
                    id_galeria: resultado.insertId,
                    imagen: resultado_cloudinary.url,
                    public_id: resultado_cloudinary.public_id,
                    categoria_galeria: c
                };
                yield conectar.query('insert into imagen_galeria set ?', [imagen_galeria]);
                yield fs_extra_1.default.unlink(files[i].path);
            }
            return res.json('se guardo exitosamente');
        });
    }
    //Eliminar una galeria
    eliminarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            yield conectar.query("delete from galeria where id_galeria = ?", [codigo]);
            return res.json("Galeria fue eliminada exitosamente");
        });
    }
    //La actualizacion de un galeria
    actualizarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bd = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let nuevos_datos = req.body;
            yield bd.query("update galeria set ? where id_galeria = ?", [nuevos_datos, codigo]);
            return res.json('La galeria se actualizo exitosamente!');
        });
    }
    //Obtener una galeria
    obtenerGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            let galeria = yield conectar.query("select * from galeria where id_obra = ?", [codigo]);
            return res.json(galeria);
        });
    }
}
exports.galeriaController = galeriaController;
