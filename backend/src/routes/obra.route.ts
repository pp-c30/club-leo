import { Router } from "express";
import { obraController } from "../controllers/obra.controller";

const ObraController = new obraController();
const enrutadorObras = Router();


enrutadorObras.route('/obra').get(ObraController.listarObra);
enrutadorObras.route('/obra').post(ObraController.guardarObra);
enrutadorObras.route('/obra/:id_codigo').delete(ObraController.eliminarObra);
enrutadorObras.route('/obra/:id_codigo').put(ObraController.actualizarObra);
enrutadorObras.route('/obra/:id_codigo').get(ObraController.obtenerObra);


export default enrutadorObras;