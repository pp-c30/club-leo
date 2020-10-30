import { Router } from "express";
//importamos la clase del archivo controller para hacer uso en la ruta
import { ImagengaleriaController } from "../controllers/imagengaleria.controller"; 

//creamos una instancia de la clase 
const imagengaleriaController = new ImagengaleriaController(); 
const enrutadorImagenGaleria = Router(); 

//hacemos uso de las funciones de router en la variable enrutador
enrutadorImagenGaleria.route('/imagengaleria').get(imagengaleriaController.listarImagengaleria);
enrutadorImagenGaleria.route('/imagengaleria').post(imagengaleriaController.guardarImagengaleria);
enrutadorImagenGaleria.route('/imagengaleria/:id_codigo').delete(imagengaleriaController.eliminarImagengaleria);
enrutadorImagenGaleria.route('/imagengaleria/:id_codigo').put(imagengaleriaController.actualizarImagengaleria);
enrutadorImagenGaleria.route('/imagengaleria/:id_codigo').get(imagengaleriaController.obtenerUnaimagengaleria);

//exportamos las rutas
export default enrutadorImagenGaleria;
