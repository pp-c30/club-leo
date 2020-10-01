import { Router } from "express";
import { imagenobraController } from "../controllers/imagenobra.controller";

const ImagenobraController = new imagenobraController();
const enrutadorImagenObras = Router();


enrutadorImagenObras.route('/imagenobra').get(ImagenobraController.listarImagenobra);
enrutadorImagenObras.route('/imagenobra').post(ImagenobraController.guardarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').delete(ImagenobraController.eliminarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').put(ImagenobraController.actualizarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').get(ImagenobraController.obtenerUnaimagenobra);


export default enrutadorImagenObras;
