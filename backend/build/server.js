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
    }
    //Usaremos el formato json en nuestra app
    middleware() {
        this.app.use(express_1.default.json());
    }
}
exports.Server = Server;
