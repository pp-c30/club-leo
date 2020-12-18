//importamos la clase del archivo controller para hacer uso en la ruta
import { CategoriaobraController } from "../controllers/categoriaobra.controller";
import { Router } from "express";
import { validarToken } from "../libs/verificartoken";

const enrutadorCategoriaobra = Router();
//creamos una instancia de la clase 
const categoriaobraController = new CategoriaobraController;

//hacemos uso de las funciones de router en la variable enrutador
enrutadorCategoriaobra.route('/categoriaobra').get(categoriaobraController.listarCategoriaobra);
enrutadorCategoriaobra.route('/categoriaobra-admin').get(categoriaobraController.listarCategoriaobra);


enrutadorCategoriaobra.route('/categoriaobra').post(categoriaobraController.guardarCategoriaobra);
enrutadorCategoriaobra.route('/categoriaobra/:id_codigo').delete(categoriaobraController.eliminarCategoriaobra);
enrutadorCategoriaobra.route('/categoriaobra/:id_codigo').put(categoriaobraController.actualizarCategoriaobra);


//exportamos las rutas
export default enrutadorCategoriaobra;