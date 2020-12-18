"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//me traigo la funcion aplicacion de express y express
const express_1 = __importDefault(require("express"));
//nos importamos los enrutadores
const index_route_1 = __importDefault(require("./routes/index.route"));
const imagenobra_route_1 = __importDefault(require("./routes/imagenobra.route"));
const obra_route_1 = __importDefault(require("./routes/obra.route"));
const donaciones_route_1 = __importDefault(require("./routes/donaciones.route"));
const contacto_route_1 = __importDefault(require("./routes/contacto.route"));
const quienessomos_route_1 = __importDefault(require("./routes/quienessomos.route"));
const categoriagaleria_route_1 = __importDefault(require("./routes/categoriagaleria.route"));
const categoriadonacion_route_1 = __importDefault(require("./routes/categoriadonacion.route"));
const tipoobra_route_1 = __importDefault(require("./routes/tipoobra.route"));
const categoriaobra_route_1 = __importDefault(require("./routes/categoriaobra.route"));
const clasecontacto_route_1 = __importDefault(require("./routes/clasecontacto.route"));
const autenticacion_route_1 = __importDefault(require("./routes/autenticacion.route"));
const imagengaleria_route_1 = __importDefault(require("./routes/imagengaleria.route"));
const galeria_route_1 = __importDefault(require("./routes/galeria.route"));
//importamos cors y morgan
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
class Server {
    //en el constructor se ejecutaran los metodos
    constructor() {
        //almacenamos express en app para hacer uso de sus funciones
        this.app = express_1.default();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    configuracion() {
        this.app.set('port', process.env.port || '3000'); //guardara un puerto remoto o guardara el puerto 3000
    }
    listen() {
        this.app.listen(this.app.get('port')); //obtendra el puerto del metodo configuracion
        console.log("servidor corriendo en el purto 3000");
    }
    //haremos uso de las rutas en nuestra app
    routes() {
        this.app.use(index_route_1.default);
        this.app.use(imagenobra_route_1.default);
        this.app.use(obra_route_1.default);
        this.app.use(donaciones_route_1.default);
        this.app.use(contacto_route_1.default);
        this.app.use(quienessomos_route_1.default);
        this.app.use(categoriagaleria_route_1.default);
        this.app.use(categoriadonacion_route_1.default);
        this.app.use(tipoobra_route_1.default);
        this.app.use(categoriaobra_route_1.default);
        this.app.use(clasecontacto_route_1.default);
        this.app.use(autenticacion_route_1.default);
        this.app.use(imagengaleria_route_1.default);
        this.app.use(galeria_route_1.default);
        //la app usara la ruta upload para que el navegador pueda leer la carpeta y las imagenes
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
    }
    //Usaremos el formato json en nuestra app
    //usaremos cors y morgan para utilizar dos servidores y hacer las solicitudes http
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
    }
}
exports.Server = Server;
