import { Router } from "express";
import { obraController } from "../controllers/obra.controller";
//se importa la libreria con la nueva configuracion
import multer from "../libs/multer";

const ObraController = new obraController();
const enrutadorObras = Router();


enrutadorObras.route('/obra').get(ObraController.listarObra);
//primero se ejecutara multer y luego el controller 
enrutadorObras.route('/obra').post(multer.array('img_obra'),ObraController.guardarObra);
enrutadorObras.route('/obra/:id_codigo').delete(ObraController.eliminarObra);
enrutadorObras.route('/obra/:id_codigo').put(ObraController.actualizarObra);
enrutadorObras.route('/obra/:id_codigo').get(ObraController.obtenerObra);
enrutadorObras.route('/obra-imagen/:id_obra').get(ObraController.listarImagenesObra);
//el put es para agregar un body y tambien recibir parametros 
enrutadorObras.route('/agregar-imagenes-obra/:id_obra').put(multer.array('img-obra'), ObraController.guardarImagenesObra);
export default enrutadorObras;