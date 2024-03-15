import {Boton} from "../../Atomos/Boton"
import { Input } from "../../Atomos/Input"
import Logo from "../../../assets/Imagenes/Logo.png"
import configuracion from "../../../assets/Imagenes/configuracion.png"
import "./Navegador.css"
export function Navegador(){
    return(<>
          <div className="Contenedor-Navegacion">
        <div className="Navegacion">
          <img className="Logo" src={Logo} />
          <div className="Contenedor-Botones">
            <Input className="Buscador" type="text" placeholder="Buscar"></Input>
            <Boton className="Botones" TextoBoton="Inicio"></Boton>
            <Boton className="Botones" TextoBoton="Grupos"></Boton>
            <Boton className="Botones" TextoBoton="Articulos"></Boton>
            <Boton className="Botones" TextoBoton="Comunicados"></Boton>
          </div>
          <div className="Contenedor-Opciones">
          <Boton className="Botones" TextoBoton="Mi_Perfil"></Boton>
          <button className="Botoness" ><img className="ConfiguracionIcon" src={configuracion}/></button>
          </div>
        </div>
      </div>
    </>)
}