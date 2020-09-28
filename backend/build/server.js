"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //me traigo la funcion aplicacion de express y express
const index_route_1 = __importDefault(require("./routes/index.route"));
const imagenobra_route_1 = __importDefault(require("./routes/imagenobra.route"));
class server {
    constructor() {
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
    routes() {
        this.app.use(index_route_1.default);
        this.app.use(imagenobra_route_1.default);
    }
    middleware() {
        this.app.use(express_1.default.json());
    }
}
exports.server = server;
