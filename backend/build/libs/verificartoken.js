"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validarToken(req, res, next) {
    //recive el token en header al iniciar secion
    const token = req.header('auth-token');
    //si no existe el token
    if (!token) {
        res.json('Acesso denegado');
    }
    // si existe el token, verifico el token que llega, y procesara la variable de entorno para saber si es valido o no
    const datosToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || '12qwaszx');
    console.log(datosToken);
    //si funciona correctamente se ejecutara el siguiente metodo de la ruta para mostrar
    next();
}
exports.validarToken = validarToken;
