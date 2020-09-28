import { Router } from "express";
import { mensaje_bienvenida } from "../controllers/index.controller"


const enrutadorIdex = Router();
enrutadorIdex.route('/').get(mensaje_bienvenida)

export default enrutadorIdex;