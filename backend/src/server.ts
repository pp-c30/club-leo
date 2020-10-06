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
    }

    //Usaremos el formato json en nuestra app
    middleware()
    {
        this.app.use(express.json());
    }
}


