"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importamos la libreria para configurar el guardado de imagenes
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
//se imaporta la herramienta para que nos genere nombres alfanumericos
const uuid_1 = require("uuid");
//almacenara la funcion de configuracion
const storage = multer_1.default.diskStorage({
    //la carpeta en la que se almacenaran las imagenes
    destination: 'uploads',
    filename: (req, file, cb) => {
        //se renombrara las imagenes respetando la misma extencion
        cb(null, uuid_1.v4() + path_1.default.extname(file.originalname));
    }
});
//se exporta la libreria
exports.default = multer_1.default({ storage });
