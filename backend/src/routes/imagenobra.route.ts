import { Router } from "express";
import { imagenobraController } from "../controllers/imagenobra.controller";

const ImagenobraController = new imagenobraController();
const enrutadorImagenObras = Router();


enrutadorImagenObras.route('/imagenobra').get(ImagenobraController.listarImagenobra);
enrutadorImagenObras.route('/imagenobra').post(ImagenobraController.guardarImagenobra);


export default enrutadorImagenObras;
