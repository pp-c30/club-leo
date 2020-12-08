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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Autenticacioncontroller {
    registrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcryptjs_1.default.genSalt(10);
            const password_cifrada = yield bcryptjs_1.default.hash(req.body.password, salt);
            const unUsuario = {
                username: req.body.username,
                password: password_cifrada,
                email: req.body.email
            };
            const conectar = yield database_1.conexion();
            const resultado = yield conectar.query('insert into usuario set ?', [unUsuario]);
            //con la libreria jwt crea un  token con la id del usuario registrado y procesara una variable de entorno
            const token = jsonwebtoken_1.default.sign({ _id: resultado.insertId }, process.env.TOKEN_SECRET || '12qwaszx');
            res.json(token);
        });
    }
    ingresar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conectar = yield database_1.conexion();
            //se trae los datos del usuario 
            const usuario = yield conectar.query('select * from usuario where username = ?', [req.body.username]);
            if (!usuario[0]) {
                res.json('Usuario o contraseña incorrecta');
            }
            else {
                //se compara la contraseña que se ingresara
                const correctPasword = yield bcryptjs_1.default.compare(req.body.password, usuario[0].password);
                //si la contraseña no existe 
                if (!correctPasword) {
                    res.json('Contraseña incorrecta!');
                }
                else {
                    //si existe crea un token para la id
                    const token = jsonwebtoken_1.default.sign({ _id: usuario[0].id_usuario }, process.env.TOKEN_SECRET || '12qwaszx', {
                        expiresIn: 60 * 60 * 24
                    });
                    //se enviara el token en un res.header y los datos del usuario en un res.json para poder conformar un perfil del usuario
                    res.header('auth-token', token).json(usuario[0]);
                }
            }
        });
    }
}
exports.Autenticacioncontroller = Autenticacioncontroller;
