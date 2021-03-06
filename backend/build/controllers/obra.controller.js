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
class obraController {
    //Listar obras
    listarObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let obra = yield conectar.query('select *,(select descripcion from tipo_obra where id_tipo = o.tipo) as tipo, tipo as id_tipo, (select descripcion from categoria_obra where id_co = o.categoria) as categoria, categoria as id_categoria, DATE_FORMAT(fecha_obra, "%d/%m/%Y") as fecha_obra, DATE_FORMAT(fecha_obra, "%Y") as year, DATE_FORMAT(fecha_obra, "%m") as month, DATE_FORMAT(fecha_obra, "%d") as day from obra o');
            return res.json(obra);
        });
    }
    //Guardar Obra
    guardarObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let files = req.files;
            const t = req.body.titulo;
            const d = req.body.descripcion;
            const c = req.body.categoria;
            const fecha = req.body.fecha_obra;
            const tipos = req.body.tipo;
            const estados = Number(req.body.estado);
            const unaObra = {
                titulo: t,
                descripcion: d,
                categoria: c,
                fecha_obra: fecha,
                tipo: tipos,
                estado: estados
            };
            const resultado = yield conectar.query('insert into obra set ?', [unaObra]);
            for (let i = 0; i < files.length; i++) {
                const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                const imagen_obra = {
                    id_obra: resultado.insertId,
                    imagen_url: resultado_cloudinary.url,
                    public_id: resultado_cloudinary.public_id
                };
                yield conectar.query('insert into imagen_obra set ?', [imagen_obra]);
                yield fs_extra_1.default.unlink(files[i].path);
            }
            return res.json('se guardo exitosamente');
        });
    }
    //Eliminar una obra
    eliminarCategoriaObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let codigo = req.params.id_codigo;
            try {
                yield conectar.query("delete from obra where id_obra = ?", [codigo]);
                return res.json("La obra fue eliminada exitosamente");
            }
            catch (error) {
                return res.json("No se pudo eliminar una obra que este siendo utilizada por una imagen");
            }
        });
    }
    //La actualizacion de un obra
    actualizarObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //actuara cuando no lleguen imagenes
            if (!req.file) {
                const conectar = yield database_1.conexion();
                //obtener los datos del body pero solo necesitamos la id para actualizar
                let unaObra = req.body;
                const nuesvos_datos = {
                    titulo: req.body.titulo,
                    descripcion: req.body.descripcion,
                    categoria: req.body.categoria,
                    estado: req.body.estado,
                    fecha_obra: req.body.fecha_obra,
                    tipo: req.body.tipo
                };
                yield conectar.query("update obra set ? where id_obra = ?", [nuesvos_datos, unaObra.id_obra]);
                return res.json('La obra se actualizo exitosamente!');
            }
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
    //lista de imagenes de obra de la tabla imagenes_obra
    listarImagenesObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_obra = req.params.id_obra;
            let conectar = yield database_1.conexion();
            let lista_imagenes = yield conectar.query('select * from imagen_obra where id_obra = ?', [id_obra]);
            return res.json(lista_imagenes);
        });
    }
    guardarImagenesObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            const archivos = req.files;
            let id_obra = req.params.id_obra;
            for (let i = 0; i < archivos.length; i++) {
                const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(archivos[i].path);
                const imagenes_obra = {
                    id_obra: id_obra,
                    imagen_url: resultado_cloudinary.url,
                    public_id: resultado_cloudinary.public_id
                };
                yield conectar.query('insert into imagen_obra set ?', [imagenes_obra]);
                yield fs_extra_1.default.unlink(archivos[i].path);
            }
            return res.json('Se agregaron las imagenes de manera exitosa!');
        });
    }
    eliminarImagenesObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            let id_io = req.params.id_io;
            let public_id = req.params.public_id;
            yield conectar.query('delete from imagen_obra where id_io = ?', [id_io]);
            yield cloudinary_1.default.v2.uploader.destroy(public_id);
            res.json('Se elimino exitosamente!');
        });
    }
    eliminarObra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_obra = req.params.id_obra;
            const conectar = yield database_1.conexion();
            let lista_imagenes_obra = yield conectar.query('select * from imagen_obra where id_obra = ?', [id_obra]);
            for (let i = 0; i < lista_imagenes_obra.length; i++) {
                yield cloudinary_1.default.v2.uploader.destroy(lista_imagenes_obra[i].public_id);
            }
            yield conectar.query('delete from imagen_obra where id_obra = ?', [id_obra]);
            yield conectar.query('delete from obra where id_obra = ?', [id_obra]);
            res.json('Se elimino completamente la obra!');
        });
    }
    establecerPortada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibimos la id de la imagen que seleccionemos
            let id_io = req.params.id_io;
            //reciviremos la id de la obra que se selecciono
            let id_obra = req.params.id_obra;
            const conectar = yield database_1.conexion();
            //primero se pone todas las imagenes en la columna portada en cero
            const portadasEnEstadoCero = {
                portada: 0,
            };
            yield conectar.query('update imagen_obra set ? where id_obra = ? ', [portadasEnEstadoCero, id_obra]);
            //con la id elegimos la imagen de la columna portada que cambiara en 1
            const datos_imagenes_evento = {
                portada: 1,
            };
            yield conectar.query('update imagen_obra set ? where id_io = ?', [datos_imagenes_evento, id_io]);
            //de la imagen seleccionada nos traeremos todos los datos de esa imagen portada, seleccionda por su id
            const unaFila = yield conectar.query('select * from imagen_obra where id_io = ?', [id_io]);
            //creamos un objeto que guardara la url de los datos que nos traimos y se guardara en la culumna imagen
            let datosObra = {
                imagen: unaFila[0].imagen_url,
            };
            //luego traemos la url de la imagen seleccionada y la guardamos actualizando la columna imagen de la tabla obra
            yield conectar.query('update obra set ? where id_obra = ?', [datosObra, id_obra]);
            res.json('Se estableció portada!');
        });
    }
}
exports.obraController = obraController;
