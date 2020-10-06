import { Router } from "express";
//importamos la clase del archivo controller para hacer uso en la ruta
import { CategoriadonacionController } from "../controllers/categoriadonacion.controller";

let enrutadorCategoriadonacion = Router();
//creamos una instancia de la clase 
let categoriadonacionController = new CategoriadonacionController();

//hacemos uso de las funciones de router en la variable enrutador
enrutadorCategoriadonacion.route('/categoriadonacion').get(categoriadonacionController.listarCategoriadonacion);
enrutadorCategoriadonacion.route('/categoriadonacion').post(categoriadonacionController.guardarCategoriadonacion);
enrutadorCategoriadonacion.route('/categoriadonacion/:id_codigo').delete(categoriadonacionController.eliminarCategoriadonacion);
enrutadorCategoriadonacion.route('/categoriadonacion/:id_codigo').put(categoriadonacionController.actualizarCategoriadonacion);
enrutadorCategoriadonacion.route('/categoriadonacion/:id_codigo').get(categoriadonacionController.obtenerUnacategoriadonacion);

//exportamos las rutas
export default enrutadorCategoriadonacion;

