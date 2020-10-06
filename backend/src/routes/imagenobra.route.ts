import { Router } from "express";
//importamos la clase del archivo controller para hacer uso en la ruta
import { ImagenobraController } from "../controllers/imagenobra.controller"; 

//creamos una instancia de la clase 
const imagenobraController = new ImagenobraController(); 
const enrutadorImagenObras = Router(); 

//hacemos uso de las funciones de router en la variable enrutador
enrutadorImagenObras.route('/imagenobra').get(imagenobraController.listarImagenobra);
enrutadorImagenObras.route('/imagenobra').post(imagenobraController.guardarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').delete(imagenobraController.eliminarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').put(imagenobraController.actualizarImagenobra);
enrutadorImagenObras.route('/imagenobra/:id_codigo').get(imagenobraController.obtenerUnaimagenobra);

//exportamos las rutas
export default enrutadorImagenObras;
