import { Router } from "express";
import { galeriaController } from "../controllers/galeria.controller";
//se importa la libreria con la nueva configuracion
import multer from "../libs/multer";

const GaleriaController = new galeriaController();
const enrutadorGaleria = Router();


enrutadorGaleria.route('/galeria').get(GaleriaController.listarGaleria);
//primero se ejecutara multer y luego el controller 
enrutadorGaleria.route('/galeria').post(multer.array('img_galeria'),GaleriaController.guardarGaleria);
enrutadorGaleria.route('/galeria/:id_codigo').delete(GaleriaController.eliminarGaleria);
enrutadorGaleria.route('/galeria/:id_codigo').put(GaleriaController.actualizarGaleria);
enrutadorGaleria.route('/galeria/:id_codigo').get(GaleriaController.obtenerGaleria);


export default enrutadorGaleria;