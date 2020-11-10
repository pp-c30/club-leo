//se crea una interfaz para capturar los elemetos del evento y asi poder leer la imagen para la vista previa
export interface IHtmlInputEvent {
    target:HTMLInputElement & EventTarget
}