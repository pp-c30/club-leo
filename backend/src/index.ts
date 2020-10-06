import { Server } from "./server"; //me traigo la clase server del archivo server

//Creamos una funcion principal para luego ejecutar el server
function principal() 
{
    const servidor = new Server(); //Se crea la instancia de la clase
    servidor.listen(); //Nos traemos el metodo listen para ejecutarla
}

//Se ejecuta la funcion principal
principal(); 