//me traigo la funcion aplicacion de express y express
import express, {Application} from "express"; 
//nos importamos los enrutadores
import enrutadorIndex  from "./routes/index.route";
import  enrutadorImagenObras  from "./routes/imagenobra.route";
import enrutadorObras from "./routes/obra.route";
import enrutadorDonaciones from "./routes/donaciones.route";
import enrutadorContacto from "./routes/contacto.route";
import  enrutadorQuienesSomos  from "./routes/quienessomos.route";
import enrutadorCategoriagaleria from "./routes/categoriagaleria.route";
import enrutadorCategoriadonacion from "./routes/categoriadonacion.route";
import enrutadorTipoObra from "./routes/tipoobra.route";
import  enrutadorCategoriaobra  from "./routes/categoriaobra.route";
import  enrutadorClasecontacto  from "./routes/clasecontacto.route";
import enrutadorAut from "./routes/autenticacion.route";

//importamos cors y morgan
import cors  from "cors";
import  morgan  from "morgan";

import path from "path";

export class Server{
    //Al atributo le decimos que es de tipo aplicacion para que pueda almacenar express
    app:Application;

    //en el constructor se ejecutaran los metodos
    constructor(){
        //almacenamos express en app para hacer uso de sus funciones
        this.app = express();
        this.configuracion();
        this.middleware();
        this.routes();
        
    }

    configuracion()
    {
        this.app.set('port', process.env.port || '3000'); //guardara un puerto remoto o guardara el puerto 3000
    }

    listen(){
        this.app.listen(this.app.get('port')); //obtendra el puerto del metodo configuracion
        console.log("servidor corriendo en el purto 3000")
    }

    //haremos uso de las rutas en nuestra app
    routes() 
    {
        this.app.use(enrutadorIndex);
        this.app.use(enrutadorImagenObras);
        this.app.use(enrutadorObras);
        this.app.use(enrutadorDonaciones);
        this.app.use(enrutadorContacto);
        this.app.use(enrutadorQuienesSomos);
        this.app.use(enrutadorCategoriagaleria);
        this.app.use(enrutadorCategoriadonacion);
        this.app.use(enrutadorTipoObra);
        this.app.use(enrutadorCategoriaobra);
        this.app.use(enrutadorClasecontacto);
        this.app.use(enrutadorAut);
        //la app usara la ruta upload para que el navegador pueda leer la carpeta y las imagenes
        this.app.use('/uploads', express.static(path.resolve('uploads')));
    }

    //Usaremos el formato json en nuestra app
    //usaremos cors y morgan para utilizar dos servidores y hacer las solicitudes http
    middleware()
    {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('dev'));
    }
}


