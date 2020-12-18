import { Router } from "express";
import { Autenticacioncontroller } from "../controllers/autenticacion.controller";


const enrutadorAut = Router();
const autenticacioncontroller = new Autenticacioncontroller();

enrutadorAut.route('/registro').post(autenticacioncontroller.registrar);
enrutadorAut.route('/ingreso').post(autenticacioncontroller.ingresar);

export default enrutadorAut;