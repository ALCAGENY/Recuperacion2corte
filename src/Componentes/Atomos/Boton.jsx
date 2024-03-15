export function Boton (props){
    return(<>
    <button className={props.className} onClick={props.onClick}>{props.TextoBoton}</button>
    </>)
}