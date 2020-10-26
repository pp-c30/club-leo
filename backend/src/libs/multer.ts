//importamos la libreria para configurar el guardado de imagenes
import multer from "multer";

import path from "path";
//se imaporta la herramienta para que nos genere nombres alfanumericos
import { v4 as uuidv4 } from "uuid";

//almacenara la funcion de configuracion
const storage = multer.diskStorage({
    //la carpeta en la que se almacenaran las imagenes
    destination:'uploads',
    filename: (req,file,cb) => {
        //se renombrara las imagenes respetando la misma extencion
        cb(null, uuidv4()+path.extname(file.originalname));
    }
})

//se exporta la libreria
export default multer({storage});