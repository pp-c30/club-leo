import { Router } from "express";
import { obraController } from "../controllers/obra.controller";
//se importa la libreria con la nueva configuracion
import multer from "../libs/multer";

import { validarToken } from "../libs/verificartoken";

const ObraController = new obraController();
const enrutadorObras = Router();


enrutadorObras.route('/obras').get(ObraController.listarObra);
enrutadorObras.route('/obras-admin').get(validarToken, ObraController.listarObra);
//primero se ejecutara multer y luego el controller 
enrutadorObras.route('/obra').post(multer.array('img_obra'),ObraController.guardarObra);


enrutadorObras.route('/obra/:id_codigo').get(ObraController.obtenerObra);
enrutadorObras.route('/obra-imagen/:id_obra').get(ObraController.listarImagenesObra);
//el put es para agregar un body y tambien recibir parametros 
enrutadorObras.route('/agregar-imagenes-obra/:id_obra').put(multer.array('img-obra'), ObraController.guardarImagenesObra);
//resibiremos 2 paramateros para eliminar la imagen de la bdd y de cloudinary
enrutadorObras.route('/obra-imagen-detalle/:id_io/:public_id').delete(ObraController.eliminarImagenesObra);
//eliminar la obra
enrutadorObras.route('/obra/:id_obra').delete(ObraController.eliminarObra);
//actualizar obra
enrutadorObras.route('/obras/:id_obra').put(ObraController.actualizarObra);

enrutadorObras.route('/obra-portada/:id_io/:id_obra').get(ObraController.establecerPortada);

export default enrutadorObras;